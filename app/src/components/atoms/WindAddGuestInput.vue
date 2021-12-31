<template>
  <input
      type="button"
      value="+"
      class="input--add"
      v-on:click="onAddAmountClicked"
  />
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    onAddAmountClicked() {
      this.$store.commit('increment', this.category)
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