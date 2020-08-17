<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col">
					<a href="https://www.webspark.com/">
						<img src="@/assets/img/websparkLogo.svg" alt="websparkLogo">
					</a>
					<p>Copyright © 2005-2020. All Rights Reserved by WEBSPARK </p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "AppFooter"
	}
</script>

<style lang="scss" scoped>
		footer {
			display: block;
			height: 150px;
			background: var(--grey3);
			padding: 24px 0;
			color: rgba(255,255,255,0.25);
			text-shadow: 1px 1px 1px rgba(0,0,0,0.1);

			a {
				width: 150px;
				height: 39px;
				margin-bottom: 30px;

				img {
					width: inherit;
					height: auto;
				}
			}

			p {
				font-size: 14px;
				line-height: 1.8;
			}
		}
</style>