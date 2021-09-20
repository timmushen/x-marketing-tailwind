<template>
	<section class="py-8 px-4 lg:px-10">
		<nav>
			<div class="flex justify-between items-center">
				<a class="text-xl text-green-900 font-semibold ml-3" href="/">
					<nuxt-img
						class="h-7"
						:src="$store.state.site.brand.logo"
						alt=""
						width="auto"
					/>
				</a>
				<div class="lg:hidden">
					<button
						class="navbar-burger flex items-center p-3 rounded"
						@click="navToggle"
					>
						<svg
							class="text-green-900 block h-4 w-4"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
						>
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<!-- Desktop Nav -->
				<ul
					class="
						hidden
						lg:flex
						lg:ml-auto
						lg:mr-10
						lg:items-center
						lg:w-auto
						lg:space-x-10
					"
				>
					<li
						v-for="(item, index) in $store.state.site.nav.navItems"
						:key="index"
					>
						<a
							class="text-gray-600 font-semibold hover:text-green-800"
							:href="item.href"
							>{{ item.title }}</a
						>
					</li>
				</ul>
				<div class="hidden lg:block">
					<a
						class="
							inline-block
							py-3
							px-8
							text-sm text-green-900
							hover:text-blue-50
							uppercase
							font-semibold
							border-2 border-green-900
							mr-3
						"
						:href="item.href"
						v-for="(item, index) in $store.state.site.nav.buttonItems"
						:key="index"
						>Sign up</a
					>
				</div>
			</div>
		</nav>

		<!-- Mobile Nav -->
		<div class="navbar-menu relative z-50" v-if="navShow">
			<div
				class="navbar-backdrop fixed inset-0 bg-gray-900 opacity-90"
				@click="navToggle"
			></div>

			<nav
				class="
					fixed
					top-0
					left-0
					bottom-0
					flex flex-col
					w-5/6
					max-w-sm
					py-8
					bg-gray-100
					border-r
					overflow-y-auto
				"
			>
				<div class="flex items-center mb-16 pr-6">
					<a
						class="
							ml-12
							mr-auto
							text-xl text-grey-100
							font-semibold
							leading-none
						"
						href="/"
					>
						<img
							class="h-7"
							src="/logo.png"
							alt="Veristone Capital Real Estate Investment Loans"
							width="auto"
						/>
					</a>
				</div>
				<div class="mx-4">
					<!-- mobile nav -->
					<ul>
						<li
							class="mb-1"
							v-for="(item, index) in $store.state.site.nav.navItems"
							:key="index"
						>
							<a
								class="
									block
									pl-8
									py-5
									mx-4
									font-semibold
									text-gray-600
									hover:text-black
									hover:bg-gray-300
									rounded
								"
								:href="item.href"
								>{{ item.title }}</a
							>
						</li>
					</ul>
				</div>
				<div class="mt-auto px-10">
					<div class="pt-6">
						<a
							class="block mb-2 py-4 text-center text-blue-800 font-semibold"
							:href="item.href"
							v-for="(item, index) in $store.state.site.nav.buttonItems"
							:key="index"
							>{{ item.title }}</a
						>
					</div>
					<p class="mt-6 mb-4 text-sm text-center text-gray-400">
						<span
							>&copy; {{ new Date().getFullYear() }}
							{{ $store.state.site.footer.copyright.name }} </span
						><br />
						<span>All Rights Reserved.</span>
					</p>
				</div>
			</nav>
		</div>
	</section>
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
	},
};
</script>

<style lang="scss" scoped>
</style>