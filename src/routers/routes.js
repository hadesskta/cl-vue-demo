const homePage = () => import('@/views/homePage')

const mainPage = () => import('@/views/mainPage')
const esPage = () => import('@/views/esPage')

let routes = [
    {
        path: '/',
        component: homePage,
        oneLeafFlag: true,
        name: '首页',
        children:[{
            path: '/mainpage', component: mainPage, name: '首页主体'
        }]
    },
    {
        path: '/',
        component: homePage,
        name: '代码样例',
        children: [
            { path: '/esPage', component: esPage, name: 'es6基础' },
        ]
    }
];

export default routes;