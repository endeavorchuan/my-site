<template>
    <div>
        <h1>Icon组件</h1>
        <Icon type="arrowDown" />
        <Icon type="github" />
    </div>
</template>

<script>
    import Icon from "./index"
    export default {
        components: {
            Icon
        }
    };
</script>

<style scoped>
    .iconfont {
        font-size: 26px;
        color: red;
    }
</style>