<template>
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
</template>

<script>
export default {
  name: "AuthorBoardCard",
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

<style scoped>
/*推荐区图片滚动区最外层容器*/
.divScroll{
  width: 680px;
  height: 200px;
  display: flex;
  flex-flow: row;
}
/*推荐区图片滚动区列容器*/
.divScroll-col{
  margin-right: 20px;
}
/*推荐区图片滚动区图片项*/
.divScroll-col-image{
  border-radius: 8px;
  width: 350px;
  height: 100%;
}
</style>
