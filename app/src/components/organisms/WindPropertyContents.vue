<template>
  <div class="property-contents-wrapper" v-on:click="handleClick">
    <wind-result />
    <ul class="card-list">
      <wind-property-card
          v-for="property in properties"
          v-bind:key="property.id"
          :property="property"
      />
    </ul>
  </div>
</template>

<script>
import WindResult from "../molecules/WindResult";
import WindPropertyCard from "../molecules/WindPropertyCard";
import { properties } from "../../mock/properties";

export default {
  components: {
    WindPropertyCard,
    WindResult
  },
  data () {
    return {
      properties
    }
  },
  methods: {
    handleClick: function () {
      this.$store.commit('close')
    }
  }
}
</script>

<style scoped>
.property-contents-wrapper {
  min-height: calc(100vh - 15vh);
  width: auto;
  background-color: bisque;
  padding: 50px 100px;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: space-between;
}
</style>
