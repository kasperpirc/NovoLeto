<script lang="ts">
	import '../app.css';

	/**
	 * NALOGA:
	 * 	- Dodaj linke do vseh treh strani (/prva, /druga, /tretja)
	 * 		(Nasvet: <div> bo potrebno zamenjati z <a>)
	 *
	 * DODATNA NALOGA:
	 * - Link do trenutne strani naj se odebeli (npr. Če se nahajamo na /druga, bo "Druga" odebeljeno, "Prva" in "Tretja" pa ne)
	 */
</script>

<nav class="w-full h-24 bg-sky-300 flex items-center justify-center gap-5">
	<a href="/prva">prva, </a>
	<a href="/druga">druga,</a>
	<a href="/tretja">tretja</a>
	<a href="/yearbook">yearbook</a>
</nav>

<div class="p-5 h-full">
	<slot />
</div>
