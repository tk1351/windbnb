<template>
  <button type="button" class="button--location" v-on:click="handleClick">
    Helsinki, Finland
  </button>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      console.log('location')
    }
  }
}
</script>

<style>
.button--location {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px 0 0 15px;
  background-color: aqua;
  width: 50%;
  height: 100%;
  cursor: pointer;
}
</style>