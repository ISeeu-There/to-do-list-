<script lang="ts" setup>
import { TaskFilter } from "../type"; // or correct relative path

const props = defineProps<{
  filter: TaskFilter;
}>();

const emits = defineEmits<{
  setFilter: [filter: TaskFilter];
}>();
</script>

<template>
  <button class="secondary" @click="emits('setFilter', props.filter)">
    {{ props.filter }}
  </button>
</template>

<style scoped>
button {
  text-transform: capitalize;
}
</style>
