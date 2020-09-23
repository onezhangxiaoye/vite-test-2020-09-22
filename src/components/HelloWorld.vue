<template>
  <h1>{{ msg }}</h1>
  <CountButton/>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <XInput v-model="value" />
  input ---- {{value}}
</template>

<script>
import CountButton from "./CountButton.vue";
import XInput from "./XInput.vue";
import {ref, watch} from "vue";
export default {
  name: 'HelloWorld',
  components: {XInput, CountButton},
  props: {
    msg: String
  },
  setup(){
    let value = ref(null);
    watch(
            () => value,
            function (v) {
              console.log(v)
            }
    )
    return {
      value,
    }
  }
}
</script>
