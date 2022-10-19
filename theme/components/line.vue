<script setup>
const props = defineProps({
  width: Number,
  height: Number,
  classes: String
})
</script>

<template>
  <svg :viewBox="`0 0 ${width ? width : 1} ${!width ? height : 1}`" stroke="current-color" :class="class">
    <line x1="0" y1="0" :x2="`${width ? width : 1}`" :y2="`${!width ? height : 1}`" stroke="current-color" />
  </svg>
</template>
