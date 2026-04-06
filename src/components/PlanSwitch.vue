<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()
</script>
<template>
  <label :class="{ selected: data.isYearly }">
    <span class="month"> Monthly </span>
    <input type="checkbox" v-model="data.isYearly" />
    <div class="container__switch">
      <div class="switch"></div>
    </div>
    <span class="year"> Yearly </span>
  </label>
</template>
<style scoped lang="scss">
label {
  background-color: v.$blue-050;
  cursor: pointer;

  padding: v.$spacing-0200;

  border-radius: 8px;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: v.$spacing-0300;
}

input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); /* Fallback for older browsers */
  clip-path: inset(50%); /* Modern alternative */
  white-space: nowrap;
  border: 0;
}

.container__switch {
  height: 20px;
  width: 40px;
  background-color: v.$blue-950;

  border-radius: 9em;

  position: relative;

  display: inline-block;
}

.switch {
  height: 16px;
  width: 16px;
  background-color: v.$white;

  border-radius: 50%;

  position: absolute;
  top: 50%;
  translate: 2px -50%;

  transition: translate 0.3s ease-out;
}

label.selected .switch {
  translate: 22px -50%;
}

.month,
.year {
  @include f.responsive-type(v.$font-4-m, v.$font-4-m, v.$font-4-b);

  transition: color 0.3s ease-out;
}

label.selected .month,
.year {
  color: v.$grey-500;
}

.month,
label.selected .year {
  color: v.$blue-950;
}
</style>
