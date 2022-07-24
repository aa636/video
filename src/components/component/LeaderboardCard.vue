<template>
  <div>
    <el-card class="card" shadow="always">
      <div>
        <span class="span">
          待定模块
        </span>
      </div>
      <div class="divScroll">
        <div v-for="o in imgData" :key="o.code" class="divScroll-col">
<!--          观看视频页面 传入视频code 用来作为请求参数-->
          <router-link :to="`/Look/${ o.code }`">
            <el-image class="divScroll-col-image" :src="o.src">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return {
      imgData : [
        {
          code : '200207230001',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        },
        {
          code : '200207230002',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        },
        {
          code : '200207230003',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        },
        {
          code : '200207230004',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        },
        {
          code : '200207230005',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        },
        {
          code : '200207230006',
          name : 'aaa',
          src : '../../../static/img/main3.jpg',
          title : '哈哈'
        }
      ]
    }

  }
}
</script>
.card{

}
<style scoped>
.span{
  font-family: 'BIZ UDMincho Medium',system-ui;
}
/*排行榜图片滚动区最外层容器*/
.divScroll{
  width: 680px;
  height: 200px;
  display: flex;
  flex-flow: row;
  overflow: auto;
}
/*排行榜图片滚动区列容器*/
.divScroll-col{
  margin-right: 20px;
}
/*排行榜图片滚动区图片项*/
.divScroll-col-image{
  border-radius: 8px;
  width: 350px;
  height: 100%;
}
</style>
