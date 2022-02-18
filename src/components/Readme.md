# Avatar（头像组件）

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fdff0d2ab3f51d91475301.jpg">
</div>

## 属性

| 属性名 | 含义             | 类型   | 必填 | 默认值 |
| ------ | ---------------- | ------ | ---- | ------ |
| url    | 头像图片路径     | String | 是   | 无     |
| size   | 头像尺寸、宽高等 | Number | 否   | 150    |

# Icon（图标组件）

使用的图标源自于「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 图标类型 | String | 是   | 无     |

有效的图标类型：

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fe0ee52ab3f51d9155c00b.png">
</div>

# pager（页码组件）

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fe0f402ab3f51d91561488.jpg">
</div>

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |

# Empty（无内容提示）

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fe1d8e2ab3f51d91639172.jpg">
</div>

该组件需要在外层容器中横向垂直居中

## 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |

# ImageLoader（渐进式图片）

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                 | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

## 示例

~~~html
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
~~~

# SiteAside（网站侧边栏-综合）

<img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;" />

宽度和高度撑满外层容器

## Contact（联系方式）

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fe4c662ab3f51d918f7da1.jpg">
</div>

该组件需要横向撑满容器，背景色透明

> 1. 如何实现点击弹出 QQ 对话
>
>    设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何设置点击弹出发送邮件
>
>    设置超链接为：mailto:邮件地址

## Menu（侧边分类栏）

<div align="center">
    <img src="https://pic.imgdb.cn/item/61fe859a2ab3f51d91c55d84.jpg">
</div>

该组件需要横向撑满容器，背景色透明

每个菜单的信息如下：

> **首页**
>
> - 链接地址：/
> - 选中条件：路径等于 / 
>
> **文章**
>
> - 链接地址：/blog
> - 选中条件：路径以 /blog 开头
>
> **关于我**
>
> - 链接地址：/about
> - 选中条件：路径等于 /about
>
> **项目&效果**
>
> - 链接地址：/project
> - 选中条件：路径等于 /project
>
> **留言板**
>
> - 链接地址：/message
> - 选中条件：路径等于 /message

# Layout

示例：

~~~html
<Layout>
	<template #left>
        <div>
          左边栏区域，宽度适应内容，溢出隐藏
        </div>
  	</template>
    <div>
        主区域，宽度占满剩余空间，溢出隐藏
    </div>
  	<template #right>
  		<div>
      		右边栏区域，宽度适应内容，溢出隐藏
    	</div>
  	</template>
</Layout>
~~~

<div align="center">
    <img src="http://mdrs.yuanjin.tech/img/20201202154014.png">
</div>

## 插槽

| 插槽名  | 含义       |
| ------- | ---------- |
| default | 中间主区域 |
| left    | 左边栏     |
| right   | 右边栏     |

# MessageArea（消息区域）

可用于「评论区」和「留言板」

<div align="center">
    <img src="http://mdrs.yuanjin.tech/img/20210118140742.png">
</div>

## 属性

| 属性名        | 含义               | 类型    | 必填 | 默认值 |
| ------------- | ------------------ | ------- | ---- | ------ |
| title         | 列表标题           | String  | 否   | " "    |
| subTitle      | 列表副标题         | String  | 否   | " "    |
| list          | 列表数据           | Array   | 否   | [ ]    |
| isListLoading | 列表是否正在加载中 | Boolean | 否   | false  |

## 事件

| 事件名 | 含义               | 事件参数 | 参数类型 |
| ------ | ------------------ | -------- | -------- |
| submit | 用户点击提交时触发 | 数据对象 | Object   |

submit 的时间参数格式为：

~~~js
{
  nickname:"昵称",
  content:"内容"
}
~~~

