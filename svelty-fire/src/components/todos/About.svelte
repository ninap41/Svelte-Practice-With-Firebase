<script>
import { onMount } from 'svelte'

export let name;

onMount(()=> {
    
    name ='Sveltey-Fire 🔥'
})
</script>
<h1>You routed {name}</h1>