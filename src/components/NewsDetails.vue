<template>
  <div>
    <!-- news_details.html 12~37行 -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a @click="index">首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news_details" v-if="data">
        <h2>{{data.title}}</h2>
        <span>发布时间：{{data.pubTime|date}}</span>
        <div class="news_content" v-html="data.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetails",
  data() {
    return {
      data: null
    };
  },
  methods:{
    index(){
      this.$router.push("/index")
    }
  },
  mounted() {
    console.log(this.$route.params);
    // 读取nid, 然后发送请求获取详情信息, 做显示
    // 图片会不显示, 明天说
    let nid = this.$route.params.nid;

    // 请求地址, get请求
    // news_detail.php?nid=1
    this.axios
      .get("news_detail.php?nid=" + nid)
      .then(res => {
        console.log(res);
        this.data = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style></style>
