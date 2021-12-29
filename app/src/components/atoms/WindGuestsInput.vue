<template>
  <div class="input--guests" v-on:click="handleClick">
    <span class="label">Guests</span>
    <span class="placeholder">Add Guests</span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.commit('changeInputTab', 'guests')
    }
  }
}
</script>

<style scoped>
.input--guests {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: cadetblue;
  width: 33.3%;
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