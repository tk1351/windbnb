<template>
  <wind-header />
  <wind-property-contents />
  <wind-footer />
</template>

<script>

import WindHeader from '../organisms/WindHeader'
import WindPropertyContents from "../organisms/WindPropertyContents";
import WindFooter from "../organisms/WindFooter";

export default {
  components: {
    WindFooter,
    WindPropertyContents,
    WindHeader
  }
}
</script>