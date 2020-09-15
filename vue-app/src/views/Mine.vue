<template>
  <div class="minePage">
    
    <div class="minePageHeader">
      <span class="iconfont icon-icon-test10" style="font-size:80px; margin-left:20px;color:orange;display:block;float:left;width:20%"></span>
      <router-link to="login"><span class="logoin">登录/</span></router-link>
      
      <router-link to="resgiter"><span class="resgiter">注册</span></router-link>
    </div>
    <div class="mimeInfo">
      <span>个人中心</span>
      <router-link to="userinfo" style="text-decoration: none;"> <span class="iconfont icon-icon-test24" style="font-size:40px;color:gray"></span></router-link>
     
    </div>
    <div style="width:100%;display:flex;height:80px;justify-content: space-around;text-align:center">
      <div>
        <span class="iconfont icon-icon-test2" style="font-size:40px; display:block"></span>
        <a>我的积分</a>
      </div>
      <div >
      <span class="iconfont icon-guarantee" style="font-size:40px;display:block"></span>
       
      <a>售后服务</a>
      </div>
      <div>
      <span class="iconfont icon-icon-test27" style="font-size:40px;display:block"></span>
      <a>社区中心</a>
      </div>
    </div>
    <div class="mimeInfo" v-for="(item,i) in dataList" :key="i">
      <span class="iconfont" :class="item.icon" style="color:black;font-size: 20px;">{{item.name}}</span>
      <router-link to="userinfo" style="text-decoration: none;"> <span class="iconfont icon-icon-test24" style="font-size:40px;color:gray"></span></router-link>
     
    </div>
    
   
  </div>
</template>
<style>
.minePage{
  width: 100%;
  height: 100%;
  
}
.minePageHeader{
 width: 100%;
  display: block;
  
  height: 100px;
  
  border-bottom: 1px solid rgb(239, 235, 243);
  background: url(http://qiniu.verydog.cn/show.liluo.cc/bg.63c8e19.png) center top / 7.7rem repeat rgb(243, 125, 15);
}
.logoin{
  float: left;
  display: block;
  height: 100px;
  line-height: 100px;
  color: black;
  
}

.resgiter{
  float: left;
  display: block;
  color: black;
  height: 100px;
  line-height: 100px; 
}
.mimeInfo{
 display: flex;
 justify-content: space-between;
 width: 100%;
 height: 50px;
 line-height:50px;
  border-bottom: 1px solid rgb(239, 235, 243);

}

</style>
<script>
/* import login from '../components/Login.vue' */

export default {
  name: 'Mine',
  
  components:{
    /* Login */
  },
  data(){
    return{
    dataList:[
      {'name':'会员福利','icon':'icon-xiuxian2'},
      {'name':'优惠券','icon':'icon-icon_coupon'},
      {'name':'服务中心','icon':'icon-xiuxian2'},
      {'name':'联系我们','icon':'icon-connectdevice'},
    ]
    }
  },
  
}
</script>
