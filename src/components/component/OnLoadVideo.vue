<template>

  <div class="divScroll">
<!--    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">-->
<!--      <li v-for="i in InfiniteCount" class="infinite-list-item">-->
<!--        {{ i }}-->
<!--      </li>-->
<!--    </ul>-->

<!--    <ul class="divScroll-col" v-infinite-scroll="load">-->
<!--&lt;!&ndash;      触发一次请求  返回4条数据  请求状态为true&ndash;&gt;-->
<!--      <li v-for="o in imgData" class="infinite-list-item">-->
<!--        &lt;!&ndash;          观看视频页面 传入视频code 用来作为请求参数&ndash;&gt;-->
<!--        <router-link :to="`/Look/${ o.code }`">-->
<!--          <el-image class="divScroll-col-image" :src="o.src">-->
<!--            <div slot="error" class="image-slot">-->
<!--              <i class="el-icon-picture-outline"></i>-->
<!--            </div>-->
<!--          </el-image>-->
<!--        </router-link>-->
<!--      </li>-->
<!--    </ul>-->

    <div class="OnLoad-DivScroll" v-infinite-scroll="load">
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

<!--    <div v-for="o in imgData" :key="o.code" class="divScroll-col">-->
<!--      &lt;!&ndash;          观看视频页面 传入视频code 用来作为请求参数&ndash;&gt;-->
<!--      <router-link :to="`/Look/${ o.code }`">-->
<!--        <el-image class="divScroll-col-image" :src="o.src">-->
<!--          <div slot="error" class="image-slot">-->
<!--            <i class="el-icon-picture-outline"></i>-->
<!--          </div>-->
<!--        </el-image>-->
<!--      </router-link>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "OnLoadVideo",
  data(){
    return {
      requestStatus : false,
      InfiniteCount: 0,
      load () {
        if(!this.requestStatus){
          // console.log("滑到底了，可以请求，再次请求");
        }
        console.log("滑到底了，上次请求没结束，不可以请求");
        // this.count += 2
      },
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
          code : '200207230007',
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
.OnLoad-DivScroll{
  display: flex;
  flex-flow: row;
  flex-wrap:wrap;
  padding-left: 55px;
}
/*OnLoad图片滚动区最外层容器*/
.divScroll{
  width: 100%;
  /*height: 200px;*/
}
/*OnLoad图片滚动区列容器*/
.divScroll-col{
  margin-right: 20px;
  margin-top: 30px;
}
/*OnLoad图片滚动区图片项*/
.divScroll-col-image{
  border-radius: 8px;
  width: 350px;
  height: 100%;
}
</style>
