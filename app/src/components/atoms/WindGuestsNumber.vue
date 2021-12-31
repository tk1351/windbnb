<template>
  <p>{{ amount }}</p>
</template>

<script>

export default {
  props: {
    amount: {
      type: Number,
      required: true
    }
  }
}
</script>