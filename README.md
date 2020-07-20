# cl-vue-demo
长亮vue开发demo created by tuang

# 安装依赖
npm config set registry https://registry.npm.taobao.org
npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ 
npm install

# 启动开发
npm run dev
前端接口自测支持mock
项目附赠koa2工程作为调试功能

# 项目打包（支持多环境打包）
npm run build

# 目录结构

项目目录：
1、api --api接口
2、assets --静态资源
3、components --页面插件
4、init --工程初始化方法
5、mork --mork工具
6、styles --所有外置样式
7、views --vue页面
8、utils --工具类
9、vuex --vuex组件

# 开发规范
1、文件夹：
	文件夹名称应统一格式，小写开头，见名思意
2、组件：
    组件名以单词大写开头，当多个单词拼写成的组件时，采用驼峰式命名规则。
    （1）共有组件放在components下面
    （2）私有组件放在页面文件夹下，入口页面以index.vue命名（方便直接用文件夹作为页面地址）
        如;
        |—views 					views页面文件夹
            |— homePage             主页页面（文件夹）
                |— index.vue        页面入口
            	|— HomeTable.vue    页面表格（组件）
            	|— HomeChart.vue    页面图表（组件）
                |— HomeDialog.vue   页面弹出窗口（组件）
        
        路由懒加载引入页面时：
        const homePage = () => import('@/views/homPage')
3、样式
    （1）样式名称使用 小写字母+数字+中划线 的格式（有的公司也会下划线的格式）
    （2）页面样式有嵌套关系，按照class上下层级关系嵌套，避免产生样式干扰
    （3）非特殊情况下，禁止使用 ID 选择器定义样式
    （4*）CSS 属性书写顺序：先决定定位宽高显示大小，再做局部细节修饰！推荐顺序：定位属性(或显示属性，display)->宽高属性->边距属性(margin, padding)->字体，背景，颜色等，修饰属性的定义

4、注释
    html注释：<!-- -->
    css注释：/* write your HTML comment! */
    js注释：// 正确的注释

# 接口调试
    项目工作自带mock组件，推荐使用其他外置接口进行调试（因为mock的后台接口会占据一定的代码量），项目附赠一个koa2的前端工程用于接口模拟





