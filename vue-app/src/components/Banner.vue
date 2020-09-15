<template>
   <div class="banner">
      <img alt="img" v-for="(img,i) in imgArr" :key="i" :src="img" v-show="n==i">
      <div class="banner-circle">
        <ul>
          <li v-for="(img,i) in imgArr" :key="i" :class="n==i ?'selected': ''">
            {{i+1}}
          </li>
          
        </ul>
            
      </div>
    </div> 
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return{
      timer:null,
      n:0,
  
    }
  },
  props:["imgArr"], //数组定义方式 接收imgArr,子组件中声明，被引用的组件
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  z-index: 1;
    width: 100%;
    height: auto;
  }
  .banner img{
    width: 100%;
    height: auto;
  } 
  .banner-circle{
  
    margin: 0 auto;
    width: 180px;
    height: 30px;
    margin-top: -50px;
    
  }
  
  ul li{
    list-style-type: none;
    display: inline-block;
    margin-right: 5px;
    
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(19, 18, 16,0.5);
    text-align: center;
    color:white;
    
  }
  .selected{
    background: rgba(179, 24, 24, 0.5);
    color:yellow;
  }
</style>
