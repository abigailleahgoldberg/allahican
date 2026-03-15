import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return NextResponse.json({ error: 'No Stripe key' }, { status: 500 });

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2024-12-18.acacia' });

    // Check if coupon already exists
    try {
      await stripe.coupons.retrieve('allahican-10-off');
    } catch {
      await stripe.coupons.create({
        id: 'allahican-10-off',
        percent_off: 10,
        duration: 'forever',
        name: 'AllahiCan 10% Off',
      });
    }

    // Create promotion code if it doesn't exist
    const existingPromos = await stripe.promotionCodes.list({ code: 'UMMAH10', limit: 1 });
    if (existingPromos.data.length === 0) {
      await stripe.promotionCodes.create({
        coupon: 'allahican-10-off',
        code: 'UMMAH10',
        active: true,
      });
    }

    return NextResponse.json({ success: true, message: 'Coupon and promo code created' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
