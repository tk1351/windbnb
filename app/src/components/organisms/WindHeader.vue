<template>
  <div class="header" v-bind:class="{ 'is-open': open }">
    <wind-normal-header-contents v-if="!open" />
    <wind-search-contents v-if="open" />
  </div>
</template>

<script>
import WindNormalHeaderContents from "../molecules/WindNormalHeaderContents";
import WindSearchContents from "../molecules/WindSearchContents";

export default {
  components: {
    WindSearchContents,
    WindNormalHeaderContents,
  },
  computed: {
    open() {
      return this.$store.state.open
    }
  }
}
</script>

<style scoped>
.header {
  background-color: darkgray;
  height: calc(100vh - 90vh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}
.is-open {
  height: calc(100vh - 50vh);
  position: absolute;
  z-index: 1;
  width: 100%;
  display: inline;
  justify-content: normal;
  align-items: normal;
}
</style>