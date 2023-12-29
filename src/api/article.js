import axios from 'axios'
//定义一个变量，记录公共的前缀，baseURL
const baseURL = 'http://localhost:8080';
const instance = axios.create({baseURL})

//获取所有文章数据函数
export async function articleGetAllService() {
    //发送异步请求，获取所有文章数据
    //同步等待服务器响应的结果，并返回，async  await
    return await instance.get('/product/findByCate?cate_id=1')
        .then(result => {
            return result.data.data;
        }).catch(err => {
            console.log(err);
        })
}

//获取单个文章数据函数
export async function articleSearchService(conditions) {
    //发送异步请求，根据条件查询文章数据
    return await instance.get('/product/findName', {
        params: conditions
    }).then(result => {
        return result.data.data;
    }).catch(err => {
        console.log(err);
    })
}