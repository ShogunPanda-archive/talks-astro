<script setup>
import Logo from '../assets/nearform-logo.svg';

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

<template>
  <div class="nf-slide-container">
    <article :class="`nf-slide flex-col p-1bp ${!light ? 'bg-brunch-pink text-white' : ''} ${classes ?? ''}`">
      <h1>{{ quoteTitle || 'One last thing™' }}</h1>

      <h1 :class="`flex flex-col flex-1 justify-center m-0 -mt-1gs p-0 ${light ? 'text-nf-midnight-blue' : ''} line-height-1`">
        &ldquo;{{ sentence }}&rdquo;<br/>
        <strong :class="`font-size-0_6em ${light ? '' : 'text-nf-midnight-blue'} italic`">{{ author }}</strong>
      </h1>
    </article>

    <SvgIcon v-if="icons" name="bulb" :class="`absolute z-2 w-3gs h-3gs -top-0_6gs right-0_5gs stroke-width-0_3 transform rotate-180 ${!light ? 'text-white' : ''}`" />
    <SvgIcon v-if="icons" name="puzzle-2" :class="`absolute z-2 w-3gs h-3gs -bottom-1gs -left-1gs stroke-width-0_3 ${!light ? 'text-white' : ''}`" />
    <h2 v-if="sequence" class="sequence">{{ sequence }}</h2>
    <Logo :class="`logo logo--${logo ?? 'white'}`" />
  </div>
</template>
