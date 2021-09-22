<template>
	<view>
		<view class="banner">
			<swiper class="swiper" :autoplay="true"
			 :indicator-dots="true"
			 indicator-active-color="#ff372b"
			 indicator-color="rgba(255,255,255,.5)"
			 duration="500"
			 :circular="true"
			 >	
				<swiper-item v-for="(item, index) in swiper" :key="index">
					<view class="item">
						<image :src="item.imageUrl" class="img"></image>
						<view class="tag">{{item.typeTitle}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="main-bar flex-box">
			<view class="flex-item" v-for="(item, index) in contentBar" :key="index">
				<image class="img" :src="'/static/image/index/t_'+ (index + 1) + '.png'"></image>
				<view>{{item.name}}</view>
				<view class="date" v-if="index==0">19</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [],
				contentBar: [
					{ name: "每日推荐"}, 
					{ name: "歌单"},
					{ name: "排行榜"},
					{ name: "电台"},
					{ name: "直播"}, 
				]
			}
		},
		onLoad() {
			uni.request({
				url: 'http://localhost:3000/banner',
				success: (res) => {
					this.swiper = res.data.banners
					// console.log(res)
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
page {
	background-color: #fff;
	color: #1a1a1a;
	font-size: 24rpx;
}	
.banner {
	width: 100%;
	height: 268rpx;
	margin: 30rpx auto 44rpx;
	.swiper {
		height: 268rpx;
	}
	.item {
		position: relative;
		display: block;
		width: 686rpx;
		height: 268rpx;
		margin: 0 atuo;
		border-radius: 14px;
		overflow: hidden;
	}
	.img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.tag {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 34rpx;
		padding: 0 14rpx;
		line-height: 34rpx;
		color: #fff;
		background: #43a5f0;
		z-index:10;
		border-top-left-radius:14rpx;
	}
}
.main-bar {
	padding-bottom: 22rpx;
	text-align: center;
	line-height: 70rpx;
	color: #666;
	border-bottom: 1rpx solid #e6e6e6;
	.img {
		display: block;
		width: 92rpx;
		height: 92rpx;
		margin: 0 auto
	}
	.flex-item {
		position: relative;
		.date {
			position: absolute;
			left: 60rpx;
			top: 40rpx;
			line-height: 1;
			font-size: 24rpx;
			color: #ff392d;
			transform: scale(0.8);
		}
	}
}
</style>