<script lang="ts" setup>
import { ref, computed } from "vue";
import Task from "./components/Task.vue";
import Tasklist from "./components/Tasklist.vue";
import FilterButton from "./components/FilterButton.vue";
import { TaskFilter } from "./type";

import type { TaskList } from "./type";

const message = ref("To Do List");
const tasks = ref<TaskList[]>([]);
const filter = ref<TaskFilter>(TaskFilter.All);

const totalDone = computed(() =>
  tasks.value.reduce((total, task) => (task.done ? total + 1 : total), 0)
);

const filteredtask = computed(() => {
  switch (filter.value) {
    case TaskFilter.All:
      return tasks.value;
    case TaskFilter.Completed:
      return tasks.value.filter((task) => task.done);
    case TaskFilter.Active:
      return tasks.value.filter((task) => !task.done);
  }
  return tasks.value;
});

function addTask(newTask: string) {
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTask,
    done: false,
  });
}

function toggleDone(id: string) {
  const task = tasks.value.find((task) => task.id === id);
  if (task) {
    task.done = !task.done;
  }
}

function removeTask(id: string) {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
}
function setFilter(value: TaskFilter) {
  filter.value = value;
}
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <Task @add-task="addTask" />

    <h3 v-if="!tasks.length">Add a Task to get started</h3>
    <h3 v-else>{{ totalDone }} / {{ tasks.length }} tasks completed</h3>
    <div v-if="tasks.length" class="button-container">
      <FilterButton :filter="TaskFilter.All" @set-filter="setFilter" />
      <FilterButton :filter="TaskFilter.Active" @set-filter="setFilter" />
      <FilterButton :filter="TaskFilter.Completed" @set-filter="setFilter" />
    </div>

    <Tasklist
      :tasks="filteredtask"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
    />
  </main>
</template>

<style>
main {
  max-width: 800px;
  margin: 1rem auto;
}
.button-container {
  display: flex;
  justify-content: end;
  gap: 0.5rem;
}
</style>
