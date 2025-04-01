<script setup>
import { inject } from "vue";

let exerciseData = inject("exerciseData");
const defaultImagePath = "../src/assets/icons/search.svg";
function search(e) {
  let query = encodeURIComponent(
    e.target.innerText.toLowerCase() + " exercise"
  );
  window.open("https://www.google.com/search?q=" + query, "_blank");
}
</script>

<template>
  <a
    class="flex justify-between items-center w-full p-2 bg-slate-400 rounded-sm cursor-pointer hover:bg-emerald-800"
    v-for="exercises of exerciseData"
  >
    <h3 @click="search">{{ exercises.name.toUpperCase() }}</h3>
    <img
      :src="exercises.gifUrl"
      :srcset="defaultImagePath"
      :alt="exercises.name"
      class="w-16"
    />
  </a>
</template>
