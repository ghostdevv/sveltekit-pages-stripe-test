import { createStripe } from '$lib/server/stripe';

export const get = async () => {
    const stripe = await createStripe();
    const res = await stripe.customers.list();

    const names = res.data.map((c) => c.name);

    return {
        status: 200,
        body: names,
    };
};
