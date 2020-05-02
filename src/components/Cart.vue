<template>
  <div>
    <!-- cart.html 12~69 -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a @click="index">首页</a>&gt;
          <a >购物车</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="cart" v-if="data">
        <div class="cart_con">
          <div class="cartcon_title">
            <span>
              <input type="checkbox" v-model="isAgree" /> 全选
            </span>
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
          <ul>
            <h2 v-if="data.products.length==0">购物车中没有任何商品！</h2>
            <li v-for="(item, index) in data.products" :key="index">
              <input type="checkbox" class="cart_checkbox" :checked="isAgree" />
              <a href class="cart_img">
                <img :src="require(`../assets/${item.pic}`)" alt />
              </a>
              <a href class="cart_title">{{item.title1}}</a>
              <i>¥{{item.price}}</i>
              <div>
                <span>-</span>
                {{item.count}}
                <span>+</span>
              </div>
              <strong>¥{{ item.count * item.price }}</strong>
              <em></em>
            </li>
          </ul>
        </div>
        <div class="cart_header">
          <span>
            已选商品
            <em>{{data.products.length}}</em>件
          </span>
          <span>
            总金额：
            <strong>￥00.00</strong>
          </span>
          <button type="button">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      data: null,
      isAgree:false
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    index(){
      this.$router.push("/index")
    },
    getCart() {
      this.axios
        .post("cart_detail_select.php", "uid=" + sessionStorage.getItem("uid"))
        .then(res => {
          console.log(res);
          this.data = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>