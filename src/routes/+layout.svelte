<script>
    import { fly } from 'svelte/transition';
    import './styles.css';
	import Header from './Header.svelte';
    import hhlogo from '$lib/images/hh-logo.svg';
    import sveltelogo from '$lib/images/svelte-logo.svg';

    export let data;
</script>


<div id="app" class="w-full min-h-screen flex flex-col">
	<Header />

	<main class="w-full h-full">
        {#key data.url}
            <div 
                in:fly={{x: -200, duration: 300, delay: 300}}
                out:fly={{ duration: 300}}
            >
                <slot />
            </div>
        {/key}
	</main>

	
</div>
<footer class="flex justify-center">
    <div class="container flex flex-row md:flex-col items-center justify-evenly py-8">
        <div class="footer-item">
            <img class="w-6 h-6 md:w-4 md:h-4" src="{hhlogo}"  alt="hh logo">
            <p class="text-center md:text-sm"> © 2023</p>
        </div>
        <div class="footer-item">
            <p class="text md:text-sm center mr-4">Made With 💖 Using</p>
            <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
                <img class="w-6 h-6 md:w-4 md:h-4" src="{sveltelogo}" alt="svelte">
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <img class="ml-2 w-6 h-6 md:w-4 md:h-4" src="https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg" alt="tailwindcss"/>
            </a>
        </div>
        <div class="footer-item">
            <a href="https://github.com/hazimhafis/" target="_blank" rel="noopener noreferrer">
                <img class="w-6 h-6 md:w-4 md:h-4" src="https://img.icons8.com/fluent/48/000000/github.png" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/hazim-hafis/" target="_blank" rel="noopener noreferrer">
                <img class="w-6 h-6 md:w-4 md:h-4" src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin"/>
            </a>
        </div>
    </div>
</footer>

<style>

    .footer-item {
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        .footer-item {
            margin-bottom: 1rem;
        }
    }
</style>
