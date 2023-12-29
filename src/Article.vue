<script setup>
import { ref } from 'vue'
import axios from 'axios'

const articleList = ref([]);

//发送异步请求，获取所有文章数据
axios.get('http://localhost:8080/product/findByCate?cate_id=1')
  .then(result => {
    // console.log(result.data);
    //把服务器响应的数据保存起来
    articleList.value = result.data.data;
  }).catch(err => {
    console.log(err);
  })

//定义响应式数据 searchConditions
const searchConditions = ref({
  name: ''
})

//定义search函数
const search = () => {
  //发送异步请求，根据条件查询文章数据
  axios.get('http://localhost:8080/product/findName', {
    params: {...searchConditions.value}}).then(result => {
    console.log(result.data);
    //把服务器响应的数据保存起来
    articleList.value = result.data.data;
  }).catch(err => {
    console.log(err);
  })
}

</script>


<template>
  <!-- <div>{{ articleList }}</div> -->
  <div>
    文章标题: <input type="text" v-model="searchConditions.name">
    文章分类: <input type="text" v-model="searchConditions.category">
    发布状态: <input type="text" v-model="searchConditions.state">
    <button v-on:click="search">搜索</button>
    <br />
    <br />
    <table border="1 solid" colspa="0" cellspacing="0">
      <tr>
        <th>文章标题</th>
        <th>分类</th>
        <th>发表时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="(article, index) in articleList" :key="index">
        <td>{{ article.name }}</td>
        <td>{{ article.cate_id }}</td>
        <td>{{ article.create_time }}</td>
        <td>{{ article.sales_volume }}</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

