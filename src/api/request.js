/**
 * @name: request
 * @author: chuanchuan
 * @date: 2022-02-07 13:32
 * @description：request
 * @update: 2022-02-07 13:32
 */

import axios from 'axios';
import showMessage from "@/utils/showMessage";

// 创建一个axios的实例
// 为这个实例添加一个拦截器，拦截器传入一个函数
// 凡是用实例得到的响应，先运行这个结果，将函数的运行结果返回
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if(resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500
        });
        return null;
    }
    return resp.data.data;
});

export default ins;