<template>
  <div>
    <h1>APP组件</h1>
    <Pager
        :total="total"
        :current="current"
        @pageChange="handlePageChange($event)"
    />
  </div>
</template>


<script>
import Pager from "./index"
export default {
  components: {
    Pager
  },
  data() {
    return {
      current: 1,
      total: 402
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据");
    }
  }
};
</script>


<style scoped>

</style>