<template>
  <div class="detailPage">
    <a @click="goBack()" class="iconfont icon-fanhui"></a>
   
     <!--  <h1>This is {{pageNumber}} detail page</h1> -->
     <div class="detailPageContent">
       <img :src="items.url" width="100%" height="100%"/>
       <div style="text-align:center">{{items.product_name}}</div>
       <div style="text-align:center">{{items.sale_price}}RMB</div>
     </div>
    <div class="addCart">
      <span :class="[!seen?'salePrice':'addCartChange']" >价格：{{items.sale_price}}</span>
      <span :class="[!seen?'addCartBtn':'addCartChange']" @click="changeShow()">加入购物车</span>
      
      <span :class="[seen?'addCartOver':'addCartChange']" @click="orderCode()">
         <router-link to="/order" style="width:100%;height:50px;text-align:center;background-color:red; text-decoration: none;color:white;">确定 </router-link>
      </span>
      
    </div>
    <div class="mask-layer" v-if="seen">
       <div class="zhezhao">
            <span class="x" @click="changehide">X</span>
            <div class="productInfo">
                <img :src="items.url" ref="productImg"/>
                <div class="productName" ref="productName" >品名：{{items.product_name}}</div>
                <div>单价：{{items.sale_price*1 |pricefilter(2)}} </div>
            </div>
           <div class="shopQty">
             <div>购买数量：</div>
             <div>
                <span @click="addOne()">+</span>
                <span>{{num}}</span>
                <span @click="reduceOne()">-</span>
             </div>
             
           </div>
           <!-- <Test :counts='allcounts' @valueUpdate="update"></Test> -->
          <div class="countTotalPrice">
             <span>产品价格：</span>
             <span>{{items.sale_price*num |pricefilter(2)}}</span>
             <!-- <span>总数量：{{allcounts}}</span> -->
          </div>    
        </div>
    </div>
    
   
   
  </div>
</template>

<script>

/* import Test from '../components/Test.vue' */
 var num=1;

export default {
  name: 'Detail',
 components:{
    /* Test, */
   
    },
  data(){
    return{
      pageNumber:0,
      items:[],
      seen: false,
      num:1,
     pageId:0,
     allcounts:[],
    profuct_Id:'',
    productName:'',
    sale_price:'',
    productImg:''
    }
  },
  
  props:[],
  created(){
      var totalCount=localStorage.getItem("counts")
      if(!totalCount){
        totalCount=1;
        localStorage.setItem("counts",1)
      }
      this.allcounts=totalCount
  },
  mounted:function(){
    this.getList();
    this.pageNumber=this.$route.params.pageNumber;
    console.log(this.$route.params.pageNumber);
    console.log(this.$route)
   
    
},
methods:{
  /* updat */
 /*  update(latestValue){
    console.log('......',latestValue);
    this.allcounts=latestValue;
  }, */

  
  goBack(){
    this.$router.push('/home')
  },
  getList(){
     var that=this
    this.$http.get('/home/index.php').then(res=>{
      var that=this
      
      var list=res.data;
      
      var id=that.pageNumber;
      var items=[]
      console.log(list,id);
      for(var i in list){
        if(list[i].product_id==id){
            that.items=list[i]
            console.log(that.items)
            break;
        }
      }
     
      
    })
  },
   changeShow() {
    this.seen = true
  },
  changehide() {
    this.seen = false
  },
  addOne(){
     num++;
      this.num=num;
  },
  reduceOne(){
    if (num <= 1) {
      return false;
    }
      num--;
      this.num=num;
    },
    
  orderCode(){
    console.log(123);
    
    /*  */
//点击确定后，数据存放到了localStorage中
//1.订单数据存到哪里去,存放到了localStorage中
                //2.先组织出一个最新订单数据对象
                //3.想办法，把第二步得到的订单对象，保持到localStorage中
                // 3.1 localStorage只支持存字符串数据,先调用JSON.stringify
                // 3.2 在保存最新的订单数据之前，要先从localStorage获取到之前的订单数据(string)转换为一个数组对象，然后把最新的订单，push到这个数组
                // 3.3 如果获取到的localStorage中的评论字符串为空，不存在，则可以返回一个'[]'让JSON.parse去转换
                // 3.4 把最新的订单列表数组，再次调用JOSN.stringify转为数组字符串，然后调用localStorage.setItem()
   var orderDetailContent={
      profuct_Id: this.items.product_id,
      productName: this.items.product_name,
      sale_price: (this.items.sale_price*num).toFixed(2),
      num:this.num,
      productImg:this.items.url
   }
 console.log('orderDetailContent',orderDetailContent)
  //从localStorage中获取存放的数据
var orderList=JSON.parse(localStorage.getItem("cmts") || '[]');
console.log('orderList',orderList)
// 重新保存最新的订单数据
orderList.push(orderDetailContent)

localStorage.setItem('cmts', JSON.stringify(orderList))

this.profuct_Id = this.productName =this.sale_price=this.num=this.productImg=''
this.$emit('func')
  
  }
  
   
},

computed:{
 
 
},
filters:{
            pricefilter:function(v,n){
                return '￥'+v.toFixed(n)
            }
  },
}
</script>

<style>
.detailPage{
 /*  text-align:center; */
 height: 100%;
}
.detailPageContent{
  height: 80%;
  width: 100%;
}
.detailPage a{
  width: 30px;
  height: 30px;
  background: gray;
  border-radius: 15px;
  position: fixed;
  display: block;
 
  text-align: left; 
} 
.addCart{
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
 
  z-index: 99999;
  background: rgb(252, 249, 249);
}
.addCartChange{
  display: none;
}
.salePrice{
  height: 40px;
  line-height: 40px;
  flex: 3;
  background: black;
  color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-left: 20px;
  text-align: center;
}
.addCartBtn{
  height: 40px;
  line-height: 40px;
  flex: 2;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
   background: rgb(167, 14, 14);
   margin-right: 20px;
   text-align: center;
}
.mask-layer{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.zhezhao {
        width: 100%;
        height: 250px;
        bottom: 0;
        position: fixed;
        
        background-color: white;
    }
.productInfo{
   height: 100px;
   border-bottom: 1px solid rgb(231, 224, 224);
}
.zhezhao img{
    float: left;
    width:100px;
    height: 100px;
    border:1px solid rgb(241, 238, 238);
}
.productName{
 border-bottom: 2px solid rgb(231, 224, 224);
} 
.shopQty{
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgb(231, 224, 224);
  justify-content: space-between;
} 
.shopQty span{
  float: left;
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  box-sizing:border-box;
  font-size: 20px;
}
.countTotalPrice{
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgb(231, 224, 224);
  justify-content: space-between;
}
.x {
        float: right;
        cursor: pointer;
}
.addCartOver{
  width: 100%;
  height: 50px;
  line-height: 50px;

 
   background:red;
  color: aliceblue;
   text-align: center;
}
</style>
