<template>
  <input type="button" value="-" class="input--remove" v-on:click="handleClick" />
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('remove')
    }
  }
}
</script>

<style scoped>
.input--remove {
  width: 25px;
  height: 25px;
}
</style>