<template>
  <div class="result-wrapper">
    <wind-result-text />
    <wind-properties-result-number />
  </div>
</template>

<script>
import WindResultText from "../atoms/WindResultText";
import WindPropertiesResultNumber from "../atoms/WindPropertiesResultNumber";
export default {
  components: {WindPropertiesResultNumber, WindResultText}
}
</script>

<style scoped>
.result-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>