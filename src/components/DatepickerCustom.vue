<template>
	<div class="datepickerCustom">

		<input type="text"
			   class="datapicker-input"
			   readonly
			   :name="name"
			   :value="formatDate === 'Invalid date' ? null : formatDate"
			   :placeholder="placeholder"

		/>

		<button type="button" @click="date = null">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				id="close"
				x="0px"
				y="0px"
				viewBox="0 0 512.001 512.001"
				style="enable-background:new 0 0 512.001 512.001;"
				xml:space="preserve"
			>
				<g>
					<g>
						<path
							d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z"
						/>
					</g>
				</g>
			</svg>
		</button>

		<v-date-picker
			v-model="date"
			:popover="{ placement: 'bottom', visibility: 'click' }"
			:theme="themeStyles"
			locale="en"
		>
			<a
				slot="header-left-button"
				class="datapicker-header-button"
				slot-scope="{ page }"
				@click="page.movePrevMonth()"
			>
				<img src="@/assets/img/chevron.png" alt="arrow-left" />
			</a>
			<a
				slot="header-right-button"
				class="datapicker-header-button"
				slot-scope="{ page }"
				@click="page.moveNextMonth()"
			>
				<img src="@/assets/img/chevron.png" alt="arrow-right" style="transform: rotate(180deg)" />
			</a>
			<button class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 426.667 426.667"
					style="enable-background:new 0 0 426.667 426.667;"
					xml:space="preserve"
				>
					<g>
						<g>
							<g>
								<rect x="277.333" y="192" width="42.667" height="42.667" />
								<rect x="192" y="192" width="42.667" height="42.667" />
								<rect x="106.667" y="192" width="42.667" height="42.667" />
								<path
									d="M362.667,42.667h-21.333V0h-42.667v42.667H128V0H85.333v42.667H64c-23.68,0-42.453,19.2-42.453,42.667L21.333,384     c0,23.467,18.987,42.667,42.667,42.667h298.667c23.467,0,42.667-19.2,42.667-42.667V85.333     C405.333,61.867,386.133,42.667,362.667,42.667z M362.667,384H64V149.333h298.667V384z"
								/>
							</g>
						</g>
					</g>
				</svg>
			</button>

		</v-date-picker>

	</div>
</template>

<script>
	import Vue from 'vue'
	import datepicker from "v-calendar/lib/components/date-picker.umd";
	Vue.use(require('vue-moment'));

	export default {
		name: "DatepickerCustom",

		props: {
			placeholder: {
				type: String,
				required: false,
			},
			name: {
				type: String,
				required: true,
			},
			calendarIcon: {
				type: String,
				required: false,
			},
		},

		components: { "v-date-picker": datepicker },

		data() {
			return {
				date: null,
				themeStyles: {
					dayNotInMonth: "not-in-month",
				},
			}
		},

		computed: {

			formatDate() {
				return this.$moment(this.date).format('DD_MM_YYYY')
			}
		},
	};
</script>

<style lang="scss">

	.datepickerCustom {
		display: grid;
		grid-template-columns: 60% 20% 20%;
		grid-template-rows: 32px;
		border: 1px solid var(--grey4);
		border-radius: 5px;
		overflow: hidden;
		box-sizing: border-box;
		max-width: 182px;

		@media screen and (max-width: 575px) {
			margin-bottom: 15px;
			max-width: 220px;

		}

		.vc-svg-icon {
			stroke: var(--grey3);

			path {
				fill: var(--grey3);
			}
		}

		.vc-arrows-container {
			div[role="button"] {
				width: var(--day-content-width);
				height: var(--day-content-height);

				.datapicker-header-button > img {
					width: 7px;
					height: 8px;
				}
			}
		}

		.vs-title,
		.vc-weekday {
			font-weight: 700;
			color: var(--grey3);
		}

		.vc-day-content {
			font-size: 14px;
			font-weight: 400;

			&:hover {
				background-color: var(--white2);
			}

			&:focus {
				background-color: var(--blue1);
				color: #fff;
			}
		}

		.vc-rounded-full {
			border-radius: 5px;
		}


		.vc-day span.vs-day-content {
			font-weight: 400;
		}

		.not-in-month {
			color: var(--grey5);
		}

		input,
		button {
			outline: none;
			border: none;
		}

		input.datapicker-input {
			height: 100%;
			display: flex;
			align-items: center;
			outline: none;
			border: none;
			font-size: 14px;
			color: var(--black1);
			padding-left: 9px;
			letter-spacing: 0.35px;
			cursor: not-allowed;

			&::placeholder {
				color: var(--black1);
			}
		}

		button {
			cursor: pointer;
			width: 100%;
			max-height: 100%;
			position: relative;
			padding: 7px 5px;
			border-left: 1px solid var(--grey4);

			&:hover,
			&:active {
				background-color: transparent;
			}

			svg {
				width: auto;
				max-height: 18px;
			}
		}

		.vc-popover-content-wrapper {
			.vc-popover-content {
				border: 1px solid var(--grey9);
				-webkit-box-shadow: 0 5px 8px 1px rgba(1, 1, 1, 0.21),
					inset 0 0 0 2px rgba(255, 255, 255, 0.79);
				box-shadow: 0 5px 8px 1px rgba(1, 1, 1, 0.21),
					inset 0 0 0 2px rgba(255, 255, 255, 0.79);
			}
		}
	}

</style>