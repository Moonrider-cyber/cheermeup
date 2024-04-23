import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

const getStripe = async () => {
  const stripe_publish_key = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
  if (!stripePromise) {
    stripePromise = loadStripe(stripe_publish_key);
  }
  return stripePromise;
};

export default getStripe;