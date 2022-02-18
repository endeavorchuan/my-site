<!--
 * @Author: 初浩诚
 * @Date: 2022-02-07 16:29:49
 * @LastEditTime: 2022-02-09 22:21:14
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /my-site/src/views/Home/index1.vue
 * 版权声明
-->
<template>
    <div ref="container">
        <ul></ul>
        <h1 ref="title">{{count}}</h1>
        <button @click="count++">count + 1</button>
    </div>
</template>

<script>
    import {getBanners} from "@/api/banner";

    export default {
        data() {
            return {
                banners: [],
                count: 0
            };
        },
        beforeCreate() {
            console.log("beforeCreate", this.banners);
        },

        created() {
            console.log("created", this.banners);
        },

        beforeMount() {
            console.log("beforeMount", this.$refs.container);
        },

        mounted() {
            console.log("mounted", this.$refs.container);
        },

        beforeUpdate() {
            console.log("beforeUpdate", this.$refs.title.innerText, this.count);    // 数据已经更新，界面还是之前的界面
        },

        updated() {
            console.log("update", this.$refs.title.innerText, this.count);    // 数据已经更新，界面还是之前的界面
        },

        beforeDestroy() {
            console.log("beforeDestroy");
        },

        destroyed() {
            console.log("destroyed");
        }
    }
</script>
