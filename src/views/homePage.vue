<template>
  <el-row class="home-main-container">
      <el-col :span="24" >
        <el-header style="height:.6rem">
          <el-row>
            <el-col :span="3">
              <div>登录用户：{{getUser.userName}}</div>
            </el-col>
            <el-col :span="18">
              
            </el-col>
            <el-col :span="3">
              <div>
                <el-date-picker size="small"
                  v-model="dateItem"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-container class="home-main-container-ct">
          <el-aside width="2rem">
            <el-menu :default-active="$route.path" 
              unique-opened router v-show="!collapsed">
              <template v-for="(item,index) in $router.options.routes" >
                <el-submenu :index="index+''" v-if="item.children && !item.oneLeafFlag">
                  <template slot="title">{{item.name}}</template>
                  <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" >{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.oneLeafFlag" :index="item.children[0].path">{{item.name}}</el-menu-item>
              </template>
            </el-menu>
          </el-aside>
          <el-main>
            <transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
</template>

<script>
import { mapGetters} from 'vuex';
import maTypes from '../vuex/maTypes';

export default {
  name: 'homePage',
  data () {
    return {
      msg: '首页',
      collapsed :false,

      testDate: '2020-07-10'
    }
  },
  computed:{
    // 怎么从vuex中的state取值
    ...mapGetters([
      'getUser'
    ]),
    // 怎么修改vuex中的state缓存
    dateItem:{
      get(){
        return this.$store.state.shareItem.dateItem;
      },
      set(v){
        this.$store.commit(maTypes.MUTATION_DATEITEM_ADD, v);
      }
    }
  }
}
</script>

<style scope lang="scss">
  .home-main-container{
    height: 100%;
    
    .home-main-container-ct{
      height: calc(100% - .61rem);
      width: 100%;
      overflow: hidden;
    }
  }
</style>

<style lang="scss">
  .home-main-container{
    .el-header{
      padding: 0 .2px;
      border-bottom: .01rem solid #888888;
    }
    .el-col{
      height: 100%;
    }
    .el-aside{
      border-right: .01rem solid #888888;
      overflow: hidden;
    }
    .el-main{
      padding: 0;
    }
  }
</style>