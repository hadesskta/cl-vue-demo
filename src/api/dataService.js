import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

import maTypes from '../vuex/maTypes';

export const DataService = function (ctxPath, router, store) {
    let dataService = axios.create({
        baseURL: ''/* `/${ctxPath}/` // 多后台API场景，不指定请求前缀*/,
        timeout: 60000,
        headers: {
            // 此处设置的是表单格式，其实也可以改成设置 json
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        
        // 如果设置 json , 下面的配置可以去掉
        transformRequest: [function (data, headers) {
            // Do whatever you want to transform the data
            return qs.stringify(data, { allowDots: true });
        }]
    })

    dataService.defaults.headers.post['Content-Type'] = dataService.defaults.headers.post['Content-Type'] + ';charset=utf-8'

    // 请求拦截器
    dataService.interceptors.request.use(function (config) {
        // 此处可以设置通用请求变更，比如设置请求投信息，模拟代码如下
        // if (store.getters.hasToken) {
        //     config.headers = Object.assign({}, config.headers, store.getters.getToken)
        // }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    dataService.interceptors.response.use(function (response) {
        // 此处可以拦截通用返回信息，如处理退出登陆，如返回json中code为999为退出登陆
        // let data = response.data;
        // if(data.code && data.code !== 0){
        //     switch(data.code){
        //         case 999:
        //             // 做些退出登陆的事情
        //             break;
        //         default:
        //             break;
        //     }
        // }

        return response;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });
    return dataService;
}

export default DataService;