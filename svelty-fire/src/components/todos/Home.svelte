<script>
import Login  from '../../Login.svelte';
import { onMount } from 'svelte';
export let name =  'Sveltey-Fire 🔥';

</script>


<main class="content">
	<Login props={name} />
</main>

<styles>
</styles>