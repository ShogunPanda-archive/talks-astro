<script setup>
const props = defineProps({
  horizontal: Boolean,
  index: String,
  icon: String,
  image: String,
  title: String,
  text: String,
  indexClasses: String,
  iconClasses: String,
  imageClasses: String,
  titleClasses: String,
  textClasses: String
})

</script>

<style>
.item {
  @apply flex;
  @apply items-start;

  &__icon {
    @apply inline;
    @apply w-0_6gs;
    @apply h-0_6gs;
    @apply min-w-0_6gs;
    @apply min-h-0_6gs;
    @apply stroke-1;
    @apply -mt-4px;
    @apply mr-1ch;
  }

  &__image {
    @apply inline;
    @apply w-1gs;
    @apply h-1gs;
    @apply min-w-1gs;
    @apply min-w-1gs;
    @apply mb-1ch;
  }

  &__index {
    font-family: Poppins;
    @apply font-bold;
    @apply text-right;
    @apply w-0_3gs;
    @apply font-size-35pt;
    @apply leading-none;
  }

  &__text {
    @apply max-w-7gs;
    @apply flex;
    @apply flex-col;
  }

  &__title {
    @apply max-w-7gs;
    @apply font-bold;
    @apply font-size-14pt;
  }

  &--horizontal {
    @apply flex-1;
    @apply flex-col;
    @apply text-center;
    @apply items-center;
  }

  &--horizontal &__icon {
    @apply w-1gs;
    @apply h-1gs;
    @apply min-w-1gs;
    @apply min-h-!gs;
    @apply mt-0;
    @apply mr-0;
    @apply mb-1ch;    
  }

  &--horizontal &__title, &--horizontal &__text {
    @apply max-w-3_5gs;
  }
}

.item__spacer {
  @apply bg-neutral-300;
  @apply w-1px;
  @apply h-80p;
}

</style>

<template>
  <section :class="`item ${horizontal ? 'item--horizontal' : ''}`">
    <h5 v-if="index" :class="`item__index ${indexClasses ?? ''}`">{{ index }}</h5>
    <img v-if="image" :src="image" :class="`item__image ${imageClasses ?? ''}`" />
    <SvgIcon v-else-if="icon" :name="icon" :class="`item__icon ${iconClasses ?? ''}`" />

    <div :class="`item__text ${textClasses ?? ''}`">
      <h4 v-if="title" :class="`item__title ${titleClasses ?? ''}`" v-html="title"/>
      <p v-if="text" :class="`item__contents ${textClasses ?? ''}`" v-html="text"/>
      <p v-else :class="`item__contents ${textClasses ?? ''}`"><slot/></p>
    </div>
  </section>
</template>
