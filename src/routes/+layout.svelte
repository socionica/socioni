<script lang="ts">
    import "$lib/main.css";
    import { onMount, tick } from "svelte";
	import Title from "$lib/components/Title.svelte";
    import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
    import Loading from "$lib/components/Loading.svelte";

    let theme: 'dark' | 'light' | null;
    let complete = false;

    const setTheme = async (theme: 'dark' | 'light') => {
        await tick();
        
        const root = document.querySelector('body')!;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        
        localStorage.setItem('theme', theme);
    }

    onMount(() => {
        theme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        
        theme ? theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? theme = 'dark' : theme = 'light';
        setTheme(theme);

        complete = true;
    });
</script>

<Title title/>

{#if complete}
    <Header {theme} {setTheme}/>
        <main>
            <slot/>
        </main>
    <Footer/>
{:else}
    <Loading/>
{/if}




<style>
    main {
        display: flex;
        min-height: 100vh;
    }
</style>