<script setup>
const props = defineProps({
  index: String,
  icon: String,
  image: String,
  title: String,
  description: String
})
</script>

<style>
.item {
  display: flex;
  align-items: center;
  column-gap: 2ch;

  &__icon {
    display: inline;
    stroke-width: 1;
    width: 0.6gs;
    height: 0.6gs;
    min-width: 0.6gs;
    min-height: 0.6gs;
    margin-top: 3px;
  }

  &__image {
    display: inline;
    stroke-width: 1;
    height: 1gs;
    min-height: 1gs;
    margin-top: 3px;
    margin-bottom: 1ch;
  }

  &__index {
    font-family: Poppins;
    @apply font-bold;
    @apply text-right;
    width: 0.3gs;
    font-size: 35pt;
    line-height: 1em;
    margin-top: 6px;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: bold;
    font-size: 14pt;
  }
}
</style>

<template>
  <section class="item">
    <h5 v-if="index" class="item__index">{{ index }}</h5>
    <img v-if="image" :src="image" class="item__image" />
    <SvgIcon v-else-if="icon" :name="icon" class="item__icon" />

    <div class="item__text">
      <h4 v-if="title" class="item__title">{{ title }}</h4>
      <p class="item__contents"><slot /></p>
    </div>
  </section>
</template>
