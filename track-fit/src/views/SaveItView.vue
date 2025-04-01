<template>
  <div class="grid grid-row-2">
    <section
      class="row-start-1 flex flex-col justify-center items-center lg:px-60"
    >
      <PageHeader textContent="Save It" />
      <p class="italic mb-2 text-gray-200">Log your workout</p>
    </section>
    <section class="row-start-2 flex flex-col items-center lg:px-60">
      <SavedWorkoutsDropdown />
      <WorkoutLogCard />
    </section>
  </div>
</template>

<script setup>
import PageHeader from "../components/PageHeader.vue";
import SavedWorkoutsDropdown from "../components/SaveItComponents/SavedWorkoutsDropdown.vue";
import WorkoutLogCard from "@/components/SaveItComponents/WorkoutLogCard.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Save It!";
});
</script>
