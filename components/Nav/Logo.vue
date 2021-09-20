<template>
	<a href="/">
		<span class="sr-only">{{ $store.state.site.brand.name }}</span>
		<img
			class="w-60"
			:src="$store.state.site.brand.logo"
			:alt="$store.state.site.brand.name"
		/>
	</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

