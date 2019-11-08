<template>
  <div class="home">
    <HomeHead></HomeHead>
  </div>
</template>

<script>
import HomeHead from "./HomeHead";
import { fetchCategory } from "@/api/home.js";
export default {
  name: "home",
  components: { HomeHead },
  mounted() {
    fetchCategory().then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style lang="stylus" scoped>
.home
  background-color red
  width 100%
  height:100%
</style>
