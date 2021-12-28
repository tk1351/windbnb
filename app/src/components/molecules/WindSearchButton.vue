<template>
  <div class="wrapper">
    <wind-location-button />
    <wind-guests-button />
    <wind-search-button />
  </div>
</template>

<script>
import WindLocationButton from "../atoms/WindLocationButton";
import WindGuestsButton from "../atoms/WindGuestsButton";
import WindSearchButton from "../atoms/WindSearchButton"
export default {
  components: {
    WindGuestsButton,
    WindLocationButton,
    WindSearchButton
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 300px;
  height: 50px;
  border: solid 1px;
  border-radius: 15px;
}
</style>