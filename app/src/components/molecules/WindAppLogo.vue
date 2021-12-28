<template>
  <a href="#" class="app-link">
    <wind-app-icon />
    <wind-app-name />
  </a>
</template>

<script>
import WindAppIcon from "../atoms/WindAppIcon";
import WindAppName from "../atoms/WindAppName";
export default {
  components: {WindAppName, WindAppIcon}
}
</script>

<style scoped>
.app-link {
  text-decoration: none;
  display: flex;
}
</style>