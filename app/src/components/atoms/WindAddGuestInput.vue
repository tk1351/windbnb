<template>
  <input type="button" value="+" class="input--add" v-on:click="handleClick" />
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('add')
    }
  }
}
</script>

<style scoped>
.input--add {
  width: 25px;
  height: 25px;
}
</style>