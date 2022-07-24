<template>

  <el-container>
    <el-header class="header">
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
          收藏aaa
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-pie-chart"></i>
          历史
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <el-avatar :src="userImage"></el-avatar>
          </template>
          <!--          <el-menu-item index="5-1">忘记密码</el-menu-item>-->
          <!--          <el-menu-item index="5-2">修改密码</el-menu-item>-->
          <el-menu-item index="5-2">个人中心</el-menu-item>
          <el-menu-item index="5-3" @click="">退出登陆</el-menu-item>
        </el-submenu>
      </el-menu>

    </el-header>
    <el-main style="height:600px;padding-top: 50px">

      <el-row :gutter="20" style="width: 100%">
        <el-col :span="16">
          <div class="grid-content bg-purple wind1">
            <!--          video内容-->
            <d-player ref="player" class="player" @play="play" :options="options"></d-player>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple wind2">
            <!--          右侧视频信息-->
            <!--          标题-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="font-size: 35px;color: #303133;font-family: 'PingFang SC',serif;font-weight: bold">
                  {{name}}
                </div>
              </el-col>
            </el-row>
            <!--          小描述-->
            <!--          小描述-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="font-size: 15px;color:#909399 ">
                  {{title}}
                </div>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <!--          简介内容-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="font-size: 15px;color:#909399 ">
                  <el-collapse>
                    <el-collapse-item title="  简介  展开" name="1">
                      {{info}}
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </el-col>
            </el-row>
            <!--          所有标签-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="display: flex;flex-wrap:wrap;">
                  <!--                生成作品所有的标签-->
                  <el-tag style="border: 0;margin: 10px 10px 0 10px"
                          v-for="item in convertType"
                          :key="item.name"
                          :color="item.color"
                          :type="''"
                          effect="dark">
                    {{ item.name }}
                  </el-tag>
                </div>
              </el-col>
            </el-row>
            <el-divider></el-divider>
<!--            上传者内容扩展-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark" style="text-align: left;">
                  <el-tooltip class="item" effect="dark" :content="videoAuthor.name" placement="right">
                    <el-avatar :src="videoAuthor.authorImage" class="authorImage"></el-avatar>
                  </el-tooltip>
                  <div class="authorVideos">
                    <AuthorBoardCard/>
<!--                    <div style="width: 600px;height: 50px"></div>-->
                  </div>
                </div>
              </el-col>
            </el-row>

          </div>
        </el-col>
      </el-row>

      <div class="onLoad">
<!--        <OnLoadVideo/>-->
<!--        <OnloadComment/>-->
      </div>

    </el-main>
  </el-container>

</template>

<script>
import {request} from "../../api/axios";
import AuthorBoardCard from '../component/AuthorBoardCard'
import OnLoadVideo from '../component/OnLoadVideo'
import OnloadComment from '../component/OnloadComment'

export default {
  name: "Look",
  mounted() {
    console.log("即将进入观看页面");
    console.log("请发出作品类型的请求");
    console.log("请发出作品资源的请求");

    //  请求作品类型 进行标签转换
    this.getTag(this.type);
    // console.log(this.convertType);

  //  获取props中视频的code 发出请求
  //   this.getVideo(this.videoCode);

  },
  props : ['videoCode'],
  data(){
    return {
      code : '0001',
      name :'我的作品',//作品名称
      title : '一段恋爱故事',//标题
      playNum : 200,//播放量
      createDate : '2022',//上传时间
      info : '《杜鹃的婚约第一季》是由漫画《#不良仔与眼镜妹#》和《#山田君与七人魔女#》 的作者“吉河美希”创作的最新作 小时候被搞错了高中生海野凪终于和亲生父母见面了。 那一天，偶然遇到名门小姐学校的女高中生天野绘里香想阻止她和未婚妻结婚的请求半途强行扮演了男朋友角色。 …… 但是，这两个人是被搞错了的孩子，是未婚妻！ 两个孩子根据相爱的父母凪和绘里香成为两家公认的未婚妻关系，开始了同居生活。 风平浪静爱上同班同学濑川宏反对父亲的绘里香决定的是“不相互干涉”。 不一样的，乱闹的人生交错的爱情喜剧开始了！',
      type : ['恋爱dawawdawdaw','战斗dawdawaddwada','校园da','科幻awdadawd','励志a','治愈'],
      author : 'sg636',//视频的上传者
      //获取类型后根据对应的类型 获得对应的tag颜色
      convertType : [],
      //DPlayer参数设置
      options : {
        container: document.getElementById("player"), //播放器容器
        video: {
          url: '../../../static/vedio/a_1.mp4',
          pic: '../../../static/vedio/img/a_1.png',
        },
        contextmenu: [
          {
            text: "b站",
            link: "https://www.bilibili.com"
          },
          {
            text: "选项二",
            click: player => {
              console.log(player);
            }
          }
        ]
      },
      userImage : '../../../static/img/img1.png',
      logoImage : '../../../static/img/logo.svg',
      activeIndex: '1',
      userName : '',
      videoAuthor : {
        name : 'aa636',
        authorImage : '../../../static/img/author2.jpg'
      }

    }
  },
  methods : {
    //发出获取视频的请求
    getVideo(){
      request().then(result => {

      });
    },
    //发出类型请求
    getType(){
      request();
    },
    getTag(type){
      let str = "[";
      let arr = [];
      for(let n = 0 ; n < type.length ; n++){
        let obj = {name : '',color : ''};
        if(type[n] === '恋爱dawawdawdaw'){
          obj.name = type[n];
          obj.color = '#F56C6C';
          arr.unshift(obj);
        }
        if(type[n] === '战斗dawdawaddwada'){
          obj.name = type[n];
          obj.color = '#67C23A';
          arr.unshift(obj);
        }
        if(type[n] === '科幻awdadawd'){
          obj.name = type[n];
          obj.color = '#67C23A';
          arr.unshift(obj);
        }
        if(type[n] === '校园da'){
          obj.name = type[n];
          obj.color = '#F56C6C';
          arr.unshift(obj);
        }
        if(type[n] === '励志'){
          obj.name = type[n];
          obj.color = '#F56C6C';
          arr.unshift(obj);
        }
        if(type[n] === '治愈'){
          obj.name = type[n];
          obj.color = '#909399';
          arr.unshift(obj);
        }
      }
      // if(this.convertType.length === 0){
      //   arr.unshift({name : "无标签",color : '#909399'});
      // }
      this.convertType = arr;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    play() {
      console.log('play callback')
    }


  },
  components : {
    AuthorBoardCard,
    OnLoadVideo,
    OnloadComment
  }
}
</script>

<style scoped>


.header{
  /*border-bottom: 1px solid #e6e6e6;*/
  /*background-color: transparent;*/
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
.wind1{
  height: 400px;
}
.wind2{
  /*height: 400px;*/
  text-align: center;
}
.div{
  border: 1px solid black;
  padding: 30px;
}
.player{
  width: 100%;
  height: 100%;
}
.authorImage{
  width: 70px;
  height: 70px;
}
/*作者推荐区的样式*/
.authorVideos {
  /*border: 1px solid black;*/
  width: 100%;
  height: 220px;
  overflow: auto;
}
/*下方加载区*/
.onLoad{
  /*border: 1px solid red;*/
  width: 100%;
  /*height: 600px;*/
}
</style>
