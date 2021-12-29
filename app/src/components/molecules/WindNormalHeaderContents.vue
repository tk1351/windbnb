<template>
  <wind-app-logo />
  <wind-search-button v-on:click="onChangeState" />
</template>

<script>
import WindAppLogo from "../molecules/WindAppLogo";
import WindSearchButton from "../molecules/WindSearchButton";

export default {
  components: {
    WindSearchButton, WindAppLogo
  },
  methods: {
    onChangeState() {
      this.$store.commit('changeState')
    }
  }
}
</script>