/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-02-07 12:52
 * @description：index
 * @update: 2022-02-07 12:52
 */

// 若测试服务器开发完成，可将导入语句注释，Mock不会再拦截，直接请求服务器数据
import "./banner";
import "./blog";
import Mock from "mockjs";

// 模拟网络延迟1000~2000ms
Mock.setup({
    timeout: "1000-2000"
});