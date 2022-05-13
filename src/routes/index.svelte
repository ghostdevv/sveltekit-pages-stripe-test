<script lang="ts">
    let loading = false;
    let customers = '';

    async function get_customers() {
        loading = true;

        const res = await fetch('/api/customers');
        const data = (await res.json()) as string[];

        customers = data.join('\n');

        loading = false;
    }
</script>

<h1>Stripe, Pages, SvelteKit testing</h1>

<button disabled={loading} on:click={get_customers}> Fetch customers </button>

{#if customers.length}
    <h1>Customers Names:</h1>
    <pre>{customers}</pre>
{/if}
