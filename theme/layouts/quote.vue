<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String,
  logo: String,
  sentence: String,
  author: String
})
</script>

<style>
.quote-container {
  .logo {
    @apply border-nf-midnight-blue;
  }
}

.quote {
  padding: var(--nf-base-position-left);
  padding-right: calc(2 * var(--nf-base-position-left));

  h1 {
    &::after {
      @apply bg-nf-midnight-blue;
    }
  }

  h1.sentence {
    margin-top: -0.5gs;
    font-size: 35pt;

    &::after {
      display: none;
    }
  }

  &__icon {
    position: absolute;
    width: 3gs;
    height: 3gs;
    stroke-width: 0.5;
    @apply text-white;

    &--top {
      top: -0.6gs;
      right: 0.5gs;
      transform: rotateX(180deg);
    }

    &--bottom {
      bottom: -1gs;
      left: -1gs;
    }
  }
}
</style>

<template>
  <div class="nf-slide-container quote-container">
    <article :class="`nf-slide flex flex-col quote ${classes ?? ''}`">
      <h1>One last thing™</h1>

      <div class="flex flex-1 flex-col justify-center">
        <h1 class="m-0 p-0 sentence">&ldquo;{{ sentence }}&rdquo;</h1>
        <h4 class="text-nf-midnight-blue italic">
          <strong>{{ author }}</strong>
        </h4>
      </div>
    </article>

    <SvgIcon name="bulb" class="quote__icon quote__icon--top" />
    <SvgIcon name="puzzle-2" class="quote__icon quote__icon--bottom" />
    <Logo :class="`logo fill-${logo ?? 'white'}`" />
  </div>
</template>
