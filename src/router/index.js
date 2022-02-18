/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-02-06 16:12
 * @description：index
 * @update: 2022-02-06 16:12
 */

import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";

// 使用一个vue插件
Vue.use(VueRouter);


const router = new VueRouter({
    // 配置
    routes,  // 路由匹配规则
    mode: "history"   // 改变模式
});

export default router;