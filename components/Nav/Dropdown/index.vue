<template>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
		<div @click="show = !show">
			<button
				type="button"
				class="
					text-gray-500
					group
					bg-white
					rounded-lg
					inline-flex
					items-center
					text-base
					font-medium
					hover:text-gray-900
					focus:outline-none
					focus:ring-2 focus:ring-offset-2 focus:ring-green-500
					z-20
				"
				aria-expanded="false"
			>
				<a>
					<span>{{ name }}</span></a
				>
				<!--
	              Heroicon name: solid/chevron-down
	
	              Item active: "text-gray-600", Item inactive: "text-gray-400"
	            -->
				<svg
					class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<!--
	            'More' flyout menu, show/hide based on flyout menu state.
	
	            Entering: "transition ease-out duration-200"
	              From: "opacity-0 translate-y-1"
	              To: "opacity-100 translate-y-0"
	            Leaving: "transition ease-in duration-150"
	              From: "opacity-100 translate-y-0"
	              To: "opacity-0 translate-y-1"
	          -->
			<div
				class="
					absolute
					z-10
					left-1/2
					transform
					-translate-x-1/2
					mt-3
					px-2
					w-screen
					max-w-md
					sm:px-0
				"
				v-if="show"
			>
				<div
					class="
						rounded-lg
						shadow-lg
						ring-1 ring-black ring-opacity-5
						overflow-hidden
					"
				>
					<div
						class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
						v-on-clickaway="closeMenu"
					>
						<slot name="children"></slot>
					</div>
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
		},
	},
	data: function () {
		return {
			show: false,
		};
	},
	methods: {
		closeMenu: function () {
			this.show = false;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>