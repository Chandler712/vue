<template>
  <div class="find">

   <el-page-header @back="goBack" content="分类">
</el-page-header>

  <el-tabs :tab-position="tabPosition" >
    <el-tab-pane label="住宿">
      住宿
      <div><a v-for="(item,i) in items" :key="i" style="width:25%;display:block;float:left"><span class="iconfont icon-zhusuxinxi"></span><span style="display:block">酒店{{item}}</span></a>
      </div>
    </el-tab-pane>
    <el-tab-pane label="美食">住宿
      <div><a v-for="(item,i) in items" :key="i" style="width:25%;display:block;float:left"><span class="iconfont icon-meishi"></span><span style="display:block">美食{{item}}</span></a>
      </div></el-tab-pane>
    <el-tab-pane label="出行">角色管理</el-tab-pane>
    <el-tab-pane label="休闲">定时任务补偿</el-tab-pane>
     <el-tab-pane label="购物">配置管理</el-tab-pane>
    <el-tab-pane label="住宿">角色管理</el-tab-pane>
    <el-tab-pane label="休闲">定时任务补偿</el-tab-pane>
    <el-tab-pane label="更多">定时任务补偿</el-tab-pane>
     <el-tab-pane label="购物">配置管理</el-tab-pane>
    <el-tab-pane label="住宿">角色管理</el-tab-pane>
    <el-tab-pane label="休闲">定时任务补偿</el-tab-pane>
    <el-tab-pane label="更多">定时任务补偿</el-tab-pane>
    <el-tab-pane label="更多">定时任务补偿</el-tab-pane>
     <el-tab-pane label="购物">配置管理</el-tab-pane>
    <el-tab-pane label="住宿">角色管理</el-tab-pane>
    <el-tab-pane label="休闲">定时任务补偿</el-tab-pane>
    <el-tab-pane label="更多">定时任务补偿</el-tab-pane>
     <el-tab-pane label="休闲">定时任务补偿</el-tab-pane>
    <el-tab-pane label="更多">定时任务补偿</el-tab-pane>
  </el-tabs>
  <div style="width:100%;height: 50px; z-index:1"></div>
  
  </div>
  
</template>

<style>
.el-tabs--left, .el-tabs--right{
  padding-top:24px;
  width: 100%;
 z-index:2;
 overflow:auto;
 
}

.el-page-header{
  background: rgb(236, 234, 230);
      top:0;
      z-index:5555;
      width: 100%;
      position: fixed;
     
  border-bottom: 1px solid white;
 
}
.el-page-header__left::after{
  width: 0;
}
.el-page-header__content{
  margin: 0 auto;
}
</style>
<script>

/* import Banner from '../components/Banner.vue' */

export default {
  name: 'Find',
  
  components:{
    /* Banner, */
  },
  data(){
    return{
   /*  findImgArr:[
      require('../assets/img/img5.jpg'),
      require('../assets/img/img6.jpg'),
      require('../assets/img/img7.jpg'),
      require('../assets/img/img8.jpg'),
    ], */
    items:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
      activeIndex: '1',
        activeIndex2: '1',
      tabPosition: 'left'
  }
  },
   methods: {
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       goBack() {
        console.log('go back');
        this.$router.go(-1);
      },
     
      
    },
    computed:{
      
      
    }
  
}
</script>
