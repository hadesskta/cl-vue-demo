<template>
  <div class="es-main-container">
    <YanShiComponent title="0、学习文档地址">
      https://www.runoob.com/w3cnote/es6-tutorial.html
    </YanShiComponent>
    <YanShiComponent title="1、let 与 const">
      <ul>
        <li>let 声明的变量只在 let 命令所在的代码块内有效。</li>
        <li>const 声明一个只读的常量，一旦声明，常量的值就不能改变。</li>
      </ul>
    </YanShiComponent>
    <YanShiComponent title="2、解构赋值">
      <ul>
        <li>解构赋值是对赋值运算符的扩展。</li>
        <li>他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。</li>
      </ul>

      <el-form class="esm-form" ref="case1" :model="case1" label-width="1.10rem">
        <el-form-item label="case1.foo:">
          <el-input v-model="case1.foo" size="small"></el-input>
        </el-form-item>
        <el-form-item label="case1.bar:">
          <el-input v-model="case1.bar" size="small"></el-input>
        </el-form-item>
      </el-form>

      <div><span>解构对象{...case1}:</span>{{case1Data1()}}</div>
      <div><span>解构列表[7,8,9, ...this.case1List]:</span>{{case1Data2()}}</div>
    </YanShiComponent>

    <YanShiComponent title="3、Map 与 Set">
      <ul>
        <li>Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。</li>
        <li>Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</li>
      </ul>
      <el-form class="esm-form" ref="case2" :model="case1" label-width="1.10rem">
        <el-form-item label="case2.key:">
          <el-input v-model="case2.key" size="small"></el-input>
        </el-form-item>
        <el-form-item label="case2.value:">
          <el-input v-model="case2.value" size="small"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <button @click="case2fun1" >value添加进入set</button> 
        <button @click="case2fun2" >key+value添加进入map</button>
      </div>
      <div><span>set内容：</span><span>{{case2SetStr}}</span></div>
      <div><span>map内容：</span><span>{{case2MapStr}}</span></div>
    </YanShiComponent>

    <YanShiComponent title="4、Symbol">
      <ul>
        <li>ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。</li>
      </ul>
      <div>symbolFun 执行返回结果： {{symbolFun()}}</div>
    </YanShiComponent>
  </div>
</template>

<script>
import YanShiComponent from '../../components/YanShiComponent'

export default {
  name: 'es',
  data() {
    return {
      case1:{
        foo:'',
        bar:''
      },
      case1List:[2,3,4,5,6],

      case2:{
        key:'key1',
        value:'value1'
      },
      mySet:new Set(),
      myMap:new Map(),
      case2SetStr:'',
      case2MapStr:'',
    };
  },
  components:{
    YanShiComponent
  },
  methods:{
    // 解构方法 1
    case1Data1(){
      return {...this.case1}
    },
    // 解构方法 2
    case1Data2(){
      return [7,8,9, ...this.case1List]
    },
    // set 方法
    case2fun1(){
      this.mySet.add(this.case2.value);
      this.case2SetStr = JSON.stringify(this.mySet);
    },
    // map 方法
    case2fun2(){
      this.myMap.set(this.case2.key,this.case2.value);
      this.case2MapStr = JSON.stringify(this.myMap);
    },
    symbolFun(){
      let str1 = 'ta'
      let str2 = 'ta'
      return str1 === str2

      // let symb1 = Symbol('ta')
      // let symb2 = Symbol('ta')
      // return symb1 === symb2

      // let symb3 = Symbol.for('ta')
      // let symb4 = Symbol.for('ta')

      // return symb3 === symb4
    },
    
  }
}
</script>

<style scope lang="scss">
  .es-main-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>

<style lang="scss">
  .es-main-container{
    .esm-form{
      width: 3rem;
    }
  }
  
</style>
