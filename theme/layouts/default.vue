<script setup>
import Logo from '../assets/nearform-logo.svg'

const props = defineProps({
  main: String,
  secondary: String,
  items: Array,
  horizontalItems: Boolean,
  image: String,
  imageClasses: String,
  sideImage: String,
  sideImageClasses: String,
  sideBackground: String,
  sideBackgroundClasses: String,
  sideText: String,
  sideTextClasses: String,
  icon: String,
  iconClasses: String,
  sequence: String,
  sequenceClasses: String,
  classes: String,
  logo: String
})
</script>

<template>
  <div class="nf-slide-container">
    <article
      v-if="!items"
      :class="`nf-slide min-w-5gs p-1bp flex-col ${sideText ? 'flex-2' : 'flex-1'} ${classes ?? ''}`"
    >
      <h1 v-html="main" />

      <h4 v-if="secondary" class="text-justify" v-html="secondary" />
      <div class="text-justify"><slot /></div>

      <div v-if="image" class="flex flex-1 items-center justify-center">
        <img
          v-if="image"
          :src="image"
          :class="`max-w-8gs ${secondary ? 'max-h-2_5gs' : 'max-h-3_5gs'} mx-auto ${imageClasses ?? ''}`"
        />
      </div>
    </article>

    <article
      v-if="items"
      :class="`nf-slide min-w-5gs p-1bp flex-col ${sideText ? 'flex-2' : 'flex-1'} ${classes ?? ''}`"
    >
      <h1 v-html="main" />

      <h4 v-if="secondary" class="text-justify" v-html="secondary" />
      <div class="text-justify"><slot /></div>

      <div :class="`flex ${horizontalItems ? 'flex-1 items-center gap-x-0_3gs' : 'flex-col gap-y-0_3gs'}`">
        <template v-for="(item, index) in items">
          <div v-if="horizontalItems && index > 0" class="item__spacer"></div>

          <Item
            :horizontal="horizontalItems"
            :index="item.index"
            :icon="item.icon"
            :title="item.title"
            :text="item.text"
            indexClasses="text-nf-neon-blue"
            iconClasses="text-nf-neon-blue"
          />
        </template>
      </div>
    </article>

    <img v-if="sideImage" :src="sideImage" :class="`max-w-4gs max-h-4gs mr-2_5bp ${sideImageClasses ?? ''}`" />
    <div v-else-if="sideBackground" class="grid-b w-5gs h-full overflow-hidden">
      <img :src="sideBackground" :class="`h-full max-w-none ${sideBackgroundClasses ?? ''}`" />
    </div>
    <div v-else-if="sideText" :class="`flex flex-1 items-center p-1bp h-full text-justify ${sideTextClasses ?? ''}`">
      <h4 v-html="sideText" class="m-0" />
    </div>

    <h2 v-if="sequence" :class="`sequence ${sequenceClasses ?? ''}`">{{ sequence }}</h2>
    <SvgIcon v-else-if="icon" :name="icon" :class="`callout-icon ${iconClasses}`" />
    <Logo :class="`logo logo--${logo ?? 'black'}`" />
  </div>
</template>
