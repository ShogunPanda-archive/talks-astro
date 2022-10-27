<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  classes: String,
  logo: String
})
</script>

<style>
.hello {
  grid-template:
    'a b' min-content
    'c b' 1fr
    / 1fr 1fr;

  .item {
    @apply min-h-0;
  }

  &__avatar {
    @apply w-1_5gs;
  }
}
</style>

<template>
  <article :class="`nf-slide hello grid ${classes ?? ''}`">
    <h1 class="grid-a pt-1bp pl-1bp">Hello, I'm {{ $slidev.configs.author.name.split(' ')[0] }}!</h1>

    <div class="grid-b w-5gs h-full">
      <img src="/theme/location.png" class="w-full overflow-hidden" />
    </div>

    <div class="grid-c flex flex-col self-center justify-self-center gap-y-1ch">
      <img src="/theme/avatar-with-shadow.png" class="hello__avatar self-center" />

      <Item icon="users" class="items-center">
        <strong v-html="$slidev.configs.author.description" />
      </Item>

      <Item icon="brand-twitter" :link="`https://twitter.com/${$slidev.configs.author.twitter}`" class="items-center">
        <strong v-html="$slidev.configs.author.twitter" />
      </Item>

      <Item icon="brand-github" :link="`https://github.com/${$slidev.configs.author.github}`" class="items-center">
        <strong v-html="$slidev.configs.author.github" />
      </Item>
    </div>

    <Logo :class="`logo logo--${logo ?? 'white'}`" />
  </article>
</template>
