/**
 * @name: loading.js
 * @author: chuanchuan
 * @date: 2022-02-14 10:02
 * @description：loading.js
 * @update: 2022-02-14 10:02
 */

// 导出指令的配置对象

// export default {
    // bind(el, binding) {
    //     // 根据binding.value的值，决定创建或删除img元素
    // },
    //
    // update(el, binding) {
    //     // 根据binding.value的值，决定创建或删除img元素
    // }
// }

import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"

// 得到el中，loading效果的img元素
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
    const img = document.createElement("img");
    // 添加一个自定义属性，可以通过这个自定义属性，判断div中有没有loading效果的img元素
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, binding) {
    // 根据binding.value的值，决定创建或删除img元素
    const curImg = getLoadingImage(el);
    if(binding.value) {
        // 创建img元素
        if(!curImg) {    // 判断是否有img元素
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        // 删除img元素
        if(curImg) {
            curImg.remove();
        }
    }
};