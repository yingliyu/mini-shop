<template>
	<news-list :list='newsList' @toNewsDetail='goDetail'></news-list>
</template>

<script>
	import { NewsList } from "../../components/news-list/news-list.vue"
export default {
	components: {
		NewsList
	},
	data() {
		return {
			newsList: []
		};
	},
	onLoad() {
		this.getNews();
	},
	methods: {
		async getNews() {
			const res = await this.$request({
				url: '/shop/news',
			});
			this.newsList = res;
		},
		goDetail(id){
			uni.navigateTo({
				url:`/pages/news/detail?id=${id}`
			})
		}
	}
};
</script>
