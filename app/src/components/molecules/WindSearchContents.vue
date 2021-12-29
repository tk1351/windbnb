<template>
  <div class="search-contents-wrapper">
    <wind-location-input />
    <wind-guests-input />
    <wind-search-input />
  </div>
  <wind-search-inputs />
</template>

<script>
import WindLocationInput from "../atoms/WindLocationInput";
import WindGuestsInput from "../atoms/WindGuestsInput";
import WindSearchInput from "../atoms/WindSearchInput";
import WindSearchInputs from "./WindSearchInputs";
export default {
  components: {
    WindSearchInputs,
    WindSearchInput,
    WindGuestsInput,
    WindLocationInput
  }
}
</script>

<style scoped>
.search-contents-wrapper {
  display: flex;
  border: solid 1px;
  border-radius: 15px;
  height: 60px;
  width: 100%;
  margin-top: 70px;
}
</style>