<script lang="ts">
	let num = 0;
	let sodo: boolean;
	0;

	function randomNumber() {
		num = Math.floor(Math.random() * 100000000);
	}

	function jeSodo(num: number) {
		if (num % 2 == 0) return true;
		return false;
	}

	$: {
		sodo = jeSodo(num);
	}
	/**
	 * NALOGA:
	 * 	- Dodaj <input> za vnos števila
	 *  - Definiraj spremenljivko "num" in jo "poveži" z <input> (Nasvet: uporabi bind:value)
	 *  - Če je num sodo, izpiši "Število je sodo", če je liho, izpiši "Število je liho"
	 *
	 * DODATNA NALOGA:
	 *  - Dodaj <button> s tekstom "Random"
	 *  - Po kliku na "Random" naj se num nastavi na naključno število med 1 in 100000000
	 */
</script>

<input bind:value={num} type="number" placeholder="0" />

<button on:click={randomNumber} class="bg-lime-600 p-1 rounde-md">Naključno</button>

<div class="bg-red-800 text-white border rounded">
	Število je:
	{sodo ? 'sodo' : 'liho'}
</div>
