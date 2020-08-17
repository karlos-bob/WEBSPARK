<template>
	<div class="container">
		<div class="row">
			<div class="col">

				<div class="switcher">
					<button id="switch-grid" :class="view === 'grid' ? 'active' : null" @click="switchPostsView('grid')">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
							<g>
								<g>
									<rect x="180.67" y="361.33" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect x="180.67" y="180.66" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect x="361.33" width="150.67" height="150.66"/>
								</g>
							</g>
														<g>
								<g>
									<rect y="180.66" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect x="361.33" y="180.66" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect y="361.33" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect x="361.33" y="361.33" width="150.67" height="150.67"/>
								</g>
							</g>
														<g>
								<g>
									<rect width="150.67" height="150.66"/>
								</g>
							</g>
														<g>
								<g>
									<rect x="180.67" width="150.67" height="150.66"/>
								</g>
							</g>
						</svg>
					</button>
					<button id="switch-list" :class="view === 'list' ? 'active' : null" @click="switchPostsView('list')">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="560.414px" height="560.415px" viewBox="0 0 560.414 560.415" style="enable-background:new 0 0 560.414 560.415;" xml:space="preserve">
							<g>
								<g>
									<path d="M115.65,24.92H33.507C15.031,24.92,0,39.951,0,58.421v82.143c0,18.477,15.031,33.501,33.507,33.501h82.143    c18.476,0,33.501-15.031,33.501-33.501V58.421C149.145,39.945,134.12,24.92,115.65,24.92z"/>
									<path d="M526.908,24.92H212.205c-18.477,0-33.501,15.031-33.501,33.501v82.143c0,18.477,15.025,33.501,33.501,33.501h314.703    c18.477,0,33.506-15.031,33.506-33.501V58.421C560.414,39.945,545.377,24.92,526.908,24.92z"/>
									<path d="M115.65,205.632H33.507C15.031,205.632,0,220.663,0,239.133v82.143c0,18.476,15.031,33.5,33.507,33.5h82.143    c18.476,0,33.501-15.024,33.501-33.5v-82.143C149.145,220.657,134.12,205.632,115.65,205.632z"/>
									<path d="M526.908,205.632H212.205c-18.477,0-33.501,15.031-33.501,33.501v82.143c0,18.476,15.025,33.5,33.501,33.5h314.703    c18.477,0,33.506-15.024,33.506-33.5v-82.143C560.414,220.657,545.377,205.632,526.908,205.632z"/>
									<path d="M115.65,386.343H33.507C15.031,386.343,0,401.374,0,419.85v82.143c0,18.477,15.031,33.501,33.507,33.501h82.143    c18.476,0,33.501-15.024,33.501-33.501V419.85C149.145,401.374,134.12,386.343,115.65,386.343z"/>
									<path d="M526.908,386.343H212.205c-18.477,0-33.501,15.03-33.501,33.507v82.143c0,18.477,15.025,33.501,33.501,33.501h314.703    c18.477,0,33.506-15.024,33.506-33.501V419.85C560.414,401.374,545.377,386.343,526.908,386.343z"/>
								</g>
							</g>
						</svg>
					</button>
				</div>

				<ul class="posts" :data-view="view">
					<li v-for="(item, index) of posts" :key="index">
						<post :data="item" :view="view"/>
					</li>
				</ul>

				<div class="upload-more">
					<button>load more</button>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import Post from "./Post/Post";

	export default {
		name: "Posts",

		props: {
			posts: {
				type: Array,
				required: true
			}
		},

		components: { post: Post },

		data() {
			return {
				view: 'list',
			}
		},

		methods: {
			switchPostsView(view) {
				this.view = view;
			}
		},

	}
</script>

<style lang="scss" scoped>

	.switcher {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 20px 0 25px;

		button {
			background: transparent;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;

			&.active svg {
				rect, path{
					fill: var(--blue0);
				}
			}

			&:hover, &:active {
				svg {
					rect, path{
						fill: var(--blue0);
					}
				}
			}

			svg {
				width: 100%;
				height: 100%;
			}

			&#switch-grid svg{
				width: 27px;
				height: 17px;
			}

			&#switch-list svg {
				width: 30px;
				height: 28px;
			}

		}

		button:last-child {
			margin-left: 20px;
		}
	}

	ul.posts {
		display: grid;
		list-style-type: none;
		padding: 0;
		position: relative;
		z-index: 3;

		&[data-view="grid"] {
			grid-template-columns: repeat(auto-fill, minmax(292px, auto));
			grid-auto-rows: minmax(200px, 292px);
			grid-gap: 30px;

			li {
				position: relative;
			}
		}

		&[data-view="list"] {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-gap: 10px;
		}

	}

	.upload-more {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 46px 0;

		button {
			background: transparent;
			padding: 10px 30px;
			border-radius: 30px;
			border: 1px solid var(--black0);
			font-size: 12px;
			font-weight: 400;
			color: var(--black0);
			text-transform: uppercase;
			cursor: pointer;
			font-family: "Proxima Nova Light", sans-serif;

			&:hover,
			&:active {
				background: var(--black0);
				color: var(--white0);
			}
		}
	}


</style>