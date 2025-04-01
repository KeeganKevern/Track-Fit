<template>
  <button
    @click="$emit('deleteEntireLog')"
    aria-label="Delete all logged data permanently"
    type="button"
    class="flex flex-col justify-around items-center w-full py-3 bg-red-200 rounded-sm text-black font-bold cursor-pointer hover:bg-red-600 hover:text-white"
  >
    <span class="text-center mb-2">
      CLICKING THIS BUTTON WILL DELETE ALL OF YOUR LOGGED DATA.
    </span>
    <span class="text-center font-bold italic">
      YOU WILL NOT BE ABLE TO GET IT BACK.
    </span>
    <br />
    <span class="text-center">CLICK TO CONFIRM DELETION</span>
  </button>
</template>
<script setup></script>
