<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  main: String,
  image: String,
  imageClasses: String,
  classes: String,
  logo: String
})
</script>

<template>
  <article :class="`nf-slide ${classes ?? ''}`">
    <h1 v-if="main" class="callout callout--title" v-html="main" />
    <img :src="image" :class="`absolute left-0 w-full min-h-full ${imageClasses ?? ''}`" />
    <Logo :class="`logo logo--${logo ?? 'white'}`" />
  </article>
</template>

