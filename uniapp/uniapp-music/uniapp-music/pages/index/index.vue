<template>
	
	<view class="content">
		<view>敖总的资产:{{account}}</view>
		<view>敖总的资产:{{fixesAccount}}</view>
		<view>喜欢的歌手是:{{singer}}</view>
		<view>喜欢的歌手是:{{computedSinger}}</view>
		<input type="text" v-model="newName"/>
		<button @click="addName">添加</button>
		<view>你要添加的名字{{newName}}</view>
		<view class="list-area">
			爱人名字列表
			<view v-for="item in list" :key="index">
				{{item.name}}
			</view>
		</view>
		<view class="repos">
			<view v-for="item in repos" :key="id">
				{{item.description}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:12342312222,
				singer:'梁咏琪',
				newName:'',
				list:[
					{name:'周杰伦'}
				],
				repos:[]
			}
		},
		//对data二次加工
		computed:{ //计算属性
			computedSinger:function(){
				return this.singer.split('').reverse().join('')
			},
			fixesAccount(){
				return(this.account/100000000).toFixed(2)+'亿元'
			}
		},
		
		onLoad() {
		uni.request({
			url:'http://api.github.com/users/shunwuyu/repos',
			method:'GET',
			data:{},
			success:res =>{
				console.log(res)
				this.repos = res.data
			},
			fail:() => {
				
			},
			complete:() => {
				
			}
		})
		},
		methods: {
			addName(){
				let name = this.newName.trim();
				if(name){
					this.list=[
						...this.list,
						{name}
					]
					this.newName=''
				}
			}
			

		}
	}
</script>

<style>
	.repos{
		line-height: 30rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
