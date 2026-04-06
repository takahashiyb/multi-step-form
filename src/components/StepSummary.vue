<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()
</script>
<template>
  <h2>Finishing up</h2>
  <p class="subtext">Double-check everything looks OK before confirming.</p>
  <section class="section__summary">
    <div class="container__price--tier">
      <p class="tier__name">
        {{ data.plans[data.tier!]?.nameCaps }} {{ data.isYearly ? '(Yearly)' : '(Monthly)' }}
      </p>
      <p class="tier__price" v-if="data.isYearly">{{ data.plans[data.tier!]?.yearlyFormatted }}</p>
      <p class="tier__price" v-else>{{ data.plans[data.tier!]?.monthlyFormatted }}</p>
      <button class="tier__button" @click="data.clickChangeButton">Change</button>
    </div>
    <hr />
    <div
      class="container__price"
      v-for="addon in data.addons.filter((i) => i.value)"
      :key="addon.name + addon.id"
    >
      <p class="name">{{ addon.nameCaps }}</p>
      <p class="price" v-if="data.isYearly">{{ addon.yearlyFormatted }}</p>
      <p class="price" v-else>{{ addon.monthlyFormatted }}</p>
    </div>
  </section>
  <section class="section__total" v-if="data.isYearly">
    <p class="name">Total (per year)</p>
    <p class="total__price">
      {{ data.showTotal() }}
    </p>
  </section>
  <section class="section__total" v-else>
    <p class="name">Total (per month)</p>
    <p class="total__price">
      {{ data.showTotal() }}
    </p>
  </section>
</template>
<style scoped lang="scss">
.section__summary {
  background-color: v.$blue-050;

  padding: v.$spacing-0300;

  display: grid;
  gap: v.$spacing-0200;
}

.section__total,
.container__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section__total {
  padding-top: v.$spacing-0400;
  padding-inline: v.$spacing-0300;
  padding-bottom: v.$spacing-0400;
}

.container__price--tier {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
}

.tier__name {
  @include f.responsive-type(v.$font-4-m, v.$font-3-m, v.$font-3-m);

  grid-column: 1;
  grid-row: 1;
}

.tier__price {
  @include f.responsive-type(v.$font-4-b, v.$font-3-m, v.$font-3-m);

  grid-column: 2;
  grid-row: 1/3;
}

.tier__button {
  @include f.flat-type(v.$font-4-r);
  background-color: transparent;
  color: v.$grey-500;
  text-align: start;
  cursor: pointer;

  padding: 0;

  border: none;

  grid-column: 1;
  grid-row: 2;
}

.name {
  @include f.flat-type(v.$font-4-r);
  color: v.$grey-500;
}

.price {
  @include f.flat-type(v.$font-4-r);
  color: v.$blue-950;
}

.total__price {
  @include f.responsive-type(v.$font-3-m, v.$font-2, v.$font-2);
  color: v.$purple-600;
}
</style>
