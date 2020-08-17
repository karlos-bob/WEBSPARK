<template>
	<p>
		<span>{{ amount }}</span>
		{{ title }}
	</p>
</template>

<script>
	export default {
		name: "Boast",
		props: {
			amount: {
				type: Number,
				required: true
			},
			title: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	p {
		font-size: 17px;
		font-weight: 400;

		@media screen and (max-width: 575px) {
			margin: 10px 0;
		}

		span {
			font-weight: 700;
		}
	}
</style>