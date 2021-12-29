<template>
  <span class="property-type">{{ type }}</span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.property-type {
  font-size: 12px;
  color: darkgray;
}
</style>