<template>
  <div class="header">
    <wind-app-logo />
    <wind-search-button />
  </div>
</template>

<script>
import WindAppLogo from "../molecules/WindAppLogo";
import WindSearchButton from "../molecules/WindSearchButton";

export default {
  components: {WindSearchButton, WindAppLogo}
}
</script>

<style scoped>
.header {
  background-color: darkgray;
  height: calc(100vh - 90vh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}
</style>