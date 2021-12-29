<template>
  <p>{{ location }}</p>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: true
    }
  }
}
</script>