<script>
    import Profile from './Profile.svelte';
    import Todos from './components/todos/Todos.svelte';
  import { observe } from 'svelte-observable'; 

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    export let props
    var Loaded = false;
    
    export let user;
    if(user === null) {
        Loaded = false;
    }
    const unsubscribe = authState(auth).subscribe(u => user = u);
    function login() {
        auth.signInWithPopup(googleProvider);
    }
      const results_store = observe(unsubscribe);

    	console.log('the component has mounted');
    
    


</script>
{#await $results_store}
  pending - No value or error has been received yet
{:then result}
  fulfilled - Received a value
{:catch error}
  rejected - Received an error
{/await}
<section>
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() } class="button">Logout</button>
    <hr>
    <Todos uid={user.uid} />
{:else}
<div class="jumbotron"  >
  <h1 class="display-3" >Welcome to {props}!</h1>
    <p class="lead">
		Here's a first try at svelte I don't know what I'm doing so lets see where this takes me. The beginning was super rough because all these damn helpers and imports are needed for basic things like ARRAYs, but ol RichieH's framework might grow on me. 
	</p>
    <hr class="my-4">
    <p>
        "Ugh Here we go"
    </p> 
    <button class="btn-warning" on:click={login} >
		Signin with Google
	</button>
</div>
{/if}
</section>

<style>
    section {
        background: rgb(235, 235, 235);
        padding: 20px;
    }
</style>