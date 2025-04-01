<script setup>
import { defineProps } from "vue";

const props = defineProps({
  textContent: String,
});
</script>

<template>
  <h1 class="text-2xl font-bold tracking-tight leading-tight mb-4">
    {{ textContent }}
  </h1>
</template>
