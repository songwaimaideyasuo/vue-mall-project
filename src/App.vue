<!-- <script>
export default {
    data() {
        return {
            message: 'Hello, Vue 3!'
        }
    }
  }
</script> -->

<script setup>
  import { ref } from 'vue'
  //导入 Api.vue文件
  import ApiVue from './Api.vue'
  //导入 Article.vue文件
  import ArticleVue from './Article.vue'

  //调用ref函数，定义响应式数据
  const message = ref('Hello, Vue 3!')



</script>


<template>
  <h1>{{ message }}</h1>
  <!-- 导入并使用 Api.vue组件 -->
  <ApiVue />

  <!-- 导入并使用 Article.vue组件 -->
  <ArticleVue />


</template>

<style>
  h1 {
    color: blue;
  }
</style>
