<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

<style>
.item {
  display: flex;
  align-items: center;

  &__icon {
    width: 0.6gs;
    height: 0.6gs;
    min-width: 0.6gs;
    min-height: 0.6gs;
    margin-right: 2ch;
    stroke-width: 1;
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
    <SvgIcon v-if="icon" :name="icon" class="item__icon" />

    <div class="item__text">
      <h4 v-if="title" class="item__title">{{ title }}</h4>
      <p class="item__contents"><slot /></p>
    </div>
  </section>
</template>
