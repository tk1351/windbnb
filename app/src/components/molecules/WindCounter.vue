<template>
  <div class="counter-wrapper">
    <wind-guest :category="category" />
    <wind-guest-detail :detail="detail" />
    <div class="counter">
      <wind-remove-guest-input :category="category" />
      <wind-guests-number :amount="amount"/>
      <wind-add-guest-input :category="category" />
    </div>
  </div>
</template>

<script>
import WindGuest from "../atoms/WindGuest";
import WindGuestDetail from "../atoms/WindGuestDetail";
import WindRemoveGuestInput from "../atoms/WindRemoveGuestInput";
import WindAddGuestInput from "../atoms/WindAddGuestInput";
import WindGuestsNumber from "../atoms/WindGuestsNumber";

export default {
  props: {
    category: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  components: {
    WindGuestsNumber,
    WindAddGuestInput,
    WindRemoveGuestInput,
    WindGuestDetail,
    WindGuest
  }
}
</script>

<style scoped>
.counter-wrapper {
  padding-top: 25px;
}

.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  padding-top: 10px
}
</style>