<template>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-white container mx-auto">
		<div class="px-4 sm:px-6">
			<div
				class="
					flex
					justify-between
					items-center
					border-b-2 border-gray-100
					py-6
					lg:justify-start
					md:space-x-10
				"
			>
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<slot name="mainLogo" />
				</div>
				<div class="-mr-2 -my-2 lg:hidden">
					<div @click="navToggle">
						<button
							type="button"
							class="
								bg-white
								rounded-md
								p-2
								inline-flex
								items-center
								justify-center
								text-gray-400
								hover:text-gray-500
								hover:bg-gray-100
								focus:outline-none
								focus:ring-2 focus:ring-inset focus:ring-green-500
							"
							aria-expanded="false"
						>
							<XIconHamburger />
						</button>
						<div
							v-if="navShow"
							class="
								absolute
								top-0
								inset-x-0
								p-2
								transition
								transform
								origin-top-right
								lg:hidden
								z-50
							"
							v-on-clickaway="closeMenu"
						>
							<div
								class="
									rounded-lg
									shadow-lg
									ring-1 ring-black ring-opacity-5
									bg-white
									divide-y-2 divide-gray-50
									overflow-visible
								"
							>
								<div class="pt-4 pb-6 p-2">
									<div class="flex items-center justify-between">
										<div>
											<slot name="mobileLogo" />
										</div>
										<div class="-mr-2">
											<button
												type="button"
												class="
													bg-white
													rounded-md
													p-2
													inline-flex
													items-center
													justify-center
													text-gray-400
													hover:text-gray-500
													hover:bg-gray-100
													focus:outline-none
													focus:ring-2 focus:ring-inset focus:ring-green-500
												"
												@click="navToggle"
											>
												<XIconClose />
											</button>
										</div>
									</div>
									<div class="mt-6">
										<nav class="grid gap-y-8">
											<slot name="mobileItems" />
										</nav>
									</div>
								</div>
								<div class="py-6 px-5 space-y-6">
									<slot name="mobileLower" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav class="hidden lg:flex space-x-10">
					<!-- Main -->
					<slot name="mainItems" />
				</nav>
				<div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
					<slot name="mainButtons" />
				</div>
			</div>
		</div>

		<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --></div>
</template>

<script>
export default {
	data: function () {
		return {
			navShow: false,
		};
	},
	methods: {
		navToggle: async function () {
			this.navShow = !this.navShow;
		},
		closeMenu: function () {
			this.navShow = false;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>