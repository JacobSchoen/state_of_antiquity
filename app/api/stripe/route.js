import { NextResponse } from "next/server";
import Stripe from "stripe"

export async function POST(request) {

    // if (request.method !== 'POST') { return res.sendStatus(405) }
    const body = await request.json()

    // if (body.length === 0) {
    //     return new Response('Error', {
    //         status: 405,
    //     });
    // }

    try {
        const stripe = new Stripe(process.env.NEXT_PUBLIC_TEST_SECRET_STRIPE_KEY ?? '', {
            apiVersion: '2020-08-27'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        })
        return NextResponse.json({ session })
    } catch (err) {
        console.log('BROKED')
        console.log(err)
        return new Response('Error', {
            status: 405,
        });
    }
}

// export async function POST(request) {
//   const body = await request.json();

//   if (body.length === 0) {
//     return new Response("Error", {
//       status: 405,
//     });
//   }

//   try {
//     const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

//     const params = {
//       submit_type: "pay",
//       mode: "payment",
//       payment_method_types: ["card"],
//       billing_address_collection: "auto",
//       shipping_options: [],
      
//       success_url: `${request.headers.origin}/success`,
//       cancel_url: `${request.headers.origin}/canceled`,
//     };
//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create(params);

//     return NextResponse.json({ session })
//   } catch (err) {
//     return new Response('Error', { status: 405});
//   }
// }
