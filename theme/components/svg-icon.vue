<script setup>
import { defineAsyncComponent, useAttrs } from 'vue';

const attrs = useAttrs()

const SVG = defineAsyncComponent(() => import(`../assets/icons/${attrs.name}.svg`))

const props = defineProps({
  viewBoxWidth: {
    type: String,
    default() {
      return '24'
    }
  },
  viewBoxHeight: {
    type: String,
    default() {
      return '24'
    }
  },
  classes: String
})
</script>

<template>
  <SVG :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" :class="`${classes ?? ''}`" />
</template>
