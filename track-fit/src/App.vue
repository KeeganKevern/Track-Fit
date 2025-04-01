<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper h-2/6 flex flex-col items-center p-4">
      <h1 class="text-4xl font-extrabold tracking-tight">Track Fit</h1>
      <nav class="w-full flex flex-wrap justify-center gap-12 m-6">
        <RouterLink to="/SculptIt" aria-label="Go to Sculpt It"
          >Sculpt It</RouterLink
        >
        <RouterLink to="/SaveIt" aria-label="Go to Save It">Save It</RouterLink>
        <RouterLink to="/SeeIt" aria-label="Go to See It">See It</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0.25rem 1rem;
}
</style>
