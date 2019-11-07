<template>
  <div class="home">
    <HomeHead></HomeHead>
  </div>
</template>

<script>
import HomeHead from "./HomeHead";

export default {
  name: "home",
  components: { HomeHead }
};
</script>

<style lang="stylus" scoped>
.home
  background-color red
  width 100%
  height:100%
</style>
