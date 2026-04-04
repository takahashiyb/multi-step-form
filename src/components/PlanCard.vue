<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  name: string // for the icon's alt
  image: string
}>()

const imagePath = new URL(props.image, import.meta.url).href

const isSelected = ref<boolean>(false)
</script>

<template>
  <!-- 
  <PlanCard name="" image="">
    <template v-slot:title></template>
    <template v-slot:price></template>
  </PlanCard>
 -->
  <div class="card" :class="{ selected: isSelected }">
    <img v-bind:src="imagePath" :alt="`icon of ${props.name}`" />
    <p class="text__title"><slot name="title"></slot></p>
    <p class="text__price"><slot name="price"></slot></p>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

.card {
  padding-inline: v.$spacing-0200;
  padding-top: v.$spacing-0300;
  padding-bottom: v.$spacing-0300;

  border: 1px v.$grey-500 solid;
  border-radius: 8px;

  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: v.$spacing-0200;
}

.card.selected {
  background-color: v.$blue-050;

  border-color: v.$purple-600;
}

img {
  grid-column: 1;
  grid-row: 1/3;
}

p {
  grid-column: 2;
}

.text__title {
  @include f.flat-type(v.$font-3-m);
  color: v.$blue-950;
}

.text__price {
  @include f.flat-type(v.$font-4-r);
  color: v.$grey-500;
}

@media (min-width: f.em(1000)) {
  .card {
    grid-template-columns: 1fr;
  }

  img {
    margin-bottom: v.$spacing-0500;
  }

  p {
    grid-column: 1;
  }
}
</style>
