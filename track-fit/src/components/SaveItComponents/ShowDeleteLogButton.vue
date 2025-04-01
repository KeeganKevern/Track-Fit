<script setup>
import { defineProps } from "vue";

defineProps({
  innerText: String,
});
</script>
<template>
  <button
    @click="$emit('showDelete')"
    class="bg-red-300 p-2 rounded-sm cursor-pointer hover:bg-red-600 hover:font-bold"
  >
    {{ innerText }}
  </button>
</template>
