<script>
	import Login  from './Login.svelte'
		export let name;
		let user;

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

<main class="content">

	{#if !user} 
	no user
	{/if}
	<Login name={name} />

</main>