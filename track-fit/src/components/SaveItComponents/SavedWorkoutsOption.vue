<script setup>
import { defineProps } from "vue";

const props = defineProps({
  workoutName: String,
  required: true,
});
</script>
<template>
  <option class="bg-slate-200">
    {{ workoutName }}
  </option>
</template>
