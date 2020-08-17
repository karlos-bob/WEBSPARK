<template>
	<div class="post-date-wrapper" :date-view="view">

		<p class="post-date">{{ data.date }}</p>

		<div class="post-stats">
			<div class="post-stat post-likes">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
					 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<g>
							<g>
								<path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
									c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
									c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
									s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
									C512,93.417,453.532,30,376,30z"/>
							</g>
						</g>
					</svg>
				<span>{{ data.stats.likes }}</span>
			</div>
			<div class="post-stat post-comments">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
						<g>
							<g id="messenger">
								<path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z"/>
							</g>
						</g>
					</svg>
				<span>{{ data.stats.comments }}</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "PostDate",

		props: {
			data: {
				required: true,
				type: Object,

				date: {
					required: false,
					type: String || Object, // maybe we can pass new Data() which return object
					default: 'Today'
				},

				likesCounter: {
					required: true,
					type: Number
				},

				commentsCounter: {
					required: true,
					type: Number
				},
			},
			view: {
				required: true,
				type: String
			},
		},

	}
</script>

<style lang="scss" scoped>

	.post-date-wrapper {
		font-size: 17px;

		@media screen and (max-width: 575px) {
			font-size: 14px;
		}

		&[date-view='grid'] {
			display: grid;
			grid-template-columns: 40% 60%;
			grid-template-rows: 1fr;
			color: var(--white0);
			margin-bottom: 30px;

			&:last-child {
				margin-bottom: 0;
			}

			.post-stats {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr;

				p.post-date {
					margin-right: 25px;
				}

				svg path {
					fill: var(--white0);
				}
			}
		}

		&[date-view='list'] {
			display: flex;
			flex-direction: column;
			color: var(--grey1);

			svg path {
				fill: var(--grey1);
			}

			.post-stats {
				width: 100%;

				.post-stat:first-child {
					@media screen and (max-width: 767px) {
						margin-right: 10px;
					}
				}
			}
		}
	}

	.post-stats {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;

		@media screen and (max-width: 575px) {
			font-size: 14px;
		}

		.post-stat {
			display: flex;
			align-items: center;
			font-weight: 700;

			@media screen and (max-width: 575px) {
				font-size: 14px;
			}

			@media screen and (max-width: 368px) {
				font-size: 12px;
			}


			&:first-child {
				margin-right: 22px;
			}

			svg  {
				margin-right: 5px;
				width: 21px;
				height: 20px;

				@media screen and (max-width: 575px) {
					margin-right: 4px;
					width: 19px;
					height: 18px;
				}

				@media screen and (max-width: 368px) {
					margin-right: 2px;
					width: 17px;
					height: 16px;
				}

			}
		}
	}

</style>