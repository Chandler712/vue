<template>
  <div class="orderPage">
  
    <div class="orderNav">
      <a v-for="(topNav,i) in navBar" :key="i" @click="cur=i" :href="'#'+i"> {{topNav}}</a>
      
    </div>
    <div style="width：100%;height:30px"></div>
    <div :class="[isTrue?'orderContent':'deleteCover']" @func="loadOrder" v-for="(orderList,orderId) in orderList" :key="orderId" >
       <div class="content" v-for="(content,k) in contentObj" :key="k" v-show="cur==k" ><!--  {{content.ctn}} -->
          
        </div>
       <!-- <div>{{this.$store.state.totoalcount.product_name}}</div> -->
      
          <div v-show="cur==0|cur==1" style="">
          
            
             
                     <div class="productInfo" style="height:50px">
                        <img :src="orderList.productImg" width="50px" height="50px" style="float:left"/>
                        <div class="productName" >品名：{{orderList.productName}}</div>
                        <div>单价：{{orderList.sale_price}} </div>
                    </div>
                    <div class="shopQty">
                      <div>购买数量：</div>
                      <div>
                          <span @click="addOne(orderList)">+</span>
                          <span>{{orderList.num}}</span>
                          <span @click="reduceOne(orderList)">-</span>
                      </div>
             
                    </div>
           
          
                    <div class="countTotalPrice">
                      <span>产品价格：</span>
                      <span>{{orderList.sale_price*(orderList.num) |pricefilter(2)}}</span> 
                    </div> 
             
          <div style="float:left"> 
            <!-- <el-button :type="orderList.is?'success':' '" icon="el-icon-check" circle size='mini' ></el-button> -->
             <el-switch v-model="orderList.is"  :active-value="0" :inactive-value="1" active-text="确定" inactive-text="取消"  @change="getOrderChange(orderList)"></el-switch>
          </div>
         
          <div style="float:right"><el-button type="danger" icon="el-icon-delete" circle size='mini' @click="deleteOrder(orderList)"></el-button></div>
        </div>
       
    </div>
     <div class="computedOrder" >
        <el-col :span="12"><span>订单数量：{{addCartQty}} </span></el-col>
         
         <el-col :span="12"><span> 价格：{{totalPrice |pricefilter(2)}} </span></el-col>
         <router-link to="userinfo" style="text-decoration: none;"> <el-button type="danger" plain disabled style="color:white;width:100%;background:red;">结算</el-button></router-link>
      </div> 
           
    <div style="width：100%;height:50px"></div>
  </div>
</template>
<style>
.orderPage{
  width: 100%;
  height: 100%;
}
.orderNav{
  top: 0;
  width: 100%;
  height: 30px;
  background: rgb(231, 235, 243);
  position: fixed;
  z-index: 555;
  
}
.orderNav a{
  height: 30px;
  width: 20%;
  display: block;
  float: left;
  text-decoration: none;
  text-align: center;
  color: black;
 
} 
.orderNav a:hover{
 border-bottom: 1px solid rebeccapurple;
 color: rgb(32, 65, 212);
}
.orderContent{
  
   width: 100%;
  height: 150px;
  border-bottom:1px solid black;
  
}
.content{
  
  float: left;
}
.deleteCover{
height: 113px;
width: 100%;
background: black ;
opacity: 0.1;
}

</style>
<script>
import Vue from 'vue';


export default {
  name: 'Order',
  components:{
  
    },
  data(){
    return{
      isTrue:true,
      newNum:1,
     navBar:['全部','待付款','待发货','待收货','待评价'],
     contentObj:[
       {  
         'id':1,
         'ctn':'全部'
         },
       {
         'id' :2,
         'ctn':'待付款'
       
       },
       {'id':3,
       'ctn':'待发货'},
       {'id':4,'ctn':'待收货'},
       {'id':5,'ctn':'待评价'}
     ],
      
     cur:0,
     items:[],
     orderList:[],
      
      orderObj:[]
  }
  
},

 

methods:{
  addOne(orderList){
     orderList.num++;
    
  },
  reduceOne(orderList){
    if (orderList.num <= 1) {
      return false;
    }
      orderList.num--;
     
    },
    loadOrder(){
   var orderList = JSON.parse(localStorage.getItem("cmts") || '[]')
    this.orderList = orderList
},
getOrderChange(x){
 

  console.log(x)
  console.log(this.orderList);
  
  
},
deleteOrder(x){
  this.getOrderChange(x)
  /* this.orderList.pop(x) */
  if(x.is==0){
    this.orderList.splice(0,1)
  }
}
  

},
created(){
 
/*  */
this.loadOrder()
 /*  */

},

mounted:function(){

},
computed:{
  
   addCartQty:function(){
            console.log(this.orderList)
          
               return this.orderList.reduce(function(total,cur){
                    return total+cur.num
                },0)
            
          
                
            },
           
   totalPrice:function(){
                return this.orderList.reduce(function(total,cur){
                    return total+cur.num*cur.sale_price
                },0)
            },

     
     
   
},
filters:{
            pricefilter:function(v,n){
                return '￥'+v.toFixed(n)
            }
  },
}


    
</script>
