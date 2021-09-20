<template>
	<span>
		<nuxt-link
			:to="link"
			class="text-base font-medium text-gray-500 hover:text-gray-900"
			v-if="!external"
			>{{ name }}
		</nuxt-link>
		<a
			:href="link"
			class="text-base font-medium text-gray-500 hover:text-gray-900"
			v-if="external"
			>{{ name }}
		</a>
	</span>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
		},
		link: {
			type: String,
			default: "/",
		},
		external: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>