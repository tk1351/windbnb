<template>
  <button type="button" class="input--search" v-on:click="handleClick">
    <span class="material-icons-outlined">
      search
    </span>
    <span class="input__text">
      Search
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      this.$store.commit('close')
    }
  }
}
</script>

<style scoped>
.input--search {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF385C;
  color: #fff;
  border-radius: 15px;
  border: none;
  width: 140px;
  margin-left: 140px;
  cursor: pointer;
}

.input__text {
  font-weight: bold;
  padding-left: 5px;
}

.material-icons-outlined {
  color: white;
}
</style>