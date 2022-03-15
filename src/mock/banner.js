/**
 * @name: banner
 * @author: chuanchuan
 * @date: 2022-02-07 12:45
 * @description：banner
 * @update: 2022-02-07 12:45
 */

import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "我也不知道发生了什么错误",
    data: [
        {
            id: "1",
            midImg: "https://pic.imgdb.cn/item/621f42955baa1a80abe6c118.jpg",
            bigImg: "https://pic.imgdb.cn/item/621f42815baa1a80abe6aeef.jpg",
            title: "永远相信",
            description: "美好的事情即将发生",
        },
        {
            id: "2",
            midImg: "https://pic.imgdb.cn/item/621f42f05baa1a80abe70c6f.jpg",
            bigImg: "https://pic.imgdb.cn/item/621f42e35baa1a80abe7020b.jpg",
            title: "春花无数",
            description: "毕竟何如秋实",
        },
        {
            id: "3",
            midImg: "https://pic.imgdb.cn/item/621f43605baa1a80abe75fad.jpg",
            bigImg: "https://pic.imgdb.cn/item/621f43555baa1a80abe759ca.jpg",
            title: "凡是过往",
            description: "皆为序章",
        },
    ]
})
