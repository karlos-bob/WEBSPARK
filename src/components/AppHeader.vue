<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<a class="logo" href="/">
						<img src="@/assets/img/logo.png" alt="logo" id="logo-desktop">
						<img src="@/assets/img/logo-mobile.png" alt="logo" id="logo-mobile">
					</a>
				</div>
				<div class="col-sm-12 col-md-8">
					<div class="header-content">

						<div class="header-top"><h1>monblanproject</h1>
							<div class="notification">Start on 17-02-2016</div>
						</div>

						<div class="header-social">
							<p>870<span>posts</span></p>
							<p>11,787<span>followers</span></p>
							<p>112<span>following</span></p>
						</div>

						<div class="header-datepicker">
							<span class="datepicker-date">Date</span>

							<div class="datepickers-wrap">
								<datapickerCustom placeholder="from" name="from" />
								<datapickerCustom placeholder="to" name="to" />
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "AppHeaderOld",

		components: {
			datapickerCustom: () => import("./DatepickerCustom"),
		},
	}
</script>

<style lang="scss" scoped>

	header {
		position: relative;
		background-color: #fff;
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
		padding: 15px;

		a.logo {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			z-index: 3;

			img {
				z-index: 1;
				display: none;
				max-height: 160px;

				&#logo-mobile {
					@media screen and (max-width: 767px) {
						display: block!important;
					}
				}

				&#logo-desktop {
					@media screen and (min-width: 768px) {
						display: block!important;
					}
				}

			}

			&::before {
				content: "";
				display: block;
				position: absolute;
				background-image: url("./../assets/img/Shape_1.png");
				background-repeat: no-repeat;
				width: 1245px;
				height: 486px;
				z-index: 0;
				opacity: 0.8;
				top: -50%;
				left: -150%;

				@media screen and (max-width: 767px) {
					display: none;
				}

				@media screen and (min-width: 768px) and (max-width: 991px) {
					top: -33%;
					left: -290%;
				}

				@media screen and (min-width: 992px) and (max-width: 1199px) {
					top: -40%;
					left: -200%;
				}

				@media screen and (min-width: 1200px) and (max-width: 1499px) {
					top: -50%;
					left: -150%;
				}
			}


			@media (max-width: 575.98px) {
				margin-bottom: 20px;
			}

		}

		.header-content {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 450px;

			@media (max-width: 767.98px) {
				max-width: 100%;
			}

			.header-top,
			.header-social,
			.header-datepicker {
				display: flex;
				justify-content: flex-start;
				flex-direction: row;
				align-items: center;

				@media (max-width: 767.98px) {
					justify-content: center;
				}

				@media (max-width: 575.98px) {
					flex-direction: column;
				}
			}

			.header-top {

				@media (max-width: 576px) {
					align-items: center;
				}

				h1 {
					font-size: 35px;
					letter-spacing: -1.4px;
					font-family: "Myriad Pro Light", sans-serif;
					font-weight: 400;

					@media (max-width: 576px) {
						margin-bottom: 10px;
					}
				}

				.notification {
					border: 1px solid #4090db;
					text-align: center;
					padding: 10px;
					color: #4090db;
					font-family: "Helvetica Neue Thin", sans-serif;
					font-size: 15px;
					font-weight: 400;
					border-radius: 5px;
					letter-spacing: -0.6px;
					margin-left: 30px;

					@media (max-width: 575.98px) {
						margin-left: 0;
						max-width: 220px;
					}
				}
			}

			.header-social {
				flex-direction: row;
				flex-wrap: wrap;
				margin: 20px 0;

				@media (max-width: 575px) {
					margin: 10px 0;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: space-between;
				}

				@media (max-width: 368px) {
					flex-direction: column;
				}

				p {
					margin-right: 30px;
					font-family: "Proxima Nova Semibold", sans-serif;
					font-weight: 700;

					@media (max-width: 576px) {
						margin-right: 10px;
					}

					&:nth-child(1) {
						margin-left: 0;
					}

					span {
						font-family: "Proxima Nova Regular", sans-serif;
						margin-left: 4px;
						font-weight: 400;

					}
				}
			}

			.header-datepicker {
				align-items: center;
				flex-direction: row;

				@media (max-width: 575px) {
					margin: 0;
					flex-direction: column;
					flex-wrap: wrap;
				}

				span.datepicker-date {
					font-family: "Tahoma", sans-serif;
					font-size: 17px;
					margin-right: 14px;

					@media (max-width: 575px) {
						margin-right: 0;
						margin-bottom: 10px;
					}
				}

				.datepickers-wrap {
					display: flex;
					flex-direction: row;
					width: 100%;
					flex-wrap: wrap;

					@media screen and (max-width: 575px) {
						align-items: center;
						justify-content: center;
						/*flex-direction: column;*/

						> div {
							margin-right: 15px;

							&:last-child {
								margin-right: 0;
							}
						}

						&:last-child {
							margin-right: 0;
						}
					}

					@media screen and (max-width: 462px) {
						flex-direction: column;

						> div {
							margin-right: 0;
						}
					}

					@media screen and (min-width: 576px) {
						> div {
							margin-right: 24px;

							&:last-child {
								margin-right: 0;
							}
						}
					}
				}
			}
		}
	}
</style>