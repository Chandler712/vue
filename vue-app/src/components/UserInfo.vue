<template>
<div class="userInfo">
    <el-page-header @back="goBack" content="未开发功能">
    </el-page-header>
  <div>name:{{userInfo.name}}</div>
  
 
</div>
</template>

<script>
export default {
  name:'UserInfo',
  data(){
    return{
    userInfo:[]
    
  } 
},

methods:{
 goBack() {
        console.log('go back');
        this.$router.go(-1);
      },
},
created(){
//获取localStorage中的值
 var userData = JSON.parse(localStorage.getItem("userInfo"))
        this.userInfo = userData
}

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
 