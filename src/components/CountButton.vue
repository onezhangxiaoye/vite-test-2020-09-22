<template>
    <button @click="handleClick">{{title}} {{count}}</button>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "CountButton",
        props: {
            title: {
                type: String,
                default: '按钮'
            },
        },
        setup(){
            let count = ref(0);
            function handleClick() {
                count.value++;
            }
            return {
                count,
                handleClick,
            }
        }
    }
</script>

<style scoped>

</style>
