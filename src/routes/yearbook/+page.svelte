<script lang="ts">
	import Page from '../+page.svelte';
	import { animals, type Animal } from './animals';
	import AnimalCard from './AnimalCard.svelte';
	let filteredAnimals: Animal[] = [];

	function searchByName(name: string) {
		animals.filter((animal) => animal.name.includes(name));
	}
	$: {
		searchByName(searchAnimal);
	}
</script>

<h1 class="text-4xl text-center m-4 rounded-3xl bg-lime-300">Yearbook</h1>
<div class="grid grid-cols-3 bg-yellow-300 rounded-3xl">
	{#each animals as animal}
		<AnimalCard {animal} />
	{/each}
</div>
