<template>
  <span class="property-name">{{ name }}</span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.property-name {
  font-size: 12px;
  font-weight: bold;
}
</style>