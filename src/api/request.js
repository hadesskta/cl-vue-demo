import { DataService } from './dataService'
import { Message } from 'element-ui'

const dataService = DataService()

/**
 * post 接口
 */
export function post(url, callBack, queryParam){
    return dataService({
        method : 'POST',
        url,
        data: queryParam
    }).then(json =>{
        if(json.data.code === 0){
            callBack(json)
        } else {
            Message({
                type: 'error',
                message: json.data.msg
            });
        }
    }, err => {
        console.log('err:', err);
    });
}

/**
 * 
 */
export function get(url, callBack, token){
    dataService({
        method : 'GET',
        url,
        params: token
    }).then(json => {
        if(json.data.code === 0){
            callBack(json)
        } else {
            Message({
                type: 'error',
                message: json.data.msg
            });
        }
    }, err => {
        console.log('err:', err);
    });
}