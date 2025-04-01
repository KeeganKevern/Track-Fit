<script setup>
import SavedWorkoutsOption from "./SavedWorkoutsOption.vue";
import { ref, defineEmits, watch } from "vue";
import { useSavedWorkouts } from "@/globalStore/savedWorkoutsStore";

const emit = defineEmits(["generateGraphFromChoice"]);
const savedWorkoutsStore = useSavedWorkouts();
const workoutNamesList = ref([]);

updateNamesList();

//THIS GETS A LIST OF WORKOUT NAMES FROM SAVED WORKOUTS
function updateNamesList() {
  for (let workout of savedWorkoutsStore.savedWorkouts) {
    //if workout name is not included in array, push.
    if (
      !workoutNamesList.value.some(
        (entry) => entry.workoutName === workout.workoutName
      )
    ) {
      workoutNamesList.value.push({ workoutName: workout.workoutName });
    }
  }
}

watch(
  () => savedWorkoutsStore.savedWorkouts,
  () => {
    updateNamesList();
  }
);

const selectedWorkout = ref(""); //Removing this removes the default option on startup

function changeHandler(selectedWorkout) {
  returnArrayOfSelectedWorkout(selectedWorkout.target.value);
  updateNamesList();
  console.log(selectedWorkout);
  emit("generateGraphFromChoice", selectedWorkout.target.value);
}
//THIS RETURNS AN ARRAY OF WORKOUT SELECTED FROM STORE
const returnArrayOfSelectedWorkout =
  savedWorkoutsStore.returnArrayOfSelectedWorkout;
</script>
<template>
  <select
    v-model="selectedWorkout"
    class="w-1/2 p-4 font-medium outline-none"
    id="selectedWorkout"
    @change="changeHandler"
  >
    <option value="" disabled>Select A Workout</option>
    <SavedWorkoutsOption
      v-for="workouts of workoutNamesList"
      :workoutName="workouts.workoutName"
    />
  </select>
</template>
