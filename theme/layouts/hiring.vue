<script setup>
import CurveBottomRight from '../assets/hiring-curve-bottom-right.svg'
import LogoWithText from '../assets/nearform-logo-with-text-right.svg'
import Logo from '../assets/nearform-logo.svg'

import Facebook from '../assets/icons/brand-facebook.svg'
import GitHub from '../assets/icons/brand-github.svg'
import LinkedIn from '../assets/icons/brand-linkedin.svg'
import Twitter from '../assets/icons/brand-twitter.svg'
import Youtube from '../assets/icons/brand-youtube.svg'

const props = defineProps({
  classes: String
})
</script>

<style>
.hiring {
  header {
    p {
      font-family: Poppins;
      @apply font-size-10pt;
      line-height: 1.15em;
    }
  }

  &__world {
    h2 {
      @apply font-size-16pt;
    }
  }

  h1.no-border {
    @apply font-size-30pt;
    @apply font-extrabold;
  }

  footer {
    font-family: Poppins;
    @apply font-bold;
    @apply font-size-12pt;
  }

  &__logo-with-text {
    @apply w-1_8gs;
  }

  &__curve-bottom-right {
    top: 3.02gs;
    left: 5.82gs;
    width: 4.25gs;
  }

  &__npm {
    h1 {
      font-family: Lexend;
      @apply font-size-40pt;
    }

    h2 {
      @apply font-size-13pt;
    }

    h3 {
      @apply font-size-12pt;
    }

    h4 {
      @apply font-size-10pt;
    }
  }
}
</style>

<template>
  <article :class="`hiring nf-slide flex flex-col justify-between bg-nf-darkest-blue text-white ${classes ?? ''}`">
    <div class="flex flex-col flex-1 place-content-between">
      <header class="flex pt-1bp pl-1bp items-center">
        <Logo class="h-0_6gs mr-2ch justify-self-end fill-white" />

        <p>
          WE’RE BOLD<br />
          WE’RE FLEXIBLE<br />
          WE’RE OPEN<br />
          WE’RE EMPOWERING<br />
        </p>
      </header>

      <div
        class="hiring__world flex items-center ml-1bp bg-no-repeat bg-contain h-3gs"
        style="background-image: url('/theme/world.png')"
      >
        <h2>Global Delivery Org with {{ $slidev.configs.company.count }}+ and counting</h2>
      </div>

      <h1 class="m-0 ml-1bp mb-1ch text-nf-brunch-pink no-border">We are hiring!</h1>
    </div>

    <footer class="flex items-center w-full h-0_7gs px-1bp bg-nf-brunch-pink text-nf-darkest-blue">
      <a href="https://nearform.com" class="text-nf-darkest-blue">nearform.com</a>
      <div class="w-2px h-0_3gs mx-1ch bg-nf-darkest-blue" />
      <span>follow us on</span>

      <a href="https://www.linkedin.com/company/nearform/" class="w-0_3gs ml-1ch">
        <LinkedIn class="text-nf-darkest-blue" />
      </a>

      <a href="https://twitter.com/nearform" class="w-0_3gs ml-1ch">
        <Twitter class="text-nf-darkest-blue" />
      </a>

      <a href="https://github.com/nearform" class="w-0_3gs ml-1ch">
        <GitHub class="text-nf-darkest-blue" />
      </a>

      <a href="https://www.youtube.com/channel/UCp2Tsbjd3P8itnBHUNHi82A" class="w-0_3gs ml-1ch">
        <Youtube class="text-nf-darkest-blue" />
      </a>

      <a href="https://www.facebook.com/NearFormLtd" class="w-0_3gs ml-1ch">
        <Facebook class="text-nf-darkest-blue" />
      </a>

      <div class="flex flex-1"></div>

      <LogoWithText class="hiring__logo-with-text justify-end fill-nf-darkest-blue" />
    </footer>

    <CurveBottomRight class="hiring__curve-bottom-right absolute z-3 fill-white" />

    <div class="hiring__npm w-2_5gs absolute text-center top-1bp right-1bp">
      <h2 class="mb-2ch">Major Contributors to the Open Source Web Platform</h2>

      <h3>NPM monthly downloads</h3>
      <h1 class="text-nf-brunch-pink mb-0 no-border">{{ $slidev.configs.company.npm.monthly }}</h1>

      <hr class="inline-block h-0 border-dotted border-0 border-top-2 w-2gs my-1ch border-white" />

      <h4 class="m-0">Represents modules used globally</h4>
      <h1 class="text-nf-brunch-pink mb-0 no-border">{{ $slidev.configs.company.npm.percentage }}</h1>
    </div>
  </article>
</template>
