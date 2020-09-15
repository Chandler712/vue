<template>
<div class="navHeader">
 <div class="category" v-for="(list,i) in lists" :key="i">
      <i class="iconfont" :class="list.icon" :style='{background:list.color}'></i>
      <span>{{list.title}}</span>
</div>
</div>
</template>

<script>
export default {
  name: 'NavHeader',
  data(){
    return{
      //timer:null,
     // n:0,
    lists:[
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'出行',icon:'icon-chuchalvyouchuxing',color:'#FFEC8B'},
      {title:'休闲',icon:'icon-xiuxian',color:'#A4D3EE'},
      {title:'购物',icon:'icon-icon-test3',color:'#EE3B3B'},
      {title:'住宿',icon:'icon-listzhusu',color:'#FFEC8B'},
      {title:'美食',icon:'icon-meishi1',color:'#D2691E'},
      {title:'更多',icon:'icon-more',color:'#EE3B3B'}
    ],
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navHeader{
     z-index:1;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
   
} 
.category{
    margin-top: 10px;
    text-align: center;
    box-sizing: border-box;
    flex: 0 0 25%;
    height: 80px;
          
}
.category span{
    
    display: block;
}
</style>
 