<script setup lang="ts">
import { ref } from "vue";

    const counter = ref(5);

    const increase = (value:number) => {
        counter.value = counter.value + value;
    }

//export default defineComponent({
// setup() {
//    const counter = ref(5);
//
//    const increase = (value:number) => {
//        counter.value = counter.value + value;
//    }
//
//    return {
//        counter,
//        increase
//    }
// }
//});

</script>

<template>
    <h1>Counter View: {{counter}}</h1>
    <button @click="increase(1)">+1</button>
</template>