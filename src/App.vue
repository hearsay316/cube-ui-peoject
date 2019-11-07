<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/course">我的课程</router-link>
      <router-link to="/profile">个人中心</router-link>
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
      >
      </cube-tab-bar>
    </div>
    <router-view />
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
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
