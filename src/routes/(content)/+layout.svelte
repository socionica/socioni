<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Aside from "$lib/components/Aside.svelte";
    import Title from "$lib/components/Title.svelte";
</script>

<Sidebar/>
<div class='content'>
    <div class="title-container">
        <h1><Title text/></h1>
        <a class="source" href="/">FONTES</a>
    </div>
    <div class="article-container">
        <article>
            <slot/>
        </article>
        <Aside/>
    </div>
</div>

<style>
    .content {
        width: 80%;
    }

    .title-container {
        border-bottom: 1px solid var(--text-color);
        margin-right: 1rem;
        padding: 1rem 0;

        display: flex;
        place-content: space-between;
    }

    .source {
        color: var(--text-color);
        font-family: monospace;
        text-decoration: none;

        border: 1px dashed var(--text-color);
        border-radius: 2px;
        margin: auto 2rem;
        padding: 0.25rem;
        
        align-self: center;
    }

    .source:hover,
    .source:focus {
        background-color: var(--background-ter);
    }

    .article-container {
        display: flex;
    }

    article {
        width: 68.75%;
    }
</style>