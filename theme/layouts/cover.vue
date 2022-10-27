<script setup>
import CurveBottomRight from '../assets/cover-curve-bottom-right.svg'
import CurveTopLeft from '../assets/cover-curve-top-left.svg'
import Logo from '../assets/nearform-logo-with-text-right.svg'

const props = defineProps({
  classes: Boolean
})
</script>

<style>
.cover {
  &__curve-top-left {
    width: 2.76gs;
  }

  &__curve-bottom-right {
    width: 5.51gs;
  }

  &__contents {
    grid-template:
      'a a' min-content
      'b b' min-content
      'c c' min-content
      'd e' min-content
      / 1fr 1fr;

    h1 {
      @apply font-size-35pt;

      &::after {
        display: none;
      }
    }

    h2 {
      @apply font-size-14pt;
    }
  }

  &__copyright {
    @apply font-size-10.5pt;
  }

  &__logo {
    width: 2.65gs;
  }
}
</style>

<template>
  <article :class="`nf-slide cover p-1bp items-end bg-nf-darkest-blue text-white ${classes ?? ''}`">
    <CurveTopLeft class="cover__curve-top-left absolute z-0 top-0 left-0 fill-nf-brunch-pink" />
    <CurveBottomRight class="cover__curve-bottom-right absolute z-0 bottom-0 right-0 fill-white" />

    <div class="cover__contents grid">
      <h1
        class="grid-a font-bold no-border mb-0_2gs"
        v-html="($slidev.configs.title_formatted || $slidev.configs.title).replace(' %br% ', '<br />')"
      />

      <h2 class="grid-b text-nf-brunch-pink font-light mb-0_2gs">
        <strong class="inline-block text-white mr-1ch">{{ $slidev.configs.author.name }}</strong>
        {{ $slidev.configs.author.description_title || $slidev.configs.author.description }}
      </h2>

      <div class="grid-c w-1_5gs h-0_1gs bg-nf-brunch-pink mb-1gs" />

      <h3 class="cover__copyright self-end text-nf-brunch-pink font-light">
        &#169; Copyright 2022 NearForm Ltd. All Rights Reserved.
      </h3>

      <Logo class="cover__logo justify-self-end fill-white" />
    </div>
  </article>
</template>
