<script lang="ts" setup>
import { TaskList } from '../type';

const props = defineProps<{
  tasks: TaskList[];
}>();

const emit = defineEmits<{
  'toggle-done': [id: string];
  'remove-task': [id: string];
}>();
</script>

<template>
    <TransitionGroup name="task-list" tag="div">
    
    
  <article v-for="task in props.tasks" class="task" :key="task.id">
    <label>
      <input
        type="checkbox"
        :checked="task.done"
        @change="emit('toggle-done', task.id)"
      />
     <span :class="{done: task.done}">
        {{ task.title }}
     </span> 
    </label>
    <button @click="emit('remove-task', task.id)">🗑️ Delete</button>
  </article>
</TransitionGroup>
</template>
<style>
.task{
    display: flex;
    justify-content: space-between;
    align-items: center;
} 

.done{
    text-decoration: line-through;
}
.task-list-enter-active,
.task-list-leave-active{
    transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to{
    opacity: 0;
transform: translateX(300px);}
</style>