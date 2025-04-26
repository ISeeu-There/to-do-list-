<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
  addTask: [newTask: string];
}>();

const error = ref('');
const newTask = ref('');

function formSubmited() {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value.trim());
    newTask.value = '';
    error.value = ''; // optional: clear error on success
  } else {
    error.value = 'Task cannot be empty!';
  }
}
</script>

<template>
  <form @submit.prevent="formSubmited">
    <label>
      New Task
      <input
        v-model="newTask"
        name="newTask"
        :aria-invalid="!!error || undefined"
        @input="error = ''"
      />
      <small v-if="error" id="invalid-helper">{{ error }}</small>
    </label>

    <div class="button-container">
      <button type="submit">Add</button>
    </div>
  </form>
</template>
