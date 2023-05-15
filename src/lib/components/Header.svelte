<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { tick } from "svelte";

    export let theme: string | null;
    export let setTheme: Function;
    
    const handleThemeChange = () => {
        let new_theme: string;

        theme == 'dark' ? new_theme = 'light' : new_theme = 'dark';

        theme = new_theme;
        setTheme(new_theme);
    }

    afterNavigate(async() => {
        await tick();
        const navItems = document.querySelectorAll('.top-nav-i');
        navItems.forEach((item) => {
            window.location.pathname.includes(item.id) ? item.classList.add('active') : item.classList.remove('active');
        });
        console.log('teste')
    });
</script>

<header>
    <a href="/" class="logo">
        <svg
        viewBox="0 0 190.5 190.49999"
        version="1.1"
        id="logo"
        xmlns="http://www.w3.org/2000/svg">
            <g
                id="g2190"
                transform="matrix(1.595163,0,0,1.595163,-34.424625,-26.066128)"
                style="display:inline">
                <path
                id="path2170"
                style="fill:#8fcaf9;fill-opacity:1;stroke:currentcolor;stroke-width:6.34982;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                d="M 135.56171,52.9527 123.30032,41.534428 105.78406,25.222617 v 0 l -41.983996,9.962629 47.293946,44.04188 c 2.91121,2.71102 7.4374,2.549866 10.14841,-0.361335 l 14.68063,-15.76464 c 2.71103,-2.911216 2.54986,-7.437402 -0.36133,-10.148422 z" />
                <path
                id="path2172"
                style="fill:#fff59c;fill-opacity:1;stroke:currentcolor;stroke-width:6.34982;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                d="m 27.023095,99.056428 12.261391,11.418272 17.51627,16.31181 v 0 L 98.784743,116.82388 51.490792,72.782 c -2.911193,-2.711025 -7.4374,-2.549864 -10.148423,0.36134 L 26.661738,88.90798 c -2.711023,2.911203 -2.549852,7.437407 0.36135,10.148418 z" />
                <path
                id="path2178"
                style="fill:#a5d7a7;fill-opacity:1;stroke:currentcolor;stroke-width:6.34982;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                d="M 132.11352,98.801266 119.85214,87.383003 102.33586,71.071198 v 0 l -41.983977,9.962596 47.293937,44.041886 c 2.91119,2.71102 7.43738,2.54986 10.14842,-0.36135 l 14.68062,-15.76464 c 2.71102,-2.91121 2.54988,-7.4374 -0.36134,-10.148424 z" />
                <path
                id="path2180"
                style="fill:#f9a09a;fill-opacity:1;stroke:currentcolor;stroke-width:6.34982;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                d="m 30.574217,53.303738 12.261389,11.418257 17.516279,16.311814 v 0 L 102.33586,71.071184 55.041922,27.029306 C 52.130718,24.318284 47.604523,24.479442 44.893501,27.390645 L 30.212872,43.155296 c -2.711016,2.911191 -2.549864,7.437399 0.36134,10.148422 z" />
            </g>
        </svg>
    </a>
    <div class="top-nav">
        <a id="artigos" href="/artigos" class="top-nav-i">Artigos</a>
        <a id="arquivos" href="/arquivos" class="top-nav-i">Arquivos</a>
        <a id="ferramentas" href="/ferramentas" class="top-nav-i">Ferramentas</a>
        <a id="comunidade" href="/comunidade" class="top-nav-i">Comunidade</a>

        <button class="theme-button" on:click={handleThemeChange}>
            <svg
            viewBox="0 0 190.5 190.49999"
            version="1.1"
            id="theme"
            class={theme}
            xmlns="http://www.w3.org/2000/svg">
                <g id="g472">
                    <path
                    id="path17429"
                    style="fill:#848484;fill-opacity:0;stroke:currentcolor;stroke-width:26.4354;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
                    d="m 153.31432,153.31432 a 82.115347,82.115347 0 0 1 -116.128638,0 82.115347,82.115347 0 0 1 -3e-6,-116.12864 82.115347,82.115347 0 0 1 116.128641,0 82.115347,82.115347 0 0 1 0,116.12864 z" />
                    <path
                    style="fill:currentcolor;fill-opacity:1;stroke:none;stroke-width:26.4354;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none;stroke-opacity:1"
                    d="M 37.185685,153.31432 153.31432,37.185682 c 0,0 58.06432,78.942948 0,116.128638 -58.064317,37.18568 -116.128635,0 -116.128635,0 z"
                    id="path17486" />
                </g>
            </svg>
        </button>
    </div>
</header>

<style>
    header {
        background-color: var(--background-ter);
        height: 4rem;

        display: flex;
        justify-content: space-between;
    }

    svg {
        color: var(--svg-color);
    }
    
    .logo {
        margin: auto 2rem;
    }

    #logo {
        height: 4rem;
        opacity: .8;
    }

    #logo:hover {
        opacity: 1;
    }

    .top-nav {
        width: 66%;
        
        display: flex;
        justify-content: space-around;
    }

    .top-nav-i {
        height: 100%;
        width: 100%;
        padding: auto;
        
        color: var(--text-color);
        font-weight: 600;
        text-decoration: none;

        display: flex;
        place-items: center;
        place-content: center;
    }

    .top-nav-i.active {
        border-bottom: 2px solid var(--text-color); /* OLHAR */
        margin-bottom: -2px;

        color: var(--title-color);
        font-weight: 700;
    }

    .theme-button {
        background: none;
        border: none;
        margin: 1rem;
    }

    #theme {
        height: 2rem;
        rotate: 180deg;
    }

    #theme.dark {
        transition: transform 0.2s ease-in-out;
        transform: rotateZ(0deg);
    }

    #theme.light {
        transition: transform 0.2s ease-in-out;
        transform: rotateZ(180deg);
    }
</style>

