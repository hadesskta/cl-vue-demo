import { DataService } from '../api/dataService'
import maTypes from '../vuex/maTypes'

const moment = require('moment')

const install = function(Vue, opts = {}){
    // 再初始化vue之前，预处理一些信息，或者配置一些环境
    
    // 1、自己创建一个dataService或者其他什么常用元素，注册进vue，方便其他页面直接从vue里拿
    let dataService = new DataService("", opts.router, opts.store);
    Vue.prototype.$dataService = dataService; //直接可以使用dataService

    // 2、请求后台代码，获取一些信息注册进入store
    // let sysconfig = dataService.post('/systemconfig/getconfig', {});
    // sysconfig.then((data) =>{
    //     console.log('data', data);
    //     opt.store.commit(maTypes.ACTION_USR_ADD, data.data);
    // });

    // 3、初始化一些常用环境参数
    opts.store.commit(maTypes.MUTATION_DATEITEM_ADD, moment().format('YYYY-MM-DD'))


    // initApp
    opts.initApp();
}

export default install;