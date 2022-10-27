<script setup>
import CurveBottomRight from '../assets/hiring-curve-bottom-right.svg';
import LogoWithText from '../assets/nearform-logo-with-text-right.svg';

const props = defineProps({
  classes: Boolean
})
</script>

<style>
  .end {
    background-image: url('../assets/panda.jpg');
    background-position-y: -5gs;

    footer {
      .grid{
        grid-template:
                        "a b e" 1fr
                        "c d e" 1fr
                        / min-content 1fr min-content
      }
    }
    
    &__logo-with-text {
      width: 1.81gs;
    }

    &__curve-bottom-right {
      top: 3.02gs;
      left: 5.82gs;
      width: 4.25gs;
    }
  }
</style>

<template>
  <article :class="`end nf-slide flex flex-col bg-no-repeat bg-cover ${classes ?? ''}`">

    <div class="flex-1"></div>

    <h1 class="callout callout--title bottom-2bp">Thank you!</h1>

    <footer class="w-full h-0_7gs px-1bp bg-nf-brunch-pink flex items-center">
      <div class="grid w-full text-nf-darkest-blue gap-x-2ch">
        <strong class="grid-a whitespace-nowrap">{{ $slidev.configs.author.name }}</strong>
        <a class="grid-b whitespace-nowrap !text-nf-darkest-blue" href="https://twitter.com/{{ $slidev.configs.author.twitter }}">@{{ $slidev.configs.author.twitter }}</a>
        <span class="grid-c whitespace-nowrap">{{ $slidev.configs.author.description_title }}</span>
        <a class="grid-d whitespace-nowrap text-nf-darkest-blue" href="mailto:{{ $slidev.configs.author.email }}">{{ $slidev.configs.author.email }}</a>
        <LogoWithText class="end__logo-with-text grid-e self-center fill-nf-darkest-blue" />
      </div>
    </footer>

    <CurveBottomRight class="end__curve-bottom-right absolute z-3 fill-white" />
  </article>
</template>
