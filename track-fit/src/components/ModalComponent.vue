<template>
  <div
    v-if="isOpen"
    @click="handleOutsideClick"
    class="fixed z-1 inset-0 flex items-center justify-center mixed-blend-darken"
  >
    <div
      class="flex flex-col gap-2 bg-red-800 border-2 border-red-900 p-6 rounded-md shadow-lg relative w-11/12 max-w-lg"
    >
      <p class="text-black">
        Clicking the entry again will permenantly delete it.
      </p>
      <button
        @click="$emit('closeModal')"
        class="rounded-sm text-black hover:text-white hover:border-white border-2 p-1 text-md cursor-pointer"
      >
        I UNDERSTAND
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: Boolean, // Control modal visibility
});

const emit = defineEmits(["closeModal"]);

// Close modal when clicking outside content
const handleOutsideClick = (event) => {
  if (event.target.classList.contains("bg-black")) {
    emit("closeModal");
  }
};
</script>
