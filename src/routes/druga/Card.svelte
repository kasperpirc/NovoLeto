<script lang="ts">
	import type { Category } from './data';
	export let category: Category;
</script>

<div>
	To je kategorija: {category.name}
</div>
<img class="border-4 border-black" src={category.image} />
<div class="rounded-xl bg-rose-400">Description:{category.description}</div>
