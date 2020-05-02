import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from "./components/About.vue"
import Index from "./components/Index.vue"
import News from "./components/News.vue"
import NewsDetails from "./components/NewsDetails.vue"
import Register from "./components/Register.vue"
import Login from "./components/Login.vue"
import Product from "./components/Product.vue"
import ProductDetails from "./components/ProductDetails.vue"
import Cart from "./components/Cart.vue"
import Contact from "./components/Contact.vue"

const routes=[
  {path:"/",component:Index},
  {path:"/index",component:Index},
  {path:"/about",component:About},
  {path:"/news",component:News},
  {path:"/newsdetails/:nid",component:NewsDetails,name:"nd"},
  {path:"/register",component:Register},
  {path:"/login",component:Login},
  {path:"/product/:type",component:Product},
  {path:"/productdetails/:pid",component:ProductDetails},
  {path:"/cart",component:Cart},
  {path:"/contact",component:Contact}
];

//利用对应关系数组 做出路由对象
export default new VueRouter({
  mode:"history",
  routes
})