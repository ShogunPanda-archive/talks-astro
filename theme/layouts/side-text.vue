<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String,
  logo: String,
  position: String,
  image: String,
  icon: String,
  sequence: Number
})
</script>

<style>
.side-text {
  main {
    flex: 1;
    padding: var(--nf-base-position-left);
    padding-right: 0;

    h4 {
      text-align: justify;
    }
  }

  aside {
    display: flex;
    align-items: center;
    max-width: 4gs;
    padding: 0 var(--nf-base-position-left);

    h4 {
      text-align: justify;
    }
  }

  .item {
    &:not(:first-of-type) {
      padding-top: var(--nf-item-spacing);
    }

    &__icon {
      @apply text-nf-neon-blue;
    }
  }
}
</style>

<template>
  <div class="nf-slide-container side-text">
    <article :class="`nf-slide flex w-full h-full ${classes ?? ''}`">
      <slot />
    </article>

    <SvgIcon v-if="icon" :name="icon" class="callout-icon" />
    <h2 v-if="sequence" class="sequence">{{ sequence }}</h2>
    <Logo :class="`logo fill-${logo ?? 'black'}`" />
  </div>
</template>
