<script setup>
const props = defineProps({
  width: String,
  height: String,
  classes: String
})
</script>

<template>
  <svg :viewBox="`0 0 ${width ? width : 1} ${!width ? height : 1}`" stroke="current-color" :class="classes">
    <line x1="0" y1="0" :x2="`${width ? width : 1}`" :y2="`${!width ? height : 1}`" stroke="current-color" />
  </svg>
</template>
