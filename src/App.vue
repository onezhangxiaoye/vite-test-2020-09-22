<template>
  <div class="main-app" :style="mainStyle">
    <img alt="Vue logo" src="../public/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    let mainStyle = ref('');
    let img = new Image();
    img.src = '../public/bg.webp';
    img.onload = function () {
      console.log('加载完成');
      mainStyle.value = 'background-image: url("../public/bg.webp");';
    }
    return {
      mainStyle,
    }
  },
}
</script>
<style>
  .main-app{
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100vw;
    height: 100vh;
  }
</style>
