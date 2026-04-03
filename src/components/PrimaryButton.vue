<script setup lang="ts"></script>
<template>
  <button>Next Step</button>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

button {
  color: v.$white;
  background-color: v.$blue-950;

  padding-top: v.$spacing-0100;
  padding-bottom: v.$spacing-0100;
  padding-inline: v.$spacing-0200;

  border-radius: 4px;
  border: none;
}

button:hover {
  background-color: v.$blue-700;
}
</style>
