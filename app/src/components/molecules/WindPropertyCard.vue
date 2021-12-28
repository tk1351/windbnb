<template>
  <li class="property-card-wrapper">
    <wind-property-image />
    <div class="property-card__detail">
      <wind-super-host />
      <wind-property-type />
      <div class="property-card__rate">
        <wind-property-rate-icon />
        <wind-property-rate />
      </div>
    </div>
    <wind-property-name />
  </li>
</template>

<script>
import WindPropertyImage from "../atoms/WindPropertyImage";
import WindSuperHost from "../atoms/WindSuperHost";
import WindPropertyType from "../atoms/WindPropertyType";
import WindPropertyRateIcon from "../atoms/WindPropertyRateIcon";
import WindPropertyRate from "../atoms/WindPropertyRate";
import WindPropertyName from "../atoms/WindPropertyName";
export default {
  components: {
    WindPropertyName,
    WindPropertyRate, WindPropertyRateIcon, WindPropertyType, WindSuperHost, WindPropertyImage}
}
</script>

<style scoped>
.property-card-wrapper {
  background-color: lavender;
  border-radius: 20px 20px 0 0;
  width: 380px;
  height: 330px;
  list-style: none;
  margin-bottom: 25px;
}
.property-card__detail {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.property-card__rate {
  display: flex;
  align-items: center;
}
</style>