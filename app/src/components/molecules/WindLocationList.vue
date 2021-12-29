<template>
  <li class="location-list-wrapper">
    <wind-location-icon />
    <wind-location :location="location" />
  </li>
</template>

<script>
import WindLocationIcon from "../atoms/WindLocationIcon";
import WindLocation from "../atoms/WindLocation";

export default {
  props: {
    location: {
      type: String,
      required: true
    }
  },
  components: {
    WindLocation,
    WindLocationIcon
  }
}
</script>

<style scoped>
.location-list-wrapper {
  list-style: none;
  display: flex;
  align-items: center;
  height: 50px;
  width: 33.3%;
}
</style>