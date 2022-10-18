<script setup>
import { defineAsyncComponent, useAttrs } from 'vue'

const attrs = useAttrs()

const SVG = defineAsyncComponent(() => import(`../assets/icons/${attrs.name}.svg`))
</script>

<template>
  <SVG viewBox="0 0 24 24" />
</template>
