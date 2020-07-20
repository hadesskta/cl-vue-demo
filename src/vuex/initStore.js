import maTypes from './maTypes';
import storageService from '../utils/storageService';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
    state:{
        user: {
            userName: 'tuang'
        },
        shareItem:{
            dateItem:''
        }
    },
    getters:{
        getUser: (state) =>{
            // 浅克隆一个对象返回 也可以直接返回
            return Object.assign( {}, state.user );
        },
        getDateItem: (state) =>{
            return state.shareItem.dateItem;
        },
    },
    // mutations 为同步
    mutations:{
        // 设置用户 顺便保存 进浏览器的 localStorage （登陆时使用），这里可以设置保存时间
        // 如果 getUser 为空，可以考虑从 localStorage 中获取用户
        // 然后通过 ACTION 重新将user注册进state
        [maTypes.MUTATION_USR_ADD] ( state, payload ) {
            console.log( '[MUTATION_USR_ADD], payload:', payload );
            state.user = Object.assign( {}, payload )
            storageService.setStore('session_user', payload);
        }, 
        [maTypes.MUTATION_USR_DEL] ( state ) {
            console.log( '[MUTATION_USR_DEL]' );
            state.user = null;
            storageService.removeStore('session_user')
        },
        [maTypes.MUTATION_DATEITEM_ADD] ( state, payload ) {
            console.log( '[MUTATION_DATEITEM_ADD], payload:', payload );
            state.shareItem.dateItem = payload
        }, 
    },
    // actions 为同步
    actions:{
        [maTypes.ACTION_USR_ADD] ( { state, getters, commit, dispatch }, payload ) {
            console.log( '[ACTION_USR_ADD], payload:', payload );
            return new Promise( ( resolve, reject ) => {
                commit( maTypes.MUTATION_USR_ADD, payload );
                resolve();
            } )
        }
    }

}

export default new Vuex.Store(store)