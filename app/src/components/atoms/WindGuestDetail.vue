<template>
  <span class="detail">{{ detail }}</span>
</template>

<script>
export default {
  props: {
    detail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.detail {
  color: darkgray;
}
</style>