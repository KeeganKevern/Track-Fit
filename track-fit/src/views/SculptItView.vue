<script setup>
import PageHeader from "../components/PageHeader.vue";
import AreaOfFocus from "../components/AreaOfFocus.vue";
import SuggestedExercisesCard from "../components/SuggestedExercisesCard.vue";
import SuggestedExercise from "../components/SuggestedExercise.vue";

import { provide, ref, onMounted } from "vue";

onMounted(() => {
  document.title = "Sculpt It!";
});

let exerciseData = ref(null);

const areasOfFocusData = [
  {
    muscleName: "Pectorals",
    imageSrc: "../src/assets/icons/chest.svg",
  },
  {
    muscleName: "Upper Back",
    imageSrc: "../src/assets/icons/back.svg",
  },
  {
    muscleName: "Traps",
    imageSrc: "../src/assets/icons/back.svg",
  },
  {
    muscleName: "Lats",
    imageSrc: "../src/assets/icons/back.svg",
  },
  {
    muscleName: "Biceps",
    imageSrc: "../src/assets/icons/arm.svg",
  },
  {
    muscleName: "Triceps",
    imageSrc: "../src/assets/icons/arm.svg",
  },
  {
    muscleName: "Delts",
    imageSrc: "../src/assets/icons/arm.svg",
  },
  {
    muscleName: "Forearms",
    imageSrc: "../src/assets/icons/arm.svg",
  },
  {
    muscleName: "Quads",
    imageSrc: "../src/assets/icons/leg.svg",
  },
  {
    muscleName: "Hamstrings",
    imageSrc: "../src/assets/icons/leg.svg",
  },
  {
    muscleName: "Glutes",
    imageSrc: "../src/assets/icons/leg.svg",
  },
  {
    muscleName: "Calves",
    imageSrc: "../src/assets/icons/leg.svg",
  },
  {
    muscleName: "Abs",
    imageSrc: "../src/assets/icons/chest.svg",
  },
  {
    muscleName: "Cardiovascular System",
    imageSrc: "../src/assets/icons/heart.svg",
  },
];

const showExerciseCard = ref(false);

function fetchExerciseData(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  fetch(`/api/exercisedb/muscle?query=${searchTerm}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      exerciseData.value = data.data.exercises;
    })
    .catch((error) => {
      console.error("Error fetching API:", error);
      res.status(500).json({ error: "Failed to fetch data from server" });
    });
  showExerciseCard.value = true;
}

provide("exerciseData", exerciseData);
</script>

<template>
  <div class="grid grid-row-2" @click="showExerciseCard = false">
    <section class="row-start-1 flex flex-col justify-center items-center">
      <PageHeader textContent="Sculpt It" />
      <p class="italic mb-2 text-gray-200">Select an area of focus</p>

      <SuggestedExercisesCard
        v-if="showExerciseCard"
        @click.self="showExerciseCard = false"
      >
        <SuggestedExercise />
      </SuggestedExercisesCard>
    </section>
    <section
      class="row-start-2 flex flex-wrap justify-evenly lg:justify-center"
    >
      <AreaOfFocus
        v-for="area in areasOfFocusData"
        :key="area.muscleName"
        @fetch-exercise-data="fetchExerciseData"
        :muscleName="area.muscleName"
        :imageSrc="area.imageSrc"
        class="cursor-pointer lg:w-80 hover:bg-emerald-700"
        @click.stop
      />
    </section>
  </div>
</template>
