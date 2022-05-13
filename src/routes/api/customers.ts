import { stripe } from '$lib/server/stripe';

export const get = async () => {
    const res = await stripe.customers.list();

    const names = res.data.map((c) => c.name);

    return {
        status: 200,
        body: names,
    };
};
