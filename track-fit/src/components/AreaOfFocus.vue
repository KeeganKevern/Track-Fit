<script setup>
import { defineProps } from "vue";

const props = defineProps({
  muscleName: String,
  imageSrc: String,
});
</script>

<template>
  <div
    @click="$emit('fetch-exercise-data', muscleName)"
    id="areaOfFocus"
    class="border-2 flex flex-col items-center m-2 p-4 border-gray-400 rounded-2xl w-2/5"
    role="button"
    tabindex="0"
  >
    <img
      :src="imageSrc"
      :alt="muscleName"
      :aria-label="'Image of ' + muscleName"
    />
    <h3 class="text-gray-400 text-center">
      {{ muscleName }}
    </h3>
  </div>
</template>
