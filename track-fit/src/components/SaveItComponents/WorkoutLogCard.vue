<script setup>
import LogEntryList from "./LogEntryList.vue";
import ShowDeleteLogButton from "./ShowDeleteLogButton.vue";
import LogNewEntryButton from "./LogNewEntryButton.vue";
import CreateALogForm from "./CreateALogForm.vue";
import DeleteEntireLogButton from "./DeleteEntireLogButton.vue";
import { ref } from "vue";
import { useSavedWorkouts } from "@/globalStore/savedWorkoutsStore";

const savedWorkoutsStore = useSavedWorkouts();
const addWorkout = savedWorkoutsStore.addWorkout;
const deleteEntireLog = savedWorkoutsStore.deleteEntireLog;

function submitLog(formData) {
  //This hides the form if no data has been entered
  if (formData.length === 0) {
    showForm.value = false;
    return;
  }

  //This defaults to todays date if no date has been eneterd
  formData[0] = formData[0].toUpperCase();
  if (formData[5] === undefined) {
    formData[5] = new Date().toISOString().split("T")[0];
  }
  addWorkout(formData);
  showForm.value = false;
}
const showForm = ref(false);
const deleteButtonVisible = ref(false);
const showDeleteButtonText = ref("DELETE ENTIRE LOG");
function logAWorkout() {
  //After clicking log workout button, this hides the form
  showForm.value === true ? (showForm.value = false) : (showForm.value = true);
}
function showDelete() {
  if (deleteButtonVisible.value === true) {
    deleteButtonVisible.value = false;
    showDeleteButtonText.value = "DELETE ENTIRE LOG";
  } else {
    deleteButtonVisible.value = true;
    showDeleteButtonText.value = "HIDE DELETE BUTTON";
  }
}
function confirmDeleteLog() {
  deleteEntireLog();
}
</script>

<template>
  <ul
    class="flex flex-col gap-2 max-h-120 min-h-3/4 w-5/6 p-2 bg-slate-700 rounded-sm overflow-scroll lg:overflow-auto"
  >
    <LogNewEntryButton
      class="list-none flex justify-around items-center w-full py-3 bg-green-200 text-slate-700 font-bold rounded-sm hover:bg-emerald-700 hover:text-white"
      @logAWorkout="logAWorkout"
    />
    <CreateALogForm v-if="showForm" @submitLog="submitLog" />
    <LogEntryList />
    <DeleteEntireLogButton
      v-if="deleteButtonVisible"
      class="text-black font-bold text-2xl bg-red-500 min-h-80 rounded-2xl shadow-md border-2 p-2"
      @click="confirmDeleteLog"
    />
    <ShowDeleteLogButton
      @showDelete="showDelete"
      :innerText="showDeleteButtonText"
    />
  </ul>
</template>
