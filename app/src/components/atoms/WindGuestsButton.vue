<template>
  <button type="button" class="button--guests" v-on:click="handleClick">
    Add guests
  </button>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      console.log('guests')
    }
  }
}
</script>

<style scoped>
.button--guests {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  color: darkgray;
  width: 40%;
  height: 100%;
  border: none;
  border-left: solid 1px;
  border-right: solid 1px;
  cursor: pointer;
}
</style>