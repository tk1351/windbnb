<template>
  <div class="input--location" v-on:click="handleClick">
    <span class="label">LOCATION</span>
    <span class="placeholder">Add Location</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.commit('changeInputTab', 'location')
    }
  }
}
</script>

<style scoped>
.input--location {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.3%;
  background-color: aqua;
  border-radius: 15px;
  cursor: pointer;
}

.label {
  padding-left: 20px;
  font-size: 10px;
  font-weight: bold;
}

.placeholder {
  padding-left: 20px;
  font-size: 10px;
  color: darkgray;
}
</style>