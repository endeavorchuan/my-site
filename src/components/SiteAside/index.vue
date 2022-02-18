<template>
    <div class="site-aside-container">
        <Avatar  url="http://mdrs.yuanjin.tech/img/20201031141350.jpg" />
        <h1 class="title">川川的小窝</h1>
        <Menu />
        <Content />
        <p class="footer">备案号ICP备56776号</p>
    </div>
</template>

<script>
    import Avatar from "@/components/Avatar"
    import Menu from "./Menu"
    import Content from "./Contact"
    export default {
        components: {
            Avatar,
            Menu,
            Content
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    .site-aside-container {
        width: 100%;
        height: 100%;
        background: @dark;
        padding: 20px 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .avatar-container {
        margin: 0 auto;
    }
    .footer {
        text-align: center;
        font-size: 12px;
    }
    .title {
        font-size: 1.2em;
        color: #959da5;
        text-align: center;
    }
</style>