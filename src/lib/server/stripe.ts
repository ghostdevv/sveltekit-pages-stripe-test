import Stripe from 'stripe';

export const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY, {
    apiVersion: '2020-08-27',
    httpClient: Stripe.createFetchHttpClient(),
});
