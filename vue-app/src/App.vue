<template>
  <div id="page">
  <!--路由展示-->
   <div class="content"><router-view/></div>
   <!--底部导航-->
   <NavBottom />
  </div>
</template>
<script>
import NavBottom from './components/NavBottom.vue'
export default {
  
  components:{
    NavBottom
  }
  
}
</script>
<style>
@import './assets/css/index.css'
</style>
