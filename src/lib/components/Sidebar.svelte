<script lang="ts">
    import { afterUpdate, tick } from "svelte";
    import { pages } from "$lib/main.svelte"

    export let path: string = '';
    const page_paths = Array.from(pages.keys());

    let root_path: string = '';
    let sidebar_items: NodeListOf<HTMLElement>;
    let complete: boolean = false;

    afterUpdate(async () => {
        path = window.location.pathname;
        root_path = '/' + path.split('/')[1];
        
        await tick();

        sidebar_items = document.querySelectorAll('.sidebar-item');
        
        sidebar_items.forEach(item => {
            if (pathChildren(item.id)[0]) {
                let items_arr = Array.from(sidebar_items);
                items_arr.forEach(i => {
                    if (pathDirectChildren(item.id).includes(i.id)) {
                        item.appendChild(i);
                    }
                });
            }
        });

        complete = true;
    });

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
        const anchor = list.nextElementSibling as HTMLAnchorElement;

        /* if (anchor.style.display === "block") {
            anchor.style.display = "none";
        } else {
            anchor.style.display = "block";
        }
        if (anchor.style.maxHeight) {
            anchor.style.maxHeight = null!;
        } else {
            anchor.style.maxHeight = anchor.scrollHeight + "px";
        }  */
    }

    const pathRelatives = (path: string, module: 'parent' | 'parents' | 'children') => {
        switch (module) {
            case "parent":
                const parent = page_paths.find(p => p == path.slice(0, path.lastIndexOf('/')))!;
                return parent;
            case "parents":
                const parents: string[] = [];
                for (let i = 0; i < path.split('/')!.length - 1; i++) {
                    path = path.slice(0, path.lastIndexOf('/'));
                    parents.push(page_paths.find(url => url == path)!);
                }
                return parents;
            case "children":
                const children = page_paths.filter(p => p.startsWith(path + '/'));
                return children;
        }
    }
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
            <div class="loading">
                <div class="dot-revolution"></div>
            </div>
            <style>
                .loading {
                    height: 100%;
                    display: flex;
                    place-content: center;
                    place-items: center;
                }
                .dot-revolution {
                    position: relative;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: var(--svg-color);
                    color: var(--svg-color);
                }
                .dot-revolution::before, .dot-revolution::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                }
                .dot-revolution::before {
                    left: 0;
                    top: -15px;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: var(--svg-color);
                    color: var(--svg-color);
                    transform-origin: 5px 20px;
                    animation: dot-revolution 1.4s linear infinite;
                }
                .dot-revolution::after {
                    left: 0;
                    top: -30px;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: var(--svg-color);
                    color: var(--svg-color);
                    transform-origin: 5px 35px;
                    animation: dot-revolution 1s linear infinite;
                }

                @keyframes dot-revolution {
                    0% {
                        transform: rotateZ(0deg) translate3d(0, 0, 0);
                    }
                    100% {
                        transform: rotateZ(360deg) translate3d(0, 0, 0);
                    }
                }
            </style>
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
        width: 20%;
    }

    .sidebar {
        position: sticky;
        top: 0;
        height: 100vh;
    }

    .sidebar-nav {
        height: calc(100vh - 4rem);
        overflow-y: scroll;
    }

    .sidebar-nav ul {
        background-color: hsla(0, 0%, 30%, 10%);

        margin: .5rem 0;
        padding: .5rem;
        border-radius: 5px 0 0 3px;
        transition: height 0.2s ease-in-out;
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