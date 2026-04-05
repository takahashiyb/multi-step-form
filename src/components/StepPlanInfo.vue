<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import PlanCard from './PlanCard.vue'
import PlanSwitch from './PlanSwitch.vue'

const data = useDataStore()
</script>
<template>
  <div>
    <h2>Select your plan</h2>
    <p class="subtext">You have the option of monthly or yearly billing.</p>
    <div class="container__error">
      <p class="error-message" v-if="data.tierError">Selecting a Tier is required</p>
    </div>
    <ul radiogroup="plan">
      <li v-for="plan in data.plans" :key="plan.id">
        <label>
          <input
            class="radio"
            type="radio"
            name="plan"
            :value="plan.id"
            v-model="data.tier"
            @click="data.tierSelected"
          />
          <PlanCard :name="plan.name" :image="plan.icon" :selected="plan.id === data.tier">
            <template v-slot:title>{{ plan.nameCaps }} </template>
            <template v-slot:year>{{ plan.yearlyFormatted }}</template>
            <template v-slot:month>{{ plan.monthlyFormatted }}</template>
            <template v-slot:free>{{ plan.free }}</template>
          </PlanCard>
        </label>
      </li>
    </ul>
    <PlanSwitch />
  </div>
</template>
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;

  padding-bottom: v.$spacing-0400;

  display: flex;
  flex-direction: column;
  row-gap: v.$spacing-0100;
}

.radio {
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

.error-message {
  text-align: end;
}

.container__error {
  height: 16px;
  margin-bottom: v.$spacing-0100;
}

@media (min-width: f.em(1000)) {
  ul {
    flex-direction: row;
    column-gap: v.$spacing-0200;
  }

  li {
    flex: 1;
  }
}
</style>
