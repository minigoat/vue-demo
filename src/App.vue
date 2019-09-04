<template>
  <div id="app">
    <!-- <AppHeading></AppHeading> -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeading from 'comp/base/AppHeading';

export default {
  watch: {
    $route(to) {
      this.setTitle(to.meta.title);
    },
  },
  methods: {
    setTitle(title) {
      document.title = title;
    },
  },
  components: { AppHeading },
};
</script>
