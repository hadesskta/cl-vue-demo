
const PROJ_PRE_NAME = 'cl-vue-demo_';

export function isObject(val) {
    return val !== null && typeof val === 'object'
}

export function setStore(key, val, type = 'localStorage') {
    let pre = PROJ_PRE_NAME;
    if (isObject(val)) window[type].setItem(`${pre}.${key}`, JSON.stringify(val))
    else window[type].setItem(`${pre}.${key}`, val)
}
export function getStore(key, type = 'localStorage') {
    let pre = PROJ_PRE_NAME;
    var val = window[type].getItem(`${pre}.${key}`)
    try {
        return JSON.parse(val)
    } catch (e) {
        return val
    }
}

export function removeStore(key, type = 'localStorage') {
    let pre = PROJ_PRE_NAME;
    window[type].removeItem(`${pre}.${key}`);
}
export function setSessionStore(key, val) {
    setStore(key, val, 'sessionStorage')
}
export function getSessionStore(key) {
    return getStore(key, 'sessionStorage')
}
export function removeSessionStore(key) {
    return removeStore(key, 'sessionStorage')
}
// 默认30minute
export function setExpireStore(key, val, ex = 1.8e6) {
    setStore(key, { v: val, t: Date.now() + ex })
}
export function getExpireStore(key) {
    var obj = getStore(key)
    if (obj.t > Date.now()) return obj.v
    else return false
}

export default {
    isObject,
    setStore,
    getStore,
    removeStore,
    setSessionStore,
    getSessionStore,
    removeSessionStore,
    setExpireStore,
    getExpireStore
}