<script lang="ts">
    import "$lib/global.css";
    import { afterUpdate, onMount } from "svelte";
	import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Title from "$lib/components/Title.svelte";

    let path = '';
    let root: HTMLElement;
    let theme: 'dark' | 'light' | null;

    const setTheme = (theme: 'dark' | 'light') => {
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        
        localStorage.setItem('theme', theme);
    }
    
    onMount(() => {
        root = document.querySelector('body')!;
        theme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        
        theme ? theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? theme = 'dark' : theme = 'light';
        setTheme(theme);
    })
    afterUpdate(() => {
        path = window.location.pathname;
    })
</script>

<Title title/>

<Header {path} {theme} {setTheme} />
<main>
    <slot/>
</main>
<Footer/>

<style>
    main {
        display: flex;
        min-height: 100vh;
    }
</style>