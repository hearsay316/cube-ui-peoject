<template>
  <div>
    <div class="HomeHead">
      <img class="HomeHead-img" src="@/assets/images/logo.png" alt="图片" />
      <span class="cubeic-select" @click="HomeHeadShow"></span>
    </div>
    <cube-drawer
      ref="drawer"
      title="请选择"
      :data="data"
      @select="selectHandler"
      @click="selectHandler"
    ></cube-drawer>
  </div>
</template>

<script>
export default {
  name: "HomeHead",
  props: {
    categories: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    data() {
      return [this.categories];
    }
  },
  methods: {
    selectHandler(value) {
      console.log(value);
      this.$emit("change", value);
    },
    HomeHeadShow() {
      this.$refs.drawer.show();
    }
  }
};
</script>

<style scoped>
.HomeHead {
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #2a2a2a;
}
.HomeHead-img {
  width: 150px;
}
.cubeic-select {
  color: #ffffff;
}
</style>
