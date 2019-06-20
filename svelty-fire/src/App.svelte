<script>
	import Login  from './Login.svelte'
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte'
	import * as fs from 'fs';
	import RouterLink from 'svelte-easyroute-rollup/RouterLink.svelte'
	export let router
	export let name;


onMount(()=> {
	router.createOutlet()
})


</script>
	<RouterLink to="/page2"  text={"page2"}/>
	<RouterLink to="/about" text={"about"} />
	<RouterLink to="/" text={"home"}  />

<main eh={name} id="router-outlet" ></main>
