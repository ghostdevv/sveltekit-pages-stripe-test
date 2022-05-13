export const createStripe = async () => {
    const { default: Stripe } = await import('stripe');

    return new Stripe(import.meta.env.VITE_STRIPE_KEY, {
        apiVersion: '2020-08-27',
        httpClient: Stripe.createFetchHttpClient(),
    });
};
