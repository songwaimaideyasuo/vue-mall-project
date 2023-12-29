<script setup>
import { ref } from 'vue'
import { articleGetAllService, articleSearchService } from '@/api/article.js'; // 导入函数

//定义响应式数据 ref
const articleList = ref([]);

//获取所有文章数据
// let data = articleGetAllService();
// articleList.value = data;
//同步获取articleGetAllService的返回结果  async await
const getAllArticle = async function () {
    let data = await articleGetAllService();
    articleList.value = data;
}
getAllArticle();


//定义响应式数据 searchConditions
const searchConditions = ref({
    name: ''
})

//定义search函数
const search = async function() {
    //文章搜索
    let data = await articleSearchService({...searchConditions.value})
    articleList.value = data;
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

