<script setup>
import CurveBottomRight from '../assets/hiring-curve-bottom-right.svg'
import Logo from '../assets/nearform-logo.svg'
import LogoWithText from '../assets/nearform-logo-with-text-right.svg'
</script>

<style>
.end {
  background-image: url('../assets/panda.jpg');
  background-position: 0 -4.77gs;

  .callout {
    margin: var(--nf-base-position-left);
  }

  &__footer {
    height: 0.72gs;
    padding-left: var(--nf-base-position-left);
    font-size: 12pt;

    a {
      @apply text-nf-darkest-blue;
    }

    &__contacts {
      column-gap: 3ch;
    }

    &__logo-with-text {
      width: 1.81gs;
      margin-right: 0.3gs;
    }
  }

  &__curve-bottom-right {
    top: 3.02gs;
    left: 5.82gs;
    width: 4.25gs;
  }
}
</style>

<template>
  <div class="nf-slide-container">
    <article class="nf-slide end flex flex-col items-start justify-between bg-no-repeat bg-cover">
      <CurveBottomRight class="end__curve-bottom-right absolute z-3 fill-white" />

      <div class="flex-1"></div>

      <h1 class="callout">Thank you!</h1>

      <footer class="end__footer flex self-end items-center w-full bg-nf-brunch-pink text-nf-darkest-blue">
        <div class="end__footer__contacts grid grid-cols-[1fr,1fr]">
          <strong>{{ $slidev.configs.author.name }}</strong>
          <a href="https://twitter.com/{{ $slidev.configs.author.twitter }}">@{{ $slidev.configs.author.twitter }}</a>
          <span>{{ $slidev.configs.author.description_title }}</span>
          <a href="mailto:{{ $slidev.configs.author.email }}">{{ $slidev.configs.author.email }}</a>
        </div>

        <div class="flex-1"></div>

        <LogoWithText class="end__footer__logo-with-text justify-self-end fill-nf-darkest-blue" />
      </footer>
    </article>
  </div>
</template>
