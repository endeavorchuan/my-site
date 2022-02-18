/**
 * @name: fetchData
 * @author: chuanchuan
 * @date: 2022-02-14 11:53
 * @description：fetchData
 * @update: 2022-02-14 11:53
 */

// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData

export default function(defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,        // 是否正在获取过程中
                data: defaultDataValue      // 远程数据，初始默认值为null
            }
        },

        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}