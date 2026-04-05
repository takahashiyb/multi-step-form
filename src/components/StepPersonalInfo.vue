<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()
</script>
<template>
  <h2>Personal info</h2>
  <p class="subtext">Please provide your name, email address, and phone number.</p>

  <div class="group__input">
    <div
      class="container__input"
      :class="{ error: info.error !== '' }"
      v-for="info in Object.values(data.personalInfo)"
      :key="info.id"
    >
      <label :for="info.label.toLowerCase()">{{ info.label }}</label>
      <span class="error-message">{{ info.error }}</span>
      <input
        :id="info.id"
        :type="info.type"
        :placeholder="info.placeholder"
        required
        v-model="info.value"
        @blur="data.checkValidity($event, info.id)"
        @focus="data.resetField(info.id)"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.group__input {
  display: flex;
  flex-direction: column;
  gap: v.$spacing-0200;
}

.container__input {
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: v.$spacing-0100;
}

label {
  @include f.responsive-type(v.$font-5, v.$font-4-r, v.$font-4-r);
  color: v.$blue-950;

  grid-column: 1;
  grid-row: 1;
}

input {
  @include f.responsive-type(v.$font-4-m, v.$font-3-m, v.$font-3-m);
  color: v.$blue-950;

  padding-top: v.$spacing-0100;
  padding-bottom: v.$spacing-0100;
  padding-inline: v.$spacing-0200;

  border: 1px solid v.$purple-200;
  border-radius: 4px;
  outline-color: v.$purple-600;

  grid-column: 1/-1;
  grid-row: 2;
}

input::placeholder {
  color: v.$purple-200;
}

input:not(:placeholder-shown) {
  border-color: v.$purple-600;
}

.container__input.error input {
  border-color: v.$red-500;
}

.error-message {
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
}

@media (min-width: f.em(700)) {
  input {
    @include f.flat-type(v.$font-3-m);
  }
}
</style>
