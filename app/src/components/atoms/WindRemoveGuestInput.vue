<template>
  <input
      type="button"
      value="-"
      class="input--remove"
      v-on:click="onRemoveAmountClicked"
      v-bind:disabled="validateRemoveInput"
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
    onRemoveAmountClicked() {
      this.$store.commit('decrement', this.category)
    }
  },
  computed: {
    adults() {
      return this.$store.getters.getAdults
    },
    children() {
      return this.$store.getters.getChildren
    },
    validateRemoveInput() {
      const isAdultsDisabled = this.category === 'Adults' && this.adults <= 0
      const isChildrenDisabled = this.category === 'Children' && this.children <= 0

      if (isAdultsDisabled) return true
      if (isChildrenDisabled) return true
      return false
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