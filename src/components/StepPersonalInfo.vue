<script setup lang="ts">
import TextField from './TextField.vue'
</script>
<template>
  <h2>Personal info</h2>
  <p class="subtext">Please provide your name, email address, and phone number.</p>

  <div>
    <TextField type="text" placeholder="e.g. Stephen King">Name</TextField>
    <TextField type="email" placeholder="e.g. stephenking@lorem.com">Email Address</TextField>
    <TextField type="tel" placeholder="e.g. +1 234 567 890">Phone Number</TextField>
  </div>
</template>
<style scoped lang="scss">
h2 {
  padding-bottom: v.$spacing-0100;
}

.subtext {
  padding-bottom: v.$spacing-0500;
}

div {
  display: flex;
  flex-direction: column;
  gap: v.$spacing-0200;
}
</style>
