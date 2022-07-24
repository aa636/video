<template>
  <div class="div">
<!--    <el-container>-->
<!--&lt;!&ndash;      <el-header>Header</el-header>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-main>Main</el-main>&ndash;&gt;-->
<!--    </el-container>-->
    <div class="header">
      <router-link to="/Main">
        <el-image :src="logoImage" class="logoImage">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </router-link>
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               background-color="#F2B6C1"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="2">
          <i class="el-icon-key"></i>
          会员
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-bell"></i>
          消息
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-star-off"></i>
          收藏
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-pie-chart"></i>
          历史
        </el-menu-item>
        <el-submenu index="6">
          <template slot="title">
            <el-avatar :src="userImage"></el-avatar>
          </template>
<!--          <el-menu-item index="5-1">忘记密码</el-menu-item>-->
<!--          <el-menu-item index="5-2">修改密码</el-menu-item>-->
          <el-menu-item index="6-2">个人中心</el-menu-item>
          <el-menu-item index="6-3" @click="">退出登陆</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="wif">
      <el-image :src="mainImage" class="mainImage" fit="fill">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <div class="inner">
        &nbsp;
      </div>


    </div>

    <div class="routerView">
      <el-row class="el-row clearMargin" :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <LeaderboardCard/>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <PainterCard/>
          </div>
        </el-col>
      </el-row>
      <div class="mainLoad">
<!--        <OnLoadVideo/>-->
      </div>
    </div>
  </div>
</template>

<script>
import LeaderboardCard from './LeaderboardCard'
import PainterCard from './PainterCard'
import OnLoadVideo from './OnLoadVideo'

export default {
  name: "Main",
  data (){
    return {
      count: 30,
      //用户头像
      userImage : '../../../static/img/img1.png',
      //页面logo
      logoImage : '../../../static/img/logo.svg',
      //主页大图片
      mainImage : '../../../static/img/main5.jpg',
      //用户名称 暂时不用
      userName : '',
      //用户头像下拉内容index1
      activeIndex: '1'
    }
  },
  methods : {
    load () {
      // this.count += 2
      console.log("触发事件");
    },
    //用户头像下拉内容方法
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components : {
    LeaderboardCard,
    PainterCard,
    OnLoadVideo
  }
}
</script>

<style scoped>
.div{
  height: 800px;
  /*background-color: gray;*/

}
/*header样式*/
/*li:hover {background-color: white}*/


.header{
  /*border-bottom: 1px solid #e6e6e6;*/
  /*background-color: transparent;*/
  position: fixed;
  display: flex;
  justify-content:space-between;
  z-index: 1;
  width: 100%;
}
.el-menu-demo{
  position: relative;
  text-align: center;
  /*border-radius: 60px;*/
  margin-right: 20px;
  margin-top: 20px;
}

.logoImage{
  position: relative;
  width: 140px;
  height: 60px;
  float: left;
}

.wif{
  height: 100%;
}
.mainImage{
  height: 100%;
  border-radius: 1px;
  opacity: 0.8;
}
.inner{
  height: 800px;
}
.routerView{
  position: relative;
  top: -30px;
  margin: auto;
  width: 1200px;
  height: 600px;
  padding-left: 20px;
}
.el-row{
  width: 100%;
}
/*主页面下 持续加载区*/
.mainLoad{
  width: 100%;
}
.test1{
  height: 200px;
}
</style>
