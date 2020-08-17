<template>

	<div class="post-item" :data-view="view">

		<a href="#" onclick="return false" class="post-preview">
			<div class="overlay" v-if="view === 'grid'"></div>
			<img :src="data.img" alt="post-image">
		</a>

		<div class="post-description">

			<svg v-if="view === 'grid'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="camera" x="0px" y="0px" viewBox="0 0 420.8 420.8" style="enable-background:new 0 0 420.8 420.8;" xml:space="preserve">
					<g>
						<g>
							<g>
								<path d="M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120     c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2     C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6     C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2     c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2     c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2     v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"/>
								<path d="M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8     s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284     c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4     c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"/>
							</g>
						</g>
					</g>
				</svg>

			<post-date v-for="(date, index) of data.date" :data="date" :key="index" :view="view" />

			<div class="upload">
				<p>Image upload </p>
				<p>11-04-2016</p>
			</div>

		</div>

	</div>

</template>

<script>
	import PostDate from "./PostDate";

	export default {
		name: "Post",

		props: {
			data: {
				type: Object,
				required: true
			},
			view: {
				type: String,
				required: true
			}
		},

		components: {
			postDate: PostDate
		},

		data() {
			return {
				state: undefined
			}
		},

	}
</script>

<style lang="scss">

	.post-item {
		background-color: var(--white0);
		overflow: hidden;

		&[data-view='grid'] {
			height: 100%;
			cursor: pointer;

			&:hover, &:active {
				.overlay, .post-description{
					visibility: visible!important;
					z-index: 2!important;
				}

			}

			a.post-preview {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				right: 0;

				.overlay {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					background: var(--black0);
					opacity: 0.6;
					width: 100%;
					height: 100%;
					z-index: 0;
					visibility: hidden;

					svg {
						position: absolute;
						width: 30px;
						height: 30px;
					}
				}

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
					object-position: top;
					z-index: 1;
				}
			}

			.post-description {
				height: 100%;
				position: absolute;
				visibility: hidden;
				z-index: 0;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				padding: 15px 20px 15px;

				svg#camera {
					position: absolute;
					width: 30px;
					height: 30px;
					top: 10px;
					right: 10px;

					&:hover, &:active {
						path {
							fill: var(--blue0);
						}
					}

					path {
						fill: #b9b9b9;
					}
				}

				.upload {
					color: var(--white0);
					align-items: center;
					justify-content: center;
					flex-direction: row;

					> p {
						padding: 0;
					}

					> p:first-child::after {
						content: ':';
						margin-right: 4px;
					}
				}
			}

		}

		&[data-view='list'] {
			display: grid;
			grid-template-columns: 95px auto;
			grid-template-rows: 95px;

			@media screen and (max-width: 767px) {
				grid-template-columns: 30% auto;
				grid-template-rows: 120px;
			}

			a.post-preview {
				display: block;
				position: relative;
				width: 95px;
				height: 95px;
				z-index: 1;

				@media screen and (max-width: 767px) {
					width: 100%;
					height: auto;
				}


				img {
					width: 100%;
					height: 100%;
					object-fit: cover;

					@media screen and (max-width: 767px) {
						object-position: bottom;
					}
				}
			}

			.post-description {
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: 1fr;
				padding: 20px 0 60px;

				@media screen and (max-width: 767px) {
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: 1fr 1fr;
					padding: 10px 0 0 15px;

					.post-date-wrapper {
						padding: 0;
						align-self: center;
						justify-content: center;
					}

					.upload {
						grid-column: 1 / 3;
						grid-row-start: 2;
						grid-row-end: 3;
						justify-self: start;
						align-self: center;
						flex-direction: row!important;
						padding: 0;

						@media screen and (max-width: 767px) {
							> p {
								margin-bottom: 0!important;
							}

							> p:first-child::after {
								content: ':';
								margin-right: 4px;
							}
						}
					}
				}

				> div {
					padding: 0 34px;
				}

				.upload {
					flex-direction: column;
					align-items: flex-start;
					color: var(--grey3);
				}

				.upload > p,
				p.post-date {
					margin-bottom: 17px;
				}

			}

		}

		.post-description {
			display: grid;
			width: 100%;

			.upload {
				display: flex;
				font-weight: bold;
				font-size: 17px;
				font-family: "Helvetica Neue Thin", sans-serif;

				@media screen and (max-width: 575px) {
					font-size: 14px;
				}
			}
		}
	}

</style>