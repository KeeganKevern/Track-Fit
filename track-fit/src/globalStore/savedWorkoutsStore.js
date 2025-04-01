import { defineStore } from "pinia";
import { ref } from "vue";

export const useSavedWorkouts = defineStore("savedWorkouts", () => {
  const savedWorkouts = ref([
    {
      workoutName: "BENCH",
      weight: "80",
      reps: "6",
      distance: null,
      duration: null,
      date: "'2024-01-01'",
    },
    {
      workoutName: "BENCH",
      weight: "85",
      reps: "5",
      distance: null,
      duration: null,
      date: "'2024-02-01'",
    },
    {
      workoutName: "BENCH",
      weight: "85",
      reps: "6",
      distance: null,
      duration: null,
      date: "'2024-03-01'",
    },
    {
      workoutName: "BENCH",
      weight: "90",
      reps: "4",
      distance: null,
      duration: null,
      date: "'2024-04-01'",
    },
    {
      workoutName: "BENCH",
      weight: "90.5",
      reps: "5",
      distance: null,
      duration: null,
      date: "'2024-05-01'",
    },
    {
      workoutName: "BENCH",
      weight: "105",
      reps: "6",
      distance: null,
      duration: null,
      date: "'2024-06-01'",
    },

    {
      workoutName: "DEADLIFT",
      weight: "140",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-06-25'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "140",
      reps: "3",
      distance: null,
      duration: null,
      date: "'2024-07-02'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "150",
      reps: "2",
      distance: null,
      duration: null,
      date: "'2024-07-09'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "160",
      reps: "4",
      distance: null,
      duration: null,
      date: "'2024-07-16'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "170",
      reps: "5",
      distance: null,
      duration: null,
      date: "'2024-07-23'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "175",
      reps: "2",
      distance: null,
      duration: null,
      date: "'2024-07-30'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "175",
      reps: "3",
      distance: null,
      duration: null,
      date: "'2024-08-06'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "180",
      reps: "4",
      distance: null,
      duration: null,
      date: "'2024-08-13'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "180",
      reps: "6",
      distance: null,
      duration: null,
      date: "'2024-08-20'",
    },
    {
      workoutName: "DEADLIFT",
      weight: "185",
      reps: "5",
      distance: null,
      duration: null,
      date: "'2024-08-27'",
    },
    {
      workoutName: "BENCH",
      weight: "110",
      reps: "4",
      distance: null,
      duration: null,
      date: "'2024-07-01'",
    },
    {
      workoutName: "BENCH",
      weight: "120",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-03'",
    },
    {
      workoutName: "SQUAT",
      weight: "185",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-05'",
    },
    {
      workoutName: "SQUAT",
      weight: "185",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-06'",
    },
    {
      workoutName: "SQUAT",
      weight: "182",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-07'",
    },
    {
      workoutName: "SQUAT",
      weight: "185",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-08'",
    },
    {
      workoutName: "SQUAT",
      weight: "170",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-09'",
    },
    {
      workoutName: "SQUAT",
      weight: "150",
      reps: "1",
      distance: null,
      duration: null,
      date: "'2024-07-10'",
    },
    {
      workoutName: "BENCH",
      weight: "115",
      reps: "3",
      distance: null,
      duration: null,
      date: "'2024-08-01'",
    },
    {
      workoutName: "BENCH",
      weight: "120",
      reps: "2",
      distance: null,
      duration: null,
      date: "'2024-09-01'",
    },
    {
      workoutName: "BENCH",
      weight: "110",
      reps: "4",
      distance: null,
      duration: null,
      date: "'2024-10-01'",
    },
  ]);

  const workoutsToView = ref(savedWorkouts.value);

  const updateWorkoutsToView = (newArray) => {
    //SORT NEW ARRAY BY DATE RECENT FIRST

    newArray = newArray.sort((a, b) => {
      // Remove single quotes from date
      const dateA = a.date.replace(/'/g, "");
      const dateB = b.date.replace(/'/g, "");
      // Split the date into day, month, and year
      const [yearA, monthA, dayA] = dateA.split("-").map(Number);

      const [yearB, monthB, dayB] = dateB.split("-").map(Number);
      // Create Date objects for comparison
      const fullDateA = new Date(yearA, monthA - 1, dayA); // Month is 0-indexed
      const fullDateB = new Date(yearB, monthB - 1, dayB);
      // Compare the dates, returning a negative, zero, or positive value
      return fullDateB - fullDateA;
    });
    workoutsToView.value = "";
    workoutsToView.value = newArray;
  };

  const logsOfSelectedWorkouts = ref([]);
  const workoutSelectedFromDropdown = ref("");
  const returnArrayOfSelectedWorkout = (selectedWorkout) => {
    passSelectedWorkoutToSeeItView(selectedWorkout);

    workoutSelectedFromDropdown.value = selectedWorkout;
    logsOfSelectedWorkouts.value = [];

    logsOfSelectedWorkouts.value = savedWorkouts.value.filter(
      (entry) => entry.workoutName === selectedWorkout
    );

    updateWorkoutsToView(logsOfSelectedWorkouts.value);
    return logsOfSelectedWorkouts.value;
  };
  const passSelectedWorkoutToSeeItView = (selectedWorkout) => {};

  const addWorkout = (newLog) => {
    //newLog index legend
    // 0 = workoutName
    // 1 = weight
    // 2 = reps
    // 3 = distance
    // 4 = duration
    // 5 = date (yyyy/mm/dd)

    let newWorkout = {
      workoutName: "",
      weight: "",
      reps: "",
      distance: "",
      duration: "",
      date: "",
    };

    newWorkout.workoutName = newLog[0];
    newWorkout.weight = newLog[1];
    newWorkout.reps = newLog[2];
    newWorkout.distance = newLog[3];
    newWorkout.duration = newLog[4];
    newWorkout.date = "'" + newLog[5] + "'";

    savedWorkouts.value.push(newWorkout);
    updateWorkoutsToView(savedWorkouts.value);
  };
  const deleteEntireLog = () => {
    savedWorkouts.value = [
      {
        workoutName: "N/A",
        weight: "N/A",
        reps: "N/A",
        distance: "N/A",
        duration: "N/A",
        date: "'YYYY-MM-DD'",
      },
    ];
    updateWorkoutsToView(savedWorkouts.value);
  };
  const deleteIndividualLog = (indexOfLog) => {
    savedWorkouts.value.splice(indexOfLog, 1);
  };

  return {
    savedWorkouts,
    workoutsToView,
    workoutSelectedFromDropdown,
    updateWorkoutsToView,
    returnArrayOfSelectedWorkout,
    addWorkout,
    deleteEntireLog,
    deleteIndividualLog,
  };
});
