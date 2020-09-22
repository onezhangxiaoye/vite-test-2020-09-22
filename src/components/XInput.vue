<template>
    <input type="text" @input="handleInput">
</template>

<script>
    import {ref, watch} from "vue";

    export default {
        name: "XInput",
        props: {
            modalValue: {
                type: [Number, String],
            },
        },
        setup(props){
            let value = ref(null);
            function handleInput(e) {
                value.value = e.target.value;
                this.$emit('modalValue:update', value.value);
            }
            watch(() => props.modalValue, function (newValue, oldValue) {
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
