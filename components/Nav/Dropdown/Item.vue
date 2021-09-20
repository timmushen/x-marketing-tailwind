<template>
	<span>
		<nuxt-link
			:to="link"
			v-if="!external"
			class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 z-50"
		>
			<!-- Heroicon name: outline/shield-check -->
			<slot />
			<div class="">
				<p class="text-base font-medium text-gray-900">{{ name }}</p>
				<p class="mt-1 text-sm text-gray-500 truncate w-96">
					{{ subline }}
				</p>
			</div>
		</nuxt-link>
		<a
			:href="link"
			class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 z-50"
			v-if="external"
			target="_blank"
			>{{ name }}
		</a>
	</span>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: "/",
		},
		name: {
			type: String,
		},
		subline: {
			type: String,
			default: "",
		},
		external: {
			type: Boolean,
			default: false,
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
</style>