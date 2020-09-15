<template>
  <div class="nav-buttom">
      <router-link to="/home">
        <i class="iconfont icon-icon-test12"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/find">
        <i class="iconfont icon-icon-test"></i>
        <span>发现</span>
      </router-link>
      <router-link to="/order">
        <i class="iconfont icon-icon-test2"></i>
        <span>订单</span>
      </router-link>
      <router-link to="/mine">
        <i class="iconfont icon-icon-test10"></i>
        <span>我的</span>
      </router-link>
   </div>
</template>

<script>
export default {
  name: 'NavBottom'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  color:red;
}
.nav-buttom{
    
    height: 50px;
   /*  width: 30em; */ 
    width: 100%;
    position: fixed;
    bottom: 0em;
    display: flex;
    justify-content: space-around;
    background:#ccc;
    z-index: 666;
    
}
a{
    text-decoration: none;
    color: #000;
  }
.router-link-active {
    text-decoration: none;
    
  } 
.nav-buttom span{
    bottom: 0em;
    display: block;
    font-size: 1em;
    
    text-align: center;
    
}
</style>
