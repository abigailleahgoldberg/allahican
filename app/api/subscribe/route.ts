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
        return NextResponse.json({ success: true });
      }
      // Duplicate contact is fine
      if (response.status === 400 && text.includes("Contact already exist")) {
        return NextResponse.json({ success: true, message: "Already subscribed" });
      }
      console.error("Brevo API error:", response.status, text);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Subscribe failed";
    console.error("Subscribe error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
