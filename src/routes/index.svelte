<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Why 2.4GHz?</title>
	<meta name="description" content="The historical records behind everyone's favourite frequency" />
</svelte:head>

<section>
	<div class="cover">
		<picture>
			<img
				src="https://assets.why2point4.com/file/why2point4/1k/DSC_1788.webp"
				alt="FCC Docket Book 7859"
			/>
		</picture>
	</div>
	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
