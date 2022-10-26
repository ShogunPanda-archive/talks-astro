<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String,
  logo: String,
  position: String,
  image: String,
  icon: String,
  sequence: String
})
</script>

<style>
.half {
  background-position-x: 5gs;
  background-position-y: top;

  &.flex-row-reverse {
    background-position-x: 0;
  }

  & > main {
    width: 5gs;
    padding: var(--nf-base-position-left);
  }

  &--right {
    & > main {
    }
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
  <div class="nf-slide-container">
    <article
      :class="`nf-slide half half--${position ?? 'left'} bg-contain bg-no-repeat ${classes ?? ''}`"
      :style="`background-image: ${image ? 'url(' + image + ')' : 'none'}`"
    >
      <main>
        <slot />
      </main>
    </article>

    <SvgIcon v-if="icon" :name="icon" class="callout-icon" />
    <h2 v-if="sequence" class="sequence">{{ sequence }}</h2>
    <Logo :class="`logo fill-${logo ?? 'white'}`" />
  </div>
</template>
