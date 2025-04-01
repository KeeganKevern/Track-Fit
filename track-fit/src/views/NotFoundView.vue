<template>
  <div class="flex flex-col items-center mt-10 min-h-screen">
    <PageHeader textContent="404 - Page Not Found" />
    <p class="text-gray-300 mt-2">Oops! Looks like this page doesn't exist.</p>
    <RouterLink
      to="/SeeIt"
      aria-label="Return to the homepage"
      class="mt-4 border-2 p-2 rounded-md font-bold text-emerald-400 hover:bg-emerald-100 hover:text-slate-700"
    >
      Return to Home
    </RouterLink>
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Track Fit";
});
</script>
