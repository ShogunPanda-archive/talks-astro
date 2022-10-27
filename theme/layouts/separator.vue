<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  main: String,
  secondary: String,
  sideBackground: String,
  sideBackgroundClasses: String,
  sequence: String,
  sequenceClasses: String,
  icon: String,
  iconClasses: String,
  classes: String,
  logo: String
})
</script>

<template>
  <article :class="`nf-slide items-center justify-start ${classes ?? ''}`">
    <h1 v-html="main" class="min-w-5gs px-1bp big-title big-title--white" />

    <div v-if="sideBackground" class="grid-b w-5gs h-full overflow-hidden">
      <img :src="sideBackground" :class="`h-full max-w-none ${sideBackgroundClasses ?? ''}`" />
    </div>

    <h2 v-if="sequence" :class="`sequence ${sequenceClasses ?? ''}`">{{ sequence }}</h2>
    <SvgIcon v-else-if="icon" :name="icon" :class="`callout-icon ${iconClasses}`" />
    <Logo :class="`logo logo--${logo ?? 'white'}`" />
  </article>
</template>

