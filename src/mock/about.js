/**
 * @name: about
 * @author: chuanchuan
 * @date: 2022-03-01 17:52
 * @description：about
 * @update: 2022-03-01 17:52
 */

import Mock from "mockjs";

Mock.mock("api/about", "get", {
  code: 0,
  msg: "",
  data: "https://www.strml.net/"
})