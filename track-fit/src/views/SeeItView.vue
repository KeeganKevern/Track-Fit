<script setup>
import PageHeader from "../components/PageHeader.vue";
import GraphImage from "../components/GraphImage.vue";
import SavedWorkoutsDropdown from "@/components/SaveItComponents/SavedWorkoutsDropdown.vue";
import { useSavedWorkouts } from "@/globalStore/savedWorkoutsStore";
import { ref, onMounted } from "vue";

onMounted(() => {
  document.title = "See It!";
});

const savedWorkoutsStore = useSavedWorkouts();
let returnArrayOfSelectedWorkout =
  savedWorkoutsStore.returnArrayOfSelectedWorkout;
const workoutSelectedFromDropdown = ref(
  savedWorkoutsStore.workoutSelectedFromDropdown
);

const highlightedGraph = ref(false);
let selectedChart;
function generateGraphFromChoice(selectedWorkout) {
  highlightedGraph.value = false; //Unmounts the selected graph
  highlightedGraph.value = true;

  selectedChart = arrayToUrl(returnArrayOfSelectedWorkout(selectedWorkout));
}

let squatChart = arrayToUrl(returnArrayOfSelectedWorkout("SQUAT"));
let benchChart = arrayToUrl(returnArrayOfSelectedWorkout("BENCH"));
let deadliftChart = arrayToUrl(returnArrayOfSelectedWorkout("DEADLIFT"));

let arrayOfSrc = [
  //Only used to generate template graphs

  {
    graphSrc: squatChart,
  },
  {
    graphSrc: benchChart,
  },
  {
    graphSrc: deadliftChart,
  },
];

function arrayToUrl(array) {
  const title = array[0].workoutName;
  let dateArray = array.map((item) => item.date);
  let plotPointsArray = array.map((item) => item.weight).reverse();

  let xAxisLabels = dateArray
    .map((date) => {
      date = date.slice(1, -1);
      const [year, month, day] = date.split("-");
      return `'${day}-${month}-${year.slice(2)}'`;
    })
    .reverse()
    .join(",");

  const baseUrl = "https://quickchart.io/chart?c={type:'line',data:{labels:";
  return `${baseUrl}[${xAxisLabels}],datasets:[{fill:false,borderColor:'rgb(10,10,10)',data:[${plotPointsArray}]}]},options:{legend:{display:false},title:{text:'${title} PROGRESS',display:true,fontColor:'white'},scales:{xAxes:[{ticks:{fontColor:'white'}}],yAxes:[{ticks:{fontColor:'white'}}]}}}`;
}
</script>

<template>
  <div class="grid grid-row-2">
    <section class="row-start-1 flex flex-col justify-center items-center">
      <PageHeader textContent="See It" />

      <p class="italic mb-2 text-gray-200">See your progress</p>
    </section>

    <section class="row-start-2 flex flex-wrap justify-evenly">
      <SavedWorkoutsDropdown
        @generateGraphFromChoice="generateGraphFromChoice"
      />
      <GraphImage
        class="rounded-md border-2 border-emerald-600"
        v-if="highlightedGraph"
        :graphSrc="selectedChart"
      />
      <GraphImage v-for="sources in arrayOfSrc" :graphSrc="sources.graphSrc" />
    </section>
  </div>
</template>
