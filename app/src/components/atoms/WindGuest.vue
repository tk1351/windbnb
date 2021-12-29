<template>
  <p class="category">{{ category }}</p>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.category {
  font-weight: bold;
}
</style>