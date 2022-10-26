<script setup>
import CurveTopLeft from '../assets/cover-curve-top-left.svg'
import CurveBottomRight from '../assets/cover-curve-bottom-right.svg'
import Logo from '../assets/nearform-logo-with-text-right.svg'
</script>

<style>
.cover {
  &__curve-top-left {
    width: 2.76gs;
  }

  &__contents {
    max-width: 90%;
    margin-left: var(--nf-base-position-left);

    h1 {
      font-size: 37pt;

      &::after {
        display: none;
      }
    }

    h2 {
      margin: 0.2gs 0;
      font-size: 14pt;

      strong {
        margin-right: 1ch;
      }
    }

    hr  {
      width: 1.5gs;
      border-top-width: 0.1gs;
    }
  }

  &__copyright {
    bottom: 0.48gs;
    left: var(--nf-base-position-left);
    font-size: 10.5pt;
  }

  &__curve-bottom-right {
    width: 5.51gs;
  }

  &__logo {
    top: 4.75gs;
    left: 6.88gs;
    width: 2.65gs;
  }
}
</style>

<template>
  <div class="nf-slide-container">
    <article class="nf-slide cover flex bg-nf-darkest-blue text-white">
      <CurveTopLeft class="cover__curve-top-left absolute z-0 top-0 left-0 fill-nf-brunch-pink" />
      <CurveBottomRight class="cover__curve-bottom-right absolute z-0 bottom-0 right-0 fill-white" />
      <Logo class="cover__logo absolute z-1 fill-white" />

      <section class="cover__contents z-2 self-center">
        <h1
          class="font-bold"
          v-html="($slidev.configs.title_formatted || $slidev.configs.title).replace(' %br% ', '<br />')"
        />
        <h2 class="text-nf-brunch-pink font-light">
          <strong class="inline-block text-white">{{ $slidev.configs.author.name }}</strong>
          {{ $slidev.configs.author.description_title || $slidev.configs.author.description }}
        </h2>
        <hr class="h-0 border-0 border-nf-brunch-pink" />
      </section>
      <h3 class="cover__copyright absolute z-2 block text-nf-brunch-pink font-light">
        &#169; Copyright 2022 NearForm Ltd. All Rights Reserved.
      </h3>
    </article>
  </div>
</template>
