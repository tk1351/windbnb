<template>
  <div class="property-contents-wrapper">
    <wind-result />
    <ul class="card-list">
      <wind-property-card />
      <wind-property-card />
      <wind-property-card />
      <wind-property-card />
      <wind-property-card />
      <wind-property-card />
    </ul>
  </div>
</template>

<script>
import WindResult from "../molecules/WindResult";
import WindPropertyCard from "../molecules/WindPropertyCard";
export default {
  components: {WindPropertyCard, WindResult}
}
</script>

<style scoped>
.property-contents-wrapper {
  min-height: calc(100vh - 15vh);
  width: auto;
  background-color: bisque;
  padding: 50px 100px;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: space-between;
}
</style>
