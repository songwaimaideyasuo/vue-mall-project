<script setup>
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  //声明响应式数据 ref 响应式对象有一个内部的属性value
  const count = ref(0) //在组合式api中，一般把数据定义为响应式数据

  //声明函数
  function increment() {
    count.value++;
    console.log('count:', count.value)
  }

  //声明钩子函数 onMounted
  onMounted(() => {
      console.log('vue 已经挂载完毕了。')
    }
  );

</script>


<template>
  <button @click="increment">count: {{ count }}</button>
</template>

