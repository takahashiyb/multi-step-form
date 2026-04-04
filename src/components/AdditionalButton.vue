<script setup lang="ts"></script>
<template>
  <button type="button">Go Back</button>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

button {
  color: v.$blue-950;
  background-color: transparent;
  @include f.flat-type(v.$font-3-m);

  padding-top: v.$spacing-0100;
  padding-bottom: v.$spacing-0100;
  padding-inline: v.$spacing-0200;

  border: none;
}

button:hover {
  color: v.$grey-500;
}
</style>
