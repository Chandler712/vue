<template>
  <div class="home">
    
    <!-- <Search /> -->
    <div class="searchPage">
    <div class="serchPart">
      <div id="allmap"></div>
      <div :class="[flag?'getCity':'getCityChange']">当前城市：{{locationCity}}</div>
      <div class="inputSerch" @click="typeInput()" ><input type="text" v-model="input"  placeholder="请输入查询的内容"></div>
      <div :class="[flag?'searchBtn':'searchBtnChange']" @click="searchBtn()">搜索</div>
    </div>
  
    </div>
    <!-- NavHeader 顶部导航-->
    <!-- <div class="category" v-for="(list,i) in lists" :key="i">
      <i class="iconfont" :class="list.icon" :style='{background:list.color}'></i>
      <span>{{list.title}}</span>
    </div> -->
     
     <NavHeader /> 
    <!-- Banner 图片轮播-->
   <!--  <div class="banner">
      <img alt="img" v-for="(img,i) in imgArr" :key="i" :src="img" v-show="n==i">
      <div class="banner-circle">
        <ul>
          <li v-for="(img,i) in imgArr" :key="i" :class="n==i ?'selected': ''">
            {{i+1}}
          </li>
        </ul>
            
      </div>
    </div> -->
    <Banner :imgArr="imgArr"/>
    <!-- 列表展示 -->
    <div class="product-list">
      <ul>
        <li class="lists" v-for="item in serchDataMatch" :key="item.product_id">
        <router-link :to="'/detail/'+item.product_id">
          <img :src="item.url" width="150px" height="150px"/>
        </router-link>
        <label>
          <h5 class="product-name">{{item.product_name}}</h5>
          <b class="discount">{{item.discount_price}}</b>
          <span class="price-text">{{item.sale_price}}</span>
        </label>
        </li>
      </ul>

    </div>
  </div>
</template>
<style>
.serchPart{
  margin-top: 2px;
  display:flex;
  width:100%;
  height:30px;
  background-color:rgb(255, 255, 255);
}
#allmap{
  width: 0;
}
.getCity{
   text-align:center;
   line-height: 30px;
  font-size: 14px;
  height:30px;
  width: 30%;
 color: #000;
}
.getCityChange{
  width: 30%;
  display: none;
}
.inputSerch{
  width: 80%;
 
  
}
.inputSerch input{
  width: 90%;
  background: rgb(238, 229, 229);
  text-align:center;
  padding:6px 10px;
  border-radius: 15px;
  color: rgb(14, 13, 13);
  
}
.searchBtn{
  width: 10%;
  float:right;
  display: block;
  font-size: 14px;
  line-height: 30px;
  
  height:30px;
}
.searchBtnChange{
 text-align:center;
 width: 15%;
 cursor: pointer;
}

</style>
<script>
//import axios from 'axios';
import Banner from '../components/Banner.vue';
import NavHeader from '../components/NavHeader.vue';
/* import Search from '../components/Search.vue'; */
export default {
  name: 'Home',
  components:{
    NavHeader,
    Banner,
   /*  Search, */
    },
    data(){
    return{
      timer:null,
      n:0,
      flag:true,
      locationCity: '正在定位',
      input:'',
      /* lists:[
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'出行',icon:'icon-chuchalvyouchuxing',color:'#FFEC8B'},
      {title:'休闲',icon:'icon-xiuxian',color:'#A4D3EE'},
      {title:'购物',icon:'icon-icon-test3',color:'#EE3B3B'},
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'更多',icon:'icon-more',color:'#EE3B3B'}
    ], */
    imgArr:[
      require('../assets/img/img1.jpeg'),//路径需要加require
      require('../assets/img/img2.jpeg'),
      require('../assets/img/img3.jpg'),
      require('../assets/img/img4.jpg'),
    ],
    items:[]
    /*
    }
  },
  methods:{
    play(){
      this.timer=setInterval(this.autoPlay,2000)
  },
  autoPlay(){
    this.n++;
    if(this.n==this.imgArr.length){
      this.n=0;
    }
  } 
  },
  mounted:function(){ //钩子函数，生命周期 挂载完成
    this.play();
  },
  destroyed:function(){ //销毁
    clearInterval(this.timer);
  },
  */
}
},
methods:{
  getList(){
    this.$http.get('/home/index.php').then(res=>{
      
      console.log(res);
      this.items=res.data;
      console.log(res.data);
    })
  },
  searchBtn(){
    this.flag=true
  },
  typeInput(){
  this.flag=false;
  },
  getLocation() {
    var that=this;
    var map = new BMap.Map('allmap');
    function myFun(result) {
    
        var cityName = result.name;
        map.setCenter(cityName);
       console.log("当前定位城市:" + cityName);
       that.locationCity=cityName

    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun)
    console.log(map,myCity)
},
},

mounted:function(){
  this.getList();
  this.getLocation();
},
computed:{
  
     serchDataMatch:function(){

               /*  ES5 indexOf()
                var _this=this;
                if(!this.input) return this.cartList;
                return this.cartList.filter(function(v){
                    return v.product_name.indexOf(_this.input)!=-1
                }) 
                */

                /* ES5 indexOf()+ES6箭头函数 
                if(!this.input) {return this.cartList}
                return this.cartList.filter(v=>{
                    return v.product_name.indexOf(this.input)!=-1
                })
                */
               /* ES6箭头函数+ES7 includes() */
               if(!this.input) {return this.items}
               return this.items.filter(v=>{
                return v.product_name.includes(this.input)
               })
              
            }

}
}

</script>
