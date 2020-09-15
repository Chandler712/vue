<template>
<div class="searchPage">
    <div class="serchPart">
      <div id="allmap"></div>
      <div :class="[flag?'getCity':'getCityChange']">{{locationCity}}</div>
      <div class="inputSerch" @click="typeInput()" ><input type="text" v-model="input"  placeholder="请输入查询的内容"></div>
      <div :class="[flag?'searchBtn':'searchBtnChange']">搜索</div>
    </div>
  
  </div>
</template>


<script>


export default {
  name: 'Search',
  data(){
    return{
    locationCity: '正在定位',
    flag:true,
   
    }
},
mounted(){
  
  this.getLocation();
  
},
methods:{
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
}
},
computed:{

}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serchPart{
  margin-top: 2px;
  display:flex;
  width:100%;
  height:30px;
  background-color:white;
}
#allmap{
  width: 0;
}
.getCity{
   text-align:center;
 
  width: 15%;
 color: #000;
}
.getCityChange{
  display: none;
}
.inputSerch{
  width: 85%;
 
  
}
.inputSerch input{
  width: 85%;
  background: rgb(238, 229, 229);
  text-align:center;
  padding:6px 10px;
  border-radius: 15px;
  color: rgb(14, 13, 13);
}
.searchBtn{
  display: none;
}
.searchBtnChange{
 text-align:center;
 width: 15%;
 cursor: pointer;
}

</style>
 