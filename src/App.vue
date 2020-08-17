<template>
	<div id="app">

		<AppHeader />
		<main>
			<Posts :posts="posts" />

		</main>
		<AppFooter/>
	</div>
</template>

<script>

	// import Posts from "./components/Posts";

	export default {
		name: "App",

		components: {
			AppHeader: () => import("./components/AppHeader"),
			AppFooter: () => import("./components/AppFooter"),
			Posts: () => import("./components/Posts")
		},

		created() {

			// todo async request to api here
			fetch('http://www.splashbase.co/api/v1/images/latest', {

			})
				.then(response => this.date = response.json()
					.then(res => {
						// console.log('res images', res);

						class Post {
							constructor(url) {
								this.img = url;
								this.date = [
									{
										date: 'Today',
										stats: {
											likes: 128,
											comments: 31
										}
									},
									{
										date: '9-08-2016',
										stats: {
											likes: 67,
											comments: 22
										}
									}
								];
								this.upload = '11-04-2016'
							}
						}

						for( let i = 0; i < 9; i++) {
							let newPost = new Post(res.images[i].url);
							this.posts.push(newPost);
						}

					})
				);
		},

		data() {
			return {
				posts: []
			}
		}

	};
</script>

<style lang="scss">
	@import "@/assets/styles/_main.scss";

	#app {
		display: flex;
		min-height: 100vh;
		flex-direction: column;

		main {
			flex: 1;
			background-color: var(--grey10);
			background-image: url("./assets/img/Shape_2.png");
			background-repeat: no-repeat;
			background-position: right -999px bottom 70px;

			@media screen and (min-width: 1050px) {
				background-position: right -510px bottom 70px;
			}

			@media screen and (min-width: 1600px) {
				background-position: right -300px bottom 70px;
			}



		}

	}
</style>
