<script setup lang="ts">
import { ref, useId } from 'vue'

const props = defineProps<{
  type: 'text' | 'email' | 'tel'
  placeholder: string
}>()

const id = useId()

const isError = ref<boolean>(false)
</script>
<template>
  <!-- 
  <TextField type="" placeholder="">
    <slot></slot>
  </TextField>
  -->
  <div class="container__input" :class="{ error: isError }">
    <label :for="id"><slot></slot></label>
    <span class="error-message" v-if="isError">Error message</span>
    <input :id="id" :type="props.type" required :placeholder="props.placeholder" />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

.container__input {
  display: grid;
  grid-template-columns: min-content min-content;
  gap: v.$spacing-0100;
}

label {
  @include f.flat-type(v.$font-5);
  color: v.$blue-950;

  grid-column: 1;
  grid-row: 1;
}

input {
  @include f.flat-type(v.$font-4-m);
  color: v.$blue-950;

  padding-top: v.$spacing-0100;
  padding-bottom: v.$spacing-0100;
  padding-inline: v.$spacing-0200;

  border: 1px solid v.$purple-200;
  border-radius: 4px;
  outline-color: v.$blue-700;

  grid-column: 1/-1;
  grid-row: 2;
}

input::placeholder {
  color: v.$purple-200;
}

input:not(:placeholder-shown) {
  border-color: v.$blue-700;
}

.container__input.error input {
  border-color: v.$red-500;
}

.error-message {
  @include f.flat-type(v.$font-4-b);
  color: v.$red-500;
  white-space: nowrap;

  grid-column: 2;
  grid-row: 1;
  justify-self: end;
}

@media (min-width: f.em(700)) {
  label {
    @include f.flat-type(v.$font-4-r);
  }

  input {
    @include f.flat-type(v.$font-3-m);
  }
}
</style>
