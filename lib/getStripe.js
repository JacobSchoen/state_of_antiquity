import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
let test = `${process.env.NEXT_PUBLIC_TEST_PUBLISH_STRIPE_KEY}`
const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_TEST_PUBLISH_STRIPE_KEY}`);
  }

  return stripePromise;
}

export default getStripe;