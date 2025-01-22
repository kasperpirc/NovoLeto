<script lang="ts">
	export let animal;
	export let addToWatchlist: (name: string) => void;
</script>

<div class="bg-rose-600 p-2 m-2 border-black border-x-4 border-y-4 rounded-3xl">
	<div>
		<p class="text-3xl">{animal.name}</p>
	</div>
	<div>
		<p class="italic">{animal.latinName}</p>
	</div>
	<div>
		<img src={animal.photo} />
	</div>
	<div>
		<p class="font-bold">{animal.weight}</p>
	</div>
	<div>
		<p>{animal.lifespan}</p>
	</div>
	<div>
		<p>{animal.class}</p>
	</div>
	<button on:click={() => addToWatchlist(animal.name)} class="rounded-2xl bg-pink-500 text-white"
		>Add to watchlist!</button
	>
</div>
