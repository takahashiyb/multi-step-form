<script setup lang="ts"></script>
<template>
  <button>Confirm</button>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

button {
  color: v.$white;
  background-color: v.$purple-600;
  @include f.responsive-type(v.$font-4-m, v.$font-3-m, v.$font-3-m);

  padding-top: v.$spacing-0100;
  padding-bottom: v.$spacing-0100;
  padding-inline: v.$spacing-0200;

  border-radius: 4px;
  border: none;
}

button:hover {
  background-color: v.$purple-400;
}
</style>
