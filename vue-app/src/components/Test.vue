<template>
<div class="testPage" >
<input  :value="counts" @change="onChanged()" ref="numChange"/>
<div :value="counts" ></div>
</div>
</template>

<script>
export default {
  /* name: 'Test', */
  data(){
    return{
    
    value:1,
  } 
},
props:['counts'],
methods:{
onChanged(){
  var latestValue=this.$refs.numChange.value;
  console.log("latestValue:",latestValue);
  //产生事件 并传递参数
  this.$emit("valueUpdate",latestValue)
}
}

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
 