# Vue 3 + TypeScript + Vite

📝 To-Do List App Description
This project is a dynamic To-Do List application built with Vue 3 and TypeScript using Composition API and <script setup> syntax.
The app allows users to create, toggle, delete, and filter tasks based on their completion status.

It is structured with modular components to make it clean, scalable, and easy to maintain.

🎯 Main Features:
Add Tasks:
Users can easily add new tasks using a form. If the input is empty, a friendly validation message appears to guide the user.

Toggle Task Completion:
Each task can be marked as completed or incomplete by clicking a checkbox.

Delete Tasks:
Tasks can be removed individually with a delete button (🗑️), ensuring users keep their list clean and updated.

Filter Tasks:
Three filters allow users to view:

All tasks

Only tasks to do

Only completed tasks

Live Task Counter:
Displays the number of completed tasks versus total tasks dynamically.

📦 Components Overview:
1. App.vue (Main Application File)
Manages the global state: the list of tasks, current filter, and task statistics.

Connects all other components together.

Handles all core logic like addTask, toggleDone, removeTask, and setFilter.

Uses computed properties like totalDone and filteredtask to automatically update the UI based on user interaction.

2. Task.vue (Form for Adding New Tasks)
Contains an input field bound to a newTask ref.

Emits an add-task event to send the new task title to the parent (App.vue).

Displays an error message if the input is empty to improve the user experience.

3. Tasklist.vue (Tasks Display List)
Receives the list of tasks as a prop.

Loops through and displays each task.

Allows toggling a task’s done status via checkbox.

Includes a delete button that emits a remove-task event to the parent to remove a task.

4. FilterButton.vue (Reusable Filter Buttons)
Represents a button for each filter option (all, todo, done).

Emits a set-filter event when clicked.

Helps the user control which tasks are visible without modifying the list manually.

