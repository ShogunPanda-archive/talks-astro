<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String,
  logo: String,
  quoteTitle: String,
  sentence: String,
  author: String,
  light: Boolean,
  icons: {
    type: Boolean,
    default() {
      return true
    }
  },
  sequence: String
})
</script>

<style>
.quote-container:not(.quote-container--light) {
  .logo {
    @apply border-white;
  }
}

.quote {
  padding: var(--nf-base-position-left);

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

  &:not(&--light) {
    h1 {
      &::after {
        @apply bg-white;
      }
    }

    & ~ .quote__icon {
      @apply text-white;
    }
  }
}
</style>

<template>
  <div :class="`nf-slide-container quote-container ${light ? 'quote-container--light' : ''}`">
    <article :class="`nf-slide flex flex-col quote ${light ? 'quote--light' : ''} ${classes ?? ''}`">
      <h1>{{ quoteTitle || 'One last thing™' }}</h1>

      <div class="flex flex-1 flex-col justify-center">
        <h1 :class="`m-0 p-0 sentence ${light ? 'text-nf-midnight-blue' : ''}`">&ldquo;{{ sentence }}&rdquo;</h1>
        <h4 :class="`${light ? '' : 'text-nf-midnight-blue'} italic`">
          <strong>{{ author }}</strong>
        </h4>
      </div>
    </article>

    <SvgIcon name="bulb" class="quote__icon quote__icon--top" v-if="icons" />
    <SvgIcon name="puzzle-2" class="quote__icon quote__icon--bottom" v-if="icons" />
    <h2 v-if="sequence" class="sequence">{{ sequence }}</h2>
    <Logo :class="`logo fill-${logo ?? 'white'}`" />
  </div>
</template>
