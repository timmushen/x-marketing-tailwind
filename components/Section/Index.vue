<template>
	<section
		class="
			md:mx-auto
			pa-16
			bg-local bg-opacity-50 bg-no-repeat bg-center bg-cover
			flex flex-wrap
			sm:flex-row
			flex-col
		"
		:style="`background-image: url(${background})`"
	>
		<div class="h-80 md:w-1/2 w-full md:p-24 overflow-auto">
			hidden-lg-and-down
			{{ background }}
		</div>
		<div class="bg-white h-80 bg-opacity-50 p-8 md:w-1/2 w-full">col2</div>
	</section>
</template>

<script>
export default {
	props: {
		background: {
			type: String,
		},
	},
	computed: {
		bgURL: function () {
			if (this.type) {
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>