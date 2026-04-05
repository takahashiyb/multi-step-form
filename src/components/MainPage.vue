<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import AdditionalButton from './AdditionalButton.vue'
import PrimaryButton from './PrimaryButton.vue'
import SecondaryButton from './SecondaryButton.vue'

const data = useDataStore()
</script>
<template>
  <main>
    <picture>
      <source srcset="@/assets/images/bg-sidebar-desktop.svg" media="(min-width: 45em)" />
      <img src="@/assets/images/bg-sidebar-mobile.svg" alt="" />
    </picture>
    <ul class="container__steps">
      <slot name="steps"></slot>
    </ul>
    <div class="container__info">
      <section>
        <slot name="info"> </slot>
      </section>
      <nav>
        <AdditionalButton class="back" @click="data.backStep" />
        <PrimaryButton class="next" @click="data.nextStep" v-if="data.step !== 4" />
        <SecondaryButton class="next" @click="data.completionStep" v-if="data.step === 4" />
      </nav>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  height: 100dvh;

  max-width: 940px;

  display: grid;
  grid-template-rows: repeat(8, 1fr);
}

picture {
  grid-column: 1;
  grid-row: 1/3;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.container__steps {
  list-style-type: none;

  padding: 0;

  display: flex;
  justify-content: center;
  column-gap: v.$spacing-0200;

  margin: v.$spacing-0400;

  grid-row: 1;
  grid-column: 1;
}

.container__info {
  grid-column: 1;
  grid-row: 2/-1;

  display: flex;
  flex-direction: column;
}

section {
  padding-top: v.$spacing-0400;
  padding-bottom: v.$spacing-0400;
  padding-inline: v.$spacing-0300;

  background-color: v.$white;

  margin-top: v.$spacing-0300;
  margin-inline: v.$spacing-0200;
  margin-bottom: v.$spacing-0300;

  border-radius: 10px;

  flex: 1;
}

nav {
  background-color: v.$white;

  padding: v.$spacing-0200;

  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
}

.back {
  grid-column: 1;
}

.next {
  grid-column: 2;
}

@media (min-width: f.em(700)) {
  main {
    max-height: 700px;
    background-color: v.$white;

    padding: v.$spacing-0200;

    border-radius: 16px;

    margin-inline: v.$spacing-0200;

    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  img {
    width: auto;
    border-radius: 12px;
  }

  .container__steps {
    flex-direction: column;
    row-gap: v.$spacing-0400;
    justify-content: start;

    padding-top: v.$spacing-0500;
    padding-bottom: v.$spacing-0500;
    padding-inline: v.$spacing-0300;
  }

  .container__steps,
  picture {
    grid-row: 1;
    grid-column: 1;
  }

  .container__info {
    grid-column: 2;
    grid-row: 1;

    padding: v.$spacing-0700;
  }

  section {
    background-color: transparent;

    padding: 0;

    margin: 0;
  }

  nav {
    background-color: transparent;
    padding: 0;
  }
}
</style>
