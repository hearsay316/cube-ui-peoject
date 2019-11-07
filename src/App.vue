<template>
  <div id="app">
    <div class="app-nav">
      <router-view />
    </div>
    <div class="app-footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
      >
      </cube-tab-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
          label: "首页",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "我的课程",
          value: "/course",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "cubeic-vip"
        }
      ]
    };
  },
  /**
   * 监控路由属性的变化
   * immediate 首次是否加载
   * */
  watch: {
    $route: {
      handler(to, from) {
        console.log(to, from);
        this.selectedLabelDefault = to.path;
      },
      immediate: true
    }
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label);
      this.$router.push(label);
    }
  }
};
</script>
<style lang="stylus">
html, body,#app {
     width: 100%
     height: 100%
 }
#app
    width: 100%
    height: 100%
    display flex
    flex-direction column
.app-nav
    flex 1
    overflow-y scroll
.app-footer
    box-sizing border-box
    background-color #eee
    border-top 1px solid #000000
</style>
