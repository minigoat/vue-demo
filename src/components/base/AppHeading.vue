<template>
    <el-row id="header">
        <el-col :span="24">
            <nav>
                <span id="logo">
                    <img src="../../static/img/logo.png"/>
                    <span>前端测试项目</span>
                </span>
                <el-menu class="fr" :default-active="activeIndex" mode="horizontal" :router="true">
                    <!-- <el-menu-item index="edition-index">首页</el-menu-item> -->
                    <el-submenu index="username">
                      <template slot="title">admin</template>
                      <el-menu-item index="sign-out">登出</el-menu-item>
                    </el-submenu>
                </el-menu>
            </nav>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: "AppHeading",
  data() {
    return {
      // activeIndex: 'edition-index',
      activeIndex: 'sign-out',
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
#header {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 20px;
}
#header {
  background-color: #fff;
  height: 70px;
  padding: 0px 60px;
  position: relative;
  z-index: 100;
}
#logo {
  padding-top: 10px;
  display: inline-block;
  font-size: 2em;
  line-height: 50px;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
#logo img {
  vertical-align: middle;
  margin-right: 6px;
  width: 50px;
  height: 50px;
}
.el-menu--horizontal {
  border-bottom: 0px;
}
</style>

