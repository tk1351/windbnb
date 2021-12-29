<template>
  <div class="super-host-wrapper" v-if="superhost">
    <span>SUPER HOST</span>
  </div>
</template>

<script>
export default {
  props: {
    superhost: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.super-host-wrapper {
  border: solid 1px;
  border-radius: 10px;
  width: 100px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>