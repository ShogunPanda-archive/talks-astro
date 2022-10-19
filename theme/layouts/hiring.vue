<script setup>
import CurveBottomRight from '../assets/hiring-curve-bottom-right.svg'
import Logo from '../assets/nearform-logo.svg'
import LogoWithText from '../assets/nearform-logo-with-text-right.svg'

import LinkedIn from '../assets/icons/brand-linkedin.svg'
import Facebook from '../assets/icons/brand-facebook.svg'
import Twitter from '../assets/icons/brand-twitter.svg'
import GitHub from '../assets/icons/brand-github.svg'
import Youtube from '../assets/icons/brand-youtube.svg'
</script>

<style>
.hiring {
  &__logo {
    height: 0.6gs;
    margin-right: 2ch;
  }

  header {
    margin: var(--nf-base-position-left) 0 0 var(--nf-base-position-left);

    p {
      font-family: Poppins;
      font-size: 10pt;
      line-height: 1.15em;
    }
  }

  &__world {
    margin-left: var(--nf-base-position-left);
    height: 3.09gs;
    background-image: url('/theme/world.png');

    & > h2 {
      font-size: 16pt;
    }
  }

  &__highlight {
    margin: 0 0 0.2gs var(--nf-base-position-left);
    font-size: 30pt;

    &::after {
      display: none;
    }
  }

  &__npm {
    top: var(--nf-base-position-left);
    right: var(--nf-base-position-left);
    width: 2.5gs;

    h1 {
      @apply text-nf-brunch-pink;
      margin-bottom: 0;
      font-family: Lexend;
      font-size: 40pt;

      &::after {
        display: none;
      }
    }

    h2 {
      margin-bottom: 1.5ch;
      font-size: 13pt;
    }

    h3 {
      font-size: 12pt;
    }

    h4 {
      font-size: 10pt;
    }

    hr {
      width: 1.5gs;
      margin: 1.2ch 0;
      border-top-width: 2px;
    }
  }

  &__footer {
    height: 0.72gs;
    padding-left: var(--nf-base-position-left);
    font-family: Poppins;
    @apply font-bold;
    font-size: 12pt;

    hr {
      height: 0.26gs;
      margin: 0 1ch;
    }

    span {
      margin-right: 1ch;
    }

    &__social {
      margin-right: 1ch;

      svg {
        width: 0.25gs;
      }
    }

    &__logo-with-text {
      width: 1.81gs;
      margin-right: var(--nf-base-position-left);
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
    <article class="nf-slide hiring flex flex-col justify-between bg-nf-darkest-blue text-white">
      <CurveBottomRight class="hiring__curve-bottom-right absolute z-3 fill-white" />

      <header class="flex items-center">
        <Logo class="hiring__logo justify-self-end fill-white" />

        <p>
          WE’RE BOLD<br />
          WE’RE FLEXIBLE<br />
          WE’RE OPEN<br />
          WE’RE EMPOWERING<br />
        </p>
      </header>

      <div class="hiring__world flex items-center bg-no-repeat bg-contain">
        <h2>Global Delivery Org with {{ $slidev.configs.company.count }}+ and counting</h2>
      </div>

      <div class="hiring__npm absolute text-center">
        <h2>Major Contributors to the Open Source Web Platform</h2>

        <h3>NPM monthly downloads</h3>
        <h1>{{ $slidev.configs.company.npm.monthly }}</h1>

        <hr class="inline-block h-0 border-dotted border-0 border-white" />

        <h4>Represents modules used globally</h4>
        <h1>{{ $slidev.configs.company.npm.percentage }}</h1>
      </div>

      <h1 class="hiring__highlight text-nf-brunch-pink">We are hiring!</h1>

      <footer class="hiring__footer flex self-end items-center w-full bg-nf-brunch-pink text-nf-darkest-blue">
        <a href="https://nearform.com" class="text-nf-darkest-blue">nearform.com</a>
        <hr class="w-0 border-0 border-left-2 border-nf-darkest-blue" />
        <span class="block">follow us on</span>

        <a href="https://www.linkedin.com/company/nearform/" class="hiring__footer__social">
          <LinkedIn class="text-nf-darkest-blue" />
        </a>

        <a href="https://twitter.com/nearform" class="hiring__footer__social">
          <Twitter class="text-nf-darkest-blue" />
        </a>

        <a href="https://github.com/nearform" class="hiring__footer__social">
          <GitHub class="text-nf-darkest-blue" />
        </a>

        <a href="https://www.youtube.com/channel/UCp2Tsbjd3P8itnBHUNHi82A" class="hiring__footer__social">
          <Youtube class="text-nf-darkest-blue" />
        </a>

        <a href="https://www.facebook.com/NearFormLtd" class="hiring__footer__social">
          <Facebook class="text-nf-darkest-blue" />
        </a>

        <div class="flex-1"></div>

        <LogoWithText class="hiring__footer__logo-with-text justify-end fill-nf-darkest-blue" />
      </footer>
    </article>
  </div>
</template>
