<script lang="ts">
	import { afterNavigate } from "$app/navigation";
    import { onMount, tick } from "svelte";
    import { pages } from "$lib/main.svelte"
    import Loading from "$lib/components/Loading.svelte";

    export let path: string = '';
    const page_paths = Array.from(pages.keys());

    let root_path: string = '';
    let complete: boolean = false;

    const pathParent = (path: string) => {
        return page_paths.find(p => p == path.slice(0, path.lastIndexOf('/')))!;
    }

    const pathParents = (path: string) => {
        const parents: string[] = [];
        for (let i = 0; i < path.split('/')!.length - 1; i++) {
            path = path.slice(0, path.lastIndexOf('/'));
            parents.push(page_paths.find(url => url == path)!);
        }
        return parents;
    }

    const pathChildren = (path: string) => {
        return page_paths.filter(p => p.startsWith(path + '/'));
    }

    const pathDirectChildren = (path: string) => {
        return pathChildren(path).filter(p => pathParent(p) === path)
    }

    const handleListExpansion = (e: MouseEvent & { currentTarget: EventTarget & HTMLUListElement }) => {
        const list = e.currentTarget;
        list.classList.toggle('open');
    }

    const updateList = () => {
        const sidebar_items = document.querySelectorAll('.sidebar-item');

        sidebar_items.forEach(item => {
            if (pathChildren(item.id)[0]) {
                let items_arr = Array.from(sidebar_items);
                items_arr.forEach(i => {
                    if (pathDirectChildren(item.id).includes(i.id)) {
                        item.appendChild(i);
                    }
                });
            }

            item.id == path || pathParents(path).includes(item.id) ? item.classList.add('open') : item.classList.remove('open');
        });


        complete = true;
    }

    onMount(async () => {
        path = window.location.pathname;
        root_path = '/' + path.split('/')[1];
        
        await tick();

        updateList()
    });
    afterNavigate(async () => {
        path = window.location.pathname;
        root_path = '/' + path.split('/')[1];
        
        await tick();

        updateList()
    });
</script>

<div class="sidebar">
    <nav class="sidebar-nav">
        {#if complete}
            {#each pathChildren(root_path) as p}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <ul id="{p}" on:click={(e) => handleListExpansion(e)} class="sidebar-item">
                    <a on:click={(e) => e.currentTarget.scrollIntoView({ behavior: "smooth", block: "center" })} href={p} >{pages.get(p)}</a>
                </ul>
            {/each}
        {:else}
            <Loading/>
        {/if}
    </nav>
    <div class="back-to-top">
        <button
        on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            ‹
        </button>
        voltar ao topo
    </div>
</div>

<style>
    .sidebar {
        background-color: var(--background-sec);
        margin-right: 1rem;
        height: 100vh;
        width: 20%;
        position: sticky;
        top: 0;
    }

    .sidebar-nav {
        height: calc(100vh - 4rem);
        overflow-y: scroll;
    }

    .sidebar-nav ul {
        background-color: hsla(0, 0%, 40%, 10%);

        margin: .5rem 0;
        padding: .5rem;
        border-radius: 5px 0 0 3px;
    }

    .sidebar-nav a {
        color: var(--text-color);
        text-decoration: none;
    }

    .sidebar-nav ul ul {
        display: none;
    }

    .sidebar-nav ul.open ul {
        display: block;
    }

    .back-to-top {
        background-color: var(--background-ter);
        border-radius: 5px;
        margin: .5rem;
        padding: .5rem;

        display: flex;
        place-content: center;
        place-items: center;
    }

    .back-to-top button {
        height: 2rem;
        min-width: 2rem;
        transform: rotate(90deg);

        margin-right: 1rem;

        background-color: var(--background-qua);
        border: none;
        border-radius: 3px;
        color: var(--text-color);
    }
</style>