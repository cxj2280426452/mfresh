<template>
  <div>
    <!-- contact.html -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a @click="index">首页</a>&gt;
          <a href>关于我们</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="contect">
        <!-- <h2></h2> -->
        <h3>
          全国服务电话：4xxx-xxx-xxx(电商经销) 4xx8-5xx-xxx(线下代理) 周一至周日9:00-18:00(仅收市话费)
          <br />金牌售后客服：1xxxxxxxx000
        </h3>
        <h4>xxxxx科技有限公司</h4>
        <p>
          地 址：xx市xx区xxxx路xx号xxxxC座1xx2
          <br />邮 箱：xxxxx@xx.com
          <br />电 话：86-xx-574xxxxx
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods:{
    index(){
      this.$router.push("/index")
    }
  }
};
</script>

<style>
</style>