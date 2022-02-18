<template>
  <RightList :list="list" @select="handleSelect"/>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
export default {
  components: {
    RightList
  },

  data() {
    return {
      list: [
        {name:"a", isSelect: false},
        {name:"b", isSelect: false},
        {name:"c", isSelect: false, children: [
            {name:"c-1", isSelect: false},
            {name:"c-2", isSelect: false, children: [
                {name:"c-2-1", isSelect: false},
                {name:"c-2-2", isSelect: true},
                {name:"c-2-3", isSelect: false},
              ]},
            {name:"c-3", isSelect: false},
            {name:"c-4", isSelect: false},
          ]},
        {name:"d", isSelect: false},
      ]
    }
  },

  methods: {
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>

<style scoped>

</style>