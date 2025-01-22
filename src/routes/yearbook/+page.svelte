<script lang="ts">
	import Page from '../+page.svelte';
	import { animals, type Animal } from './animals';
	import AnimalCard from './AnimalCard.svelte';
	let filteredAnimals: Animal[] = [];
	let searchAnimal = '';
	let classOptions: string[] = [];
	let searchClass: string = 'all';
	let watchlist: string[] = [];

	function searchByName(name: string) {
		filteredAnimals = animals.filter((animal) =>
			animal.name.toLowerCase().includes(name.toLowerCase())
		);
	}
	function searchByClass(search: string) {
		if (search !== 'all') {
			filteredAnimals = animals.filter((animal) => animal.class === search);
		} else {
			filteredAnimals = animals;
		}
	}
	function addToWatchlist(name: string) {
		watchlist = [...watchlist, name];
	}

	$: {
		searchByName(searchAnimal);
	}
	$: {
		for (let animal of animals)
			if (!classOptions.includes(animal.class)) {
				classOptions.push(animal.class);
			}
	}
	$: {
		searchByClass(searchClass);
	}
</script>

<h1 class="text-4xl text-center m-4 rounded-3xl bg-lime-300">Yearbook</h1>
Watchlist:
<div class="flex gap-2"><p>{watchlist}</p></div>
<input class="rounded-2xl m-2 p-2" placeholder="Search" type="text" bind:value={searchAnimal} />
<p>Išči po razredu</p>
<select bind:value={searchClass}>
	<option value="all">All</option>
	{#each classOptions as option}
		<option>{option}</option>
	{/each}
</select>
<div class="grid grid-cols-3 bg-yellow-300 rounded-3xl">
	{#each filteredAnimals as animal}
		<AnimalCard {animal} {addToWatchlist} />
	{/each}
</div>
