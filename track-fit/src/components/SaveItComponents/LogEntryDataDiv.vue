<script setup>
import { defineProps } from "vue";

const props = defineProps({
  logValue: {
    type: String,
    required: true,
  },
  logCategory: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <p>{{ logValue }}{{ logCategory }}</p>
</template>
