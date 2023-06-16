import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
let test = `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
const getStripe = () => {
  console.log('getstripe', test)
  if(!stripePromise) {
    stripePromise = loadStripe(test);
  }

  return stripePromise;
}

export default getStripe;