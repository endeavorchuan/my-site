/**
 * @name: setting
 * @author: chuanchuan
 * @date: 2022-03-01 13:58
 * @description：setting
 * @update: 2022-03-01 13:58
 */

import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://pic.imgdb.cn/item/621dd7062ab3f51d9142be6b.jpg",
    siteTitle: "川川的个人空间",
    github: "https://github.com/endeavorchuan",
    qq: "773589599",
    qqQrCode:
      "https://pic.imgdb.cn/item/621dd6262ab3f51d914114a6.jpg",
    weixin: "chc18845632858",
    weixinQrCode:
      "https://pic.imgdb.cn/item/61fe7c5b2ab3f51d91bb6c1b.jpg",
    mail: "chc82347794@163.com",
    icp: "黑ICP备17001719号",
    githubName: "endeavorchuan",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
