<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({ logo_black: Boolean })
</script>

<style>
.hello {
  background-image: url(/theme/location.png);
  background-position-x: 5gs;
  background-position-y: top;
  background-size: 5gs, contain;

  main {
    width: 5gs;
    padding: var(--nf-base-position-left);
  }

  .item {
    width: 3.1gs;
    margin: 0.1gs auto 0 auto;

    &__contents {
      text-align: left;
    }
  }
}
</style>

<template>
  <div class="nf-slide-container">
    <article class="nf-slide hello bg-no-repeat">
      <main class="flex flex-col h-full">
        <h1>Hello, I'm {{ $slidev.configs.author.name.split(' ')[0] }}!</h1>

        <div class="flex flex-1 flex-col justify-center">
          <img src="/theme/avatar-with-shadow.png" alt="Paolo" class="avatar my-0 mx-auto" />

          <section class="mx-auto my-0">
            <Item icon="users">
              <strong>{{ $slidev.configs.author.description }}</strong>
            </Item>

            <Item icon="brand-twitter" :link="`https://twitter.com/${$slidev.configs.author.twitter}`">
              <strong>{{ $slidev.configs.author.twitter }}</strong>
            </Item>

            <Item icon="brand-github" :link="`https://github.com/${$slidev.configs.author.github}`">
              <strong>{{ $slidev.configs.author.github }}</strong>
            </Item>
          </section>
        </div>
      </main>
    </article>

    <Logo :class="`logo fill-${logo_black ? 'black' : 'white'}`" />
  </div>
</template>
