<script setup>
import { defineProps } from "vue";

const props = defineProps({
  graphSrc: String,
  required: true,
});
</script>

<template>
  <img :src="graphSrc" class="p-2 my-2" />
</template>
