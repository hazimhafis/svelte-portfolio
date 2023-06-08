<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/hh-logo.svg';
</script>

<header class="header sticky top-0 w-full backdrop-blur z-10 py-2">
    <nav class="container flex justify-between items-center">
        <div class="nav-item">
            <a href="/">
                <img src={logo} alt="Hazim Hafis" class="w-10 h-10" />
            </a>
        </div>
        <div class="nav-item">
            <div id="menu" class="flex sm-hidden">
                <ul class="menu inline-flex flex-row w-max gap-x-4">
                    <li>
                        <a href="/" class="text-argentinian-blue uppercase">Home</a>
                    </li>
                    <li>
                        <a href="/skills" class="text-argentinian-blue uppercase">skills</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-item">
            <a href="/contact" class="md:hidden p-2 rounded-lg border-2 text-russian-violet-light border-russian-violet-light hover:bg-russian-violet-light hover:text-white transition duration-150 ease-in-out">Contact</a>
            <a href="/contact" class="md:block hidden p-2 rounded-lg border-2 border-smoky-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D1A05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="md:block hidden feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
        </div>
    </nav>
	
</header>

<style>
    .header {
        height: 68px;
    }
</style>
