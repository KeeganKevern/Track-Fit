<template>
  <form action="" class="flex flex-wrap justify-around gap-2 p-2">
    <input
      v-for="(input, index) in inputTypes"
      :key="index"
      v-model="formData[index]"
      :type="input.type"
      :placeholder="input.placeholder"
      class="w-2/5"
    />
    <button
      class="bg-green-200 text-center p-2 rounded-sm cursor-pointer w-3/4 text-slate-700 font-bold hover:bg-emerald-700 hover:text-white"
      @click="$emit('submitLog', formData)"
      aria-label="Submit Log"
    >
      Add Log
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const inputTypes = [
  { type: "text", placeholder: "Workout Name..." },
  { type: "text", placeholder: "Weight(kgs)..." },
  { type: "text", placeholder: "Reps..." },
  { type: "text", placeholder: "Distance(km)..." },
  { type: "text", placeholder: "Duration(hh:mm:ss)..." },
  { type: "date", placeholder: "Date..." },
];
const formData = ref([]);
</script>
<style></style>
