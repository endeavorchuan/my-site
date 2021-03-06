/**
 * @name: eventBus
 * @author: chuanchuan
 * @date: 2022-02-21 17:56
 * @description：eventBus
 * @update: 2022-02-21 17:56
 */

// const listeners = {};
//
// // 事件总线
// export default {
//   // 监听某一个事件，事件名字，对应的处理函数
//   $on(eventName, handler) {
//     if(!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//
//   // 取消监听
//   $off(eventName, handler) {
//     if(!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//
//   // 触发事件
//   $emit(eventName, ...args) {
//     if(!listeners[eventName]) {
//       return;
//     }
//     for(const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   }
// }

// vue 实例中本身就提供了事件总线功能

import Vue from "vue";

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 *    - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 *    - 滚动高度
 */

const app = new Vue({});

Vue.prototype.$bus = app;

// 导出事件总线，让其他js模块也能够使用
export default app;
