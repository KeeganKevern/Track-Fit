<script setup>
import LogEntryDataDiv from "../SaveItComponents/LogEntryDataDiv.vue";
import { useSavedWorkouts } from "@/globalStore/savedWorkoutsStore";
import { ref } from "vue";
import ModalComponent from "@/components/ModalComponent.vue";

let savedWorkoutsStore = useSavedWorkouts();
savedWorkoutsStore.deleteIndividualLog;

const confirmDelete = ref("");
const showModal = ref(false);
const logRefs = ref([]);
function promptDeleteEntry(index, event) {
  const selectedLog = logRefs.value[index];
  if (confirmDelete.value === index) {
    savedWorkoutsStore.deleteIndividualLog(index);
    confirmDelete.value = null;
  } else {
    confirmDelete.value = index;
    showModal.value = true;
  }
}
</script>
<template>
  <ModalComponent :isOpen="showModal" @closeModal="showModal = false" />
  <li
    v-for="(logs, index) in savedWorkoutsStore.workoutsToView"
    :key="index"
    ref="logRefs"
    :class="{
      'bg-red-700': confirmDelete === index,
      'bg-slate-400': confirmDelete !== index,
      'blur-sm': showModal,
    }"
    class="list-none flex justify-around items-center w-full py-3 bg-slate-400 rounded-sm cursor-pointer hover:bg-emerald-700"
    @click="promptDeleteEntry(index, $event)"
  >
    <LogEntryDataDiv :logValue="logs.workoutName" />
    <LogEntryDataDiv :logCategory="'kgs'" :logValue="logs.weight" />
    <LogEntryDataDiv :logCategory="'reps'" :logValue="logs.reps" />
    <LogEntryDataDiv :logValue="logs.date.slice(1, -1)" />
  </li>
</template>
