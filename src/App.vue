<template>
  <div class="main-app" v-if="visible">
    <div class="main-app-loading"></div>
  </div>
  <div class="main-app" :style="mainStyle" v-else>
    <img alt="Vue logo" src="/logo.png" />
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
    let visible = ref(true);
    let img = new Image();
    img.src = './bg.webp';
    img.onload = function () {
      console.log('加载完成');
      visible.value = false;
      mainStyle.value = 'background-image: url("./bg.webp");';
    }
    return {
      mainStyle,
      visible,
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
    position: relative;
  }
  .main-app-loading{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
    animation-name: xua-zhuan;
    animation-duration: .2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

  }
  @keyframes xua-zhuan {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
