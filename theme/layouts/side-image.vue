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
.side-image {
  main {
    flex: 1;
    padding: var(--nf-base-position-left);
    padding-right: 0;

    h4 {
      text-align: justify;
    }
  }

  .side {
    align-self: center;
    max-width: 4gs;
    max-height: calc(100% - (2 * var(--nf-base-position-left)));
    margin: var(--nf-base-position-left);
    margin-right: calc(var(--nf-base-position-left) + 0.45gs);
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
  <div class="nf-slide-container side-image">
    <article :class="`nf-slide flex w-full ${classes ?? ''}`">
      <slot />
    </article>

    <SvgIcon v-if="icon" :name="icon" class="callout-icon" />
    <h2 v-if="sequence" class="sequence">{{ sequence }}</h2>
    <Logo :class="`logo fill-${logo ?? 'black'}`" />
  </div>
</template>
