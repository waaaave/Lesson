<template>
  <div id="app">
    <router-link to="/goods">商品</router-link>
    <router-link to="/ratings">评论</router-link>
    <router-link to="/seller">商家</router-link>
    <router-link to="/pr">pr</router-link>

    <!-- <Switch>
      <Route/>
    </Switch> -->
    <div class="route">
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
