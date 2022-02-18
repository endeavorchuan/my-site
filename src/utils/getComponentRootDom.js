/**
 * @name: getComponentRootDom
 * @author: chuanchuan
 * @date: 2022-02-06 23:34
 * @description：getComponentRootDom
 * @update: 2022-02-06 23:34
 */

import Vue from 'vue';

/**
 获取某个组件渲染的Dom根元素
 */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, {props})
    });
    vm.$mount();
    return vm.$el;
}