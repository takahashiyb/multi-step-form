<script setup lang="ts">
import MainPage from './components/MainPage.vue'
import StepAddonInfo from './components/StepAddonInfo.vue'
import StepNumber from './components/StepNumber.vue'
import StepPersonalInfo from './components/StepPersonalInfo.vue'
import StepPlanInfo from './components/StepPlanInfo.vue'
import { useDataStore } from './stores/data'

const data = useDataStore()

// function alert() {
//   window.alert('hello')
// }
</script>

<template>
  <!--  -->

  <MainPage>
    <template v-slot:steps>
      <li v-for="step in data.steps" :key="step.id">
        <StepNumber :id="step.id">
          <template v-slot:number>{{ step.id }}</template>
          <template v-slot:step>{{ step.id }}</template>
          <template v-slot:title>{{ step.description }}</template>
        </StepNumber>
      </li>
    </template>
    <template v-slot:info>
      <StepPersonalInfo v-if="data.step === 1" />
      <StepPlanInfo v-else-if="data.step === 2" />
      <StepAddonInfo v-else-if="data.step === 3"></StepAddonInfo>
    </template>
  </MainPage>
  <!--  -->
</template>

<style scoped lang="scss"></style>
