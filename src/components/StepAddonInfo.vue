<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()
</script>
<template>
  <h2>Pick add-ons</h2>
  <p class="subtext">Add-ons help enhance your gaming experience.</p>

  <div class="container__input">
    <label
      v-for="addon in data.addons"
      :key="addon.name + addon.id"
      :class="{ checked: addon.value }"
    >
      <input type="checkbox" class="input" v-model="addon.value" />
      <div class="checkbox">
        <img src="/src//assets/images/icon-checkmark.svg" alt="" v-if="addon.value" />
      </div>
      <p class="title">{{ addon.nameCaps }}</p>
      <p class="description">{{ addon.description }}</p>
      <p class="price" v-if="data.isYearly">{{ addon.yearlyFormatted }}</p>
      <p class="price" v-else>{{ addon.monthlyFormatted }}</p>
    </label>
  </div>
</template>
<style scoped lang="scss">
.container__input {
  display: grid;
  gap: v.$spacing-0200;
}

.input {
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

label {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  column-gap: v.$spacing-0100;

  padding: v.$spacing-0200;

  border-radius: 8px;
  border: 1px v.$purple-200 solid;
}

.checkbox {
  height: 20px;
  width: 20px;

  border-radius: 4px;
  border: 1px v.$purple-200 solid;

  display: grid;
  justify-content: center;
  align-items: center;

  grid-column: 1;
  grid-row: 1/3;
}

label.checked {
  border-color: v.$purple-600;
  background-color: v.$blue-050;
}

label.checked .checkbox {
  background-color: v.$purple-600;
}

.title {
  @include f.responsive-type(v.$font-4-m, v.$font-3-m, v.$font-3-m);
  color: v.$blue-950;

  grid-column: 2;
  grid-row: 1;
}

.description {
  @include f.responsive-type(v.$font-5, v.$font-4-r, v.$font-4-r);
  color: v.$grey-500;

  grid-column: 2;
  grid-row: 2;
}

.price {
  @include f.responsive-type(v.$font-5, v.$font-4-r, v.$font-4-r);
  color: v.$purple-600;

  grid-column: 3;
  grid-row: 1/3;
}

@media (min-width: f.em(700)) {
  label {
    padding-inline: v.$spacing-0300;
  }
}
</style>
