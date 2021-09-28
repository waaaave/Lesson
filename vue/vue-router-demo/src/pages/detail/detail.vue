<template>
<div>
  detail {{id}}
</div> 
</template>
<script>
export default {
  //生命周期
  data(){
      return{
          id:0
          }
  },
  created() {
    //使用了vue-router 挂载在了vue的原型链上
    this.id=this.$route.params.id}
}
</script>