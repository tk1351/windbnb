<template>
  <footer class="footer">
    <wind-app-description />
  </footer>
</template>

<style scoped>
.footer {
  background-color: darkgray;
  height: calc(100vh - 95vh);
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import WindAppDescription from "../atoms/WindAppDescription";
export default {
  components: {WindAppDescription}
}
</script>