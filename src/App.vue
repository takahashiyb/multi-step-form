<script setup lang="ts">
import MainPage from './components/MainPage.vue'
import StepNumber from './components/StepNumber.vue'
import PlanCard from './components/PlanCard.vue'
import { useDataStore } from './stores/data'

const data = useDataStore()

function alert() {
  window.alert('hello')
}
</script>

<template>
  <!--  -->

  <MainPage>
    <template v-slot:steps>
      <li v-for="step in data.steps">
        <StepNumber :id="step.id">
          <template v-slot:number>{{ step.id }}</template>
          <template v-slot:step>{{ step.id }}</template>
          <template v-slot:title>{{ step.description }}</template>
        </StepNumber>
      </li>
    </template>
    <template v-slot:info> </template>
  </MainPage>
  <!--  -->
</template>

<style scoped lang="scss"></style>
