<template>
    <div class="yanshi-div-module">
      <div class="ydm-title">
        <span>{{title}}</span>
      </div>
      <el-divider></el-divider>
      <div class="ydm-container">
        <!-- slot 插槽的使用 -->
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'yanshi',
  props:{
    title:{
      require: true,
      type: String
    }
  }
}
</script>

<style scope lang="scss">
  .yanshi-div-module{
    margin-top: .2rem;
    margin-left: .2rem;
    padding: .05rem .05rem .05rem .05rem ;
    width: 70%;
    box-shadow:-.02rem -.01rem .10rem #333333;
    border-radius: .05rem;
    .ydm-title{
      height: .17rem;
      font-size: .20rem;
      font-weight: bold;
    }
    .ydm-container{
      padding-left: .09rem;
    }
  }
</style>
