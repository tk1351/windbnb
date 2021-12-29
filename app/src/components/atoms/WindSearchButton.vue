<template>
  <button
      type="button"
      class="button--search-icon"
      v-on:click="handleClick"
  >
    <span class="material-icons-outlined">
      search
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      console.log('search')
    }
  }
}
</script>

<style scoped>
.button--search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 15px 15px 0;
  border: none;
  background-color: bisque;
  width: 10%;
  height: 100%;
  cursor: pointer;
}
.material-icons-outlined {
  color: #FF385C;
}
</style>