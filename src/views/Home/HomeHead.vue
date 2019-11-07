<template>
  <div class="HomeHead">
    <img class="HomeHead-img" src="@/assets/images/logo.png" alt="图片" />
    <span class="cubeic-select"></span>
  </div>
</template>

<script>
export default {
  name: "HomeHead"
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
