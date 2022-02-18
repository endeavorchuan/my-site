<template>
    <div>
        <h1>Avatar组件</h1>
        <Avatar
            url="https://pic.imgdb.cn/item/61fdff0d2ab3f51d91475301.jpg"
            :size="150"
        />
        <Avatar
            url="https://pic.imgdb.cn/item/60e9a6355132923bf88003ef.jpg"
            :size="50"
        />
    </div>
</template>

<script>
    import Avatar from "./index"
    export default {
        name:"App",
        components: {
            Avatar
        }
    };
</script>

<style scoped>

</style>