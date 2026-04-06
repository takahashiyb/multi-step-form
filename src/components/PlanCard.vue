<script setup lang="ts">
import { useDataStore } from '@/stores/data'

const data = useDataStore()

const props = defineProps<{
  name: string // for the icon's alt
  image: string
  selected: boolean
}>()

const imagePath = new URL(props.image, import.meta.url).href
</script>

<template>
  <!-- 
      <PlanCard :name="plan.name" :image="plan.icon" v-for="plan in data.plans">
        <template v-slot:title>{{ plan.nameCaps }} </template>
        <template v-slot:year>{{ plan.yearlyFormatted }}</template>
        <template v-slot:month>{{ plan.monthlyFormatted }}</template>
        <template v-slot:free>{{ plan.free }}</template>
      </PlanCard>
 -->
  <div class="card" :class="{ selected: props.selected, yearly: data.isYearly }">
    <img :src="imagePath" :alt="`icon of ${props.name}`" />
    <p class="text__title"><slot name="title"></slot></p>
    <p class="text__price" v-if="data.isYearly"><slot name="year"></slot></p>
    <p class="text__price" v-else><slot name="month"></slot></p>
    <p class="text__free"><slot name="free" v-if="data.isYearly"></slot></p>
  </div>
</template>
<style scoped lang="scss">
.card {
  cursor: pointer;

  padding-inline: v.$spacing-0200;
  padding-top: v.$spacing-0300;
  padding-bottom: v.$spacing-0300;

  border: 1px v.$grey-500 solid;
  border-radius: 8px;

  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: repeat(3, 20px);
  align-items: center;
  column-gap: v.$spacing-0200;
}

.card:hover {
  border-color: v.$purple-600;
}

.card.selected {
  background-color: v.$blue-050;

  border-color: v.$purple-600;
}

.card img {
  grid-column: 1;
  grid-row: 1/4;
}

.card .text__title {
  @include f.flat-type(v.$font-3-m);
  color: v.$blue-950;

  grid-column: 2;
  grid-row: 1/3;
}

.card.yearly .text__title {
  grid-row: 1;
}

.card .text__price {
  @include f.flat-type(v.$font-4-r);
  color: v.$grey-500;

  grid-column: 2;
  grid-row: 2/4;
}

.card.yearly .text__price {
  grid-row: 2/3;
}

.card .text__free {
  @include f.flat-type(v.$font-5);
  color: v.$blue-950;

  grid-column: 2;
  grid-row: 3;
}

@media (min-width: f.em(700)) {
  .card {
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  .card.yearly {
    grid-template-rows: repeat(2, 1fr);
  }

  .card img {
    grid-row: 1/3;
  }

  .card .text__title {
    grid-column: 2;
    grid-row: 1;
  }

  .card .text__price {
    grid-column: 2;
    grid-row: 2;
  }

  .card .text__free {
    grid-column: 3;
    grid-row: 1/3;
  }
}

@media (min-width: f.em(1000)) {
  .card,
  .card.yearly {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(3, 20px);
  }

  .card img {
    grid-column: 1;
    grid-row: 1;

    margin-bottom: v.$spacing-0500;
  }

  .card.yearly img {
    grid-column: 1;
    grid-row: 1;

    margin-bottom: v.$spacing-0500;
  }

  .card .text__title,
  .card.yearly .text__title {
    grid-column: 1;
    grid-row: 2;
  }

  .card .text__price,
  .card.yearly .text__price {
    grid-column: 1;
    grid-row: 3;
  }

  .card .text__free {
    grid-column: 1;
    grid-row: 4;
  }
}
</style>
