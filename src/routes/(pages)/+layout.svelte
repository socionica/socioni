<script lang="ts">
    import Title from "$lib/components/Title.svelte";
</script>

<article>
    <h1><Title text/></h1>
    <slot/>
</article>
<!-- <aside>
    <Aside/>
</aside> -->

<style>
    article {
        min-height: 100vh;
        width: 100%;
    }

/*     aside {
        width: 25%;
    } */
</style>