<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import { ref, useId } from 'vue'

const data = useDataStore()

const props = defineProps<{
  type: 'text' | 'email' | 'tel'
  placeholder: string | ''
}>()

const id = useId()

const error = ref<string | null>(null)

const value = ref('')

function checkValidity(event: Event) {
  const input = event.target as HTMLInputElement

  if (input.validity.valueMissing) {
    return (error.value = 'This field is required')
  }

  if (input.validity.typeMismatch) {
    return (error.value = 'requires valid Email Address')
  }

  if (input.validity) {
    error.value = input.validationMessage
  }

  data.updatePersonalInfo(props.type, input.value)
}

function resetField() {
  error.value = null

  data.updatePersonalInfo(props.type, '')
}
</script>

<template>
  <div class="container__input" :class="{ error: error }">
    <label :for="id"><slot></slot></label>
    <span class="error-message" v-if="error">{{ error }}</span>
    <input
      :id="id"
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="value"
      required
      @blur="checkValidity"
      @focus="resetField"
    />
  </div>
</template>

<style scoped lang="scss">
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
  @include f.flat-type(v.$font-4-b);
  color: v.$red-500;
  white-space: nowrap;

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
