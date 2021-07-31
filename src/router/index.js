import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
//懒加载方式导入子组件
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Shopcart = () => import("views/shopcart/Shopcart");
const Profile = () => import("views/profile/Profile");

const Detail = () => import("views/detail/Detail");

const routes =  [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
];

// 解决点击路由报错的BUG(push)
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err)
// };

export default new Router({
  routes,
  mode: 'history'
})
