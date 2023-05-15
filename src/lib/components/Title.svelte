<script lang="ts">
	import { pages } from "$lib/main.svelte";
    import { afterNavigate } from "$app/navigation";

    export let title: boolean = false;
    export let text: boolean = false;
    export let path: string = '';

    let page_title: string;
    
    afterNavigate(() => {
        if (path) {
            page_title = pages.get(path)!;
        } else {
            path = window.location.pathname;
            page_title = pages.get(path)!;
        }

        if (title && page_title) {
            document.title = page_title;
        }

        path = '';
    });
</script>

{#if text && page_title}
    {page_title}
{/if}