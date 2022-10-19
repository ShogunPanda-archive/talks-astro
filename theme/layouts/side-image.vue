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

    h4 {
      text-align: justify;
    }
  }

  .side {
    align-self: center;
    max-width: 4gs;
    max-height: calc(100% - (2 * var(--nf-base-position-left)));
    margin: var(--nf-base-position-left) calc(2 * var(--nf-base-position-left)) var(--nf-base-position-left) 0;
  }

  .item {
    &:not(:first-of-type) {
      padding-top: var(--nf-item-spacing);
    }

    &__index,
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
