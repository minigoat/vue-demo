<template>
  <el-row>
    <el-row class="content-box">Hello World!</el-row>
  </el-row>
</template>
<script>
import data from '../../../mock/edition';

export default {
  name: 'index',
  data() {
    return {
      index: 1,
      testData:[],
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
// info 引入全局less变量
@import '~static/css/var';

.container {
  border: 1px solid #999;
  width: 200px;
  height: 200px;
  .scroll-wrap {
    height: 200px;
  }
  .item {
    height: 40px;
    margin: 5px;
    border: 1px solid red;
  }
}
</style>

<style scoped>
.content-box {
  text-align: center;
  font-size: 80px;
}
</style>