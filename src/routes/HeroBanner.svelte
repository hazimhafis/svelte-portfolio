<script>
    import memoji from '$lib/images/hazim-smile.png';
    import { onMount } from 'svelte';
    import Splitting from 'splitting?client';
    import gsap from 'gsap?client';

    onMount(async () => {
        // const Splitting = await import('splitting');
        Splitting();
        // const gsap = await import('gsap');
        const words = document.querySelectorAll('.word');

        words.forEach(word => {
            const chars = word.querySelectorAll('.char');
            chars.forEach(char => {
                char.style.display = 'inline-block'
            })
        })

        const tl = gsap.timeline();
        tl.from('.bgtext-title .char', {
            delay: 1,
            opacity: 0,
            stagger: .05,
            y: "100%",
            ease: "power4.out"
        })
    })

    
</script>

<section class="h-full md:h-auto flex">
    <div class="container flex flex-col items-center py-40 md:py-8 relative">
        <div class="about-image w-80 h-80">
            <img class="memoji" src="{memoji}" alt="Hero Banner" width="100%" height="100%" />
        </div>
        <div class="max-w-prose">
            <h1 class="text-center">Hello! I'm <span class="text-melon">Hazim</span> !</h1>
            <p class="text-center">
                I am an experienced front-end developer at <a href="https://www.growthops.asia/" target="_blank">GrowthOps</a>. Worked with banking, telco, and insurance clients. Passionate about crafting seamless user experiences, optimizing performance, and delivering high-quality results. Let's collaborate on innovative frontend projects.
            </p>
        </div>
        <div class="background-text">
            <h1 class="bgtext-title" data-splitting>Front-End Developer</h1>
        </div>
    </div>
</section>



<style>    
    .memoji {
        filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
    }
    
    .background-text {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        z-index: -1;

        
    }
    
    .background-text h1 {
        /* opacity: 0; */
        @apply text-melon/25;
        font-weight: bold;
        text-align:center;
        font-size: 10rem;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
    }

    @media (max-width: 767px) {
        .background-text h1 {
            font-size: 4rem;
        }
    }

    @media (min-width: 767px) and (max-width: 1023px) {
        .background-text h1 {
            font-size: 8rem;
        }
    }
</style>