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

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
</svelte:head>

<style>
	h1 {
	  color: purple;
	}
	main {
	  margin: 20px;
	}
</style>
<RouterLink to="/page2"  text={"page2"}/>
<RouterLink to="/about" text={"about"} />
<RouterLink to="/" text={"home"}  />

<div  transition:fade id="router-outlet"></div>

