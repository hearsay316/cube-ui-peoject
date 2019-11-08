<template>
  <div class="home">
    <!--suppress JSUnresolvedVariable -->
    <HomeHead :categories="categories" @change="homeChange"></HomeHead>
    {{ categories }}
  </div>
</template>

<script>
import * as type from "../../utils/actions-type";

import HomeHead from "./HomeHead";
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState } = createNamespacedHelpers("home");
export default {
  name: "home",
  components: { HomeHead },
  computed: {
    ...mapState(["categories"])
  },
  methods: {
    ...mapActions([type.SET_CATEGORIES]),
    homeChange(value) {
      console.log(value);
    }
  },
  mounted() {
    // this.$store.dispatch("home/");
    this[type.SET_CATEGORIES]();
  }
};
</script>

<style lang="stylus" scoped>
.home
  background-color red
  width 100%
  height:100%
</style>
