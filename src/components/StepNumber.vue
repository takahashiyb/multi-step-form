<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()

const props = defineProps<{
  id: number
}>()
</script>
<template>
  <!-- How it should look in the parent component
   <StepNumber>
    <template v-slot:number></template>
    <template v-slot:step></template>
    <template v-slot:title></template>
  </StepNumber> 
  -->
  <div class="step" :class="{ selected: props.id === data.step }">
    <div class="container__number">
      <span>
        <slot name="number"></slot>
      </span>
    </div>
    <p class="text__step">
      <span>STEP </span>
      <span>
        <slot name="step"></slot>
      </span>
    </p>
    <p class="text__title">
      <slot name="title"></slot>
    </p>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

.container__number {
  height: 32px;
  width: 32px;
  @include f.flat-type(v.$font-4-b);
  color: v.$white;

  border: 1px solid v.$white;
  border-radius: 50%;

  display: grid;
  place-content: center;

  grid-column: 1;
  grid-row: 1/-1;
}

.selected .container__number {
  color: v.$blue-950;
  background-color: v.$blue-300;
  border-color: v.$blue-300;
}

.text__step,
.text__title {
  display: none;
}

@media (min-width: f.em(700)) {
  .step {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: min-content 1fr;
    align-items: center;
    column-gap: v.$spacing-0200;
  }

  .text__step,
  .text__title {
    display: inline-block;
  }
  .text__step {
    @include f.flat-type(v.$font-5);
    color: v.$blue-300;

    grid-column: 2;
    grid-row: 1;
  }

  .text__title {
    @include f.flat-type(v.$font-4-b);
    color: v.$white;

    grid-column: 2;
    grid-row: 2;
  }
}
</style>
