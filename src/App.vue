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
  import ArticleVue1 from './Article1.vue'

  import ButtonVue from './Button.vue'

  //调用ref函数，定义响应式数据
  const message = ref('Hello, Vue 3!')



</script>


<template>
  <ButtonVue/>

  <h1>{{ message }}</h1>
  <!-- 导入并使用 Api.vue组件 -->
  <ApiVue />

  <!-- 导入并使用 Article.vue组件 -->
  <!-- <ArticleVue /> -->

  <!-- 导入并使用 Article1.vue组件 -->
  <ArticleVue1 />


</template>

<style>
  h1 {
    color: blue;
  }
</style>
