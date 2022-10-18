<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String
})
</script>

<style>
.questions {
  &__background {
    top: -2.5gs;
  }
}
</style>
<template>
  <div class="nf-slide-container">
    <article :class="`nf-slide flex flex-col quote ${classes ?? ''}`">
      <h1 class="callout callout--title absolute z-2">Questions?</h1>
      <img src="/theme/questions.jpg" class="absolute questions__background left-0 w-full" />
      <Logo class="logo fill-white" />
    </article>
  </div>
</template>
