/* //导入axios  npm install axios
import axios from 'axios';
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = 'http://localhost:8080';
const instance = axios.create({baseURL}) */

import request from '@/util/request.js'

export async function articleGetAllService() {
    return request.get('/product/findByCate?cate_id=1');

}

export async function articleSearchService(conditions) {
    return request.get('/product/findName', { params: conditions });
}