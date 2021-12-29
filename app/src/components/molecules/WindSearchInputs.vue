<template>
  <ul v-if="input === 'location'" class="location-list">
    <wind-location-list
      v-for="(location, index) in locations"
      v-bind:key="index"
      :location="location"
    />
  </ul>
  <div v-if="input === 'guests'">
    <wind-guest-counter />
  </div>
</template>

<script>
import WindLocationList from "./WindLocationList";
import WindGuestCounter from "./WindGuestCounter";
import { locations } from "../../mock/locations";

export default {
  components: {
    WindGuestCounter,
    WindLocationList
  },
  data () {
    return {
      locations
    }
  },
  computed: {
    input () {
      return this.$store.state.input
    }
  }
}
</script>

<style scoped>
.location-list {
  padding-left: 20px;
}
</style>