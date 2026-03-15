import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email: string };

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.warn("BREVO_API_KEY not set, skipping email subscription");
      return NextResponse.json({ success: true, message: "Subscribed successfully" });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
        attributes: {
          SOURCE: "allahican-signup",
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      // 204 No Content and 201 Created are both success
      if (response.status === 204 || response.status === 201) {
        // fall through to send welcome email
      } else if (response.status === 400 && text.includes("Contact already exist")) {
        // Duplicate contact is fine, fall through
      } else {
        console.error("Brevo API error:", response.status, text);
        return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
      }
    }

    // Send welcome email with coupon to subscriber
    const htmlContent =
      '<div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;">' +
      '<div style="background:#0C2E0C;padding:32px;text-align:center;">' +
      '<h1 style="color:#2D7D32;font-size:28px;margin:0;letter-spacing:2px;">AllahiCan</h1>' +
      '</div>' +
      '<div style="padding:40px 32px;background:#ffffff;text-align:center;">' +
      '<h2 style="color:#2D7D32;font-size:22px;margin-bottom:16px;">Assalamu Alaikum! Welcome to the community.</h2>' +
      '<p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:24px;">Barakallah for joining. Here\'s 10% off your first order:</p>' +
      '<div style="background:#f0f7f0;border:2px dashed #2D7D32;padding:24px;margin:24px 0;display:inline-block;">' +
      '<p style="color:#333333;font-size:14px;margin:0 0 8px;">Your discount code:</p>' +
      '<p style="color:#2D7D32;font-size:32px;font-weight:900;letter-spacing:4px;margin:0;">UMMAH10</p>' +
      '</div>' +
      '<p style="color:#333333;font-size:14px;margin:24px 0;">Use this code at checkout for 10% off your entire order.</p>' +
      '<a href="https://allahican.com/#shop" style="display:inline-block;background:#2D7D32;color:#ffffff;font-weight:900;font-size:16px;padding:16px 40px;text-decoration:none;letter-spacing:1px;">SHOP NOW</a>' +
      '</div>' +
      '<div style="padding:24px 32px;background:#0C2E0C;text-align:center;">' +
      '<p style="color:#2D7D32;font-size:12px;margin:0;">Where Iman meets America.</p>' +
      '<p style="color:#2D7D32;font-size:11px;margin:8px 0 0;opacity:0.6;">You received this because you subscribed at allahican.com</p>' +
      '</div>' +
      '</div>';

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "AllahiCan", email: "abigailleahgoldberg@gmail.com" },
        to: [{ email }],
        subject: "Welcome to the Ummah! Here's 10% Off",
        htmlContent: htmlContent,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Subscribe failed";
    console.error("Subscribe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
