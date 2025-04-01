<script setup></script>

<template>
  <!--Positioning need to be relative to device screen/scroll position, not top of page-->
  <div
    id="exerciseCard"
    class="max-h-4/5 w-4/5 fixed top-18 flex flex-col items-center p-4 border-b-18 border-slate-700 gap-4 bg-slate-700 rounded-md overflow-scroll lg:overflow-auto lg:w-1/2"
  >
    <slot></slot>
  </div>
</template>
