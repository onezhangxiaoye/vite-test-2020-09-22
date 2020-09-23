<template>
    <input type="text" @input="handleInput">
</template>

<script>
    import {ref, watch} from "vue";

    export default {
        name: "XInput",
        props: {
            modelValue: {
                type: [Number, String],
            },
        },
        emits: ['update:modelValue'],
        setup(props, {emit}){
            let value = ref(null);
            function handleInput(e) {
                value.value = e.target.value;
                emit('update:modelValue',  value.value)
            }
            watch(() => props.modelValue, function (newValue, oldValue) {
                console.log(newValue, oldValue)
            })
            return {
                value,
                handleInput,
            }
        },
    }
</script>

<style scoped>

</style>
