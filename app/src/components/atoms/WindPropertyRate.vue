<template>
  <p>{{ fixedRate }}</p>
</template>

<script>
export default {
  props: {
    rate: {
      type: Number,
      required: true
    }
  },
  computed: {
    fixedRate: function () {
      return this.rate.toFixed(2)
    }
  }
}
</script>