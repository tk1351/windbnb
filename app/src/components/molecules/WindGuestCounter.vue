<template>
  <div class="guest-counter-wrapper">
    <wind-counter category="Adults" detail="Ages 13 or above" :amount="adults" />
    <wind-counter category="Children" detail="Ages 2-12" :amount="children" />
  </div>
</template>

<script>
import WindCounter from "./WindCounter";

export default {
  components: {
    WindCounter,
  },
  computed: {
    adults() {
      return this.$store.getters.getAdults
    },
    children() {
      return this.$store.getters.getChildren
    }
  }
}
</script>

<style scoped>
.guest-counter-wrapper {
  width: 33.3%;
  height: calc(100vh - 50vh - 130px);
  background-color: antiquewhite;
  margin-left: 33.3%;
  padding-left: 20px;
}
</style>
