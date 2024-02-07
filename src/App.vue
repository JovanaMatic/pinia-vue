<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>
    <nav class="filter">
      <button @click="favorite='all'">Show all tasks</button>
      <button @click="favorite='favorites'">Show favorite tasks</button>
    </nav>
    <div class="task-list" v-if="favorite === 'all'">
        <p>{{ favorite }} tasks, total: {{ taskStore.tasks.length }}</p>
        <div v-for="task in taskStore.tasks">
          <TaskDetails :task="task" />
        </div>
    </div>
    <div class="task-list" v-if="favorite ==='favorites'">
        <p>{{ favorite }} tasks, total: {{ favTasks.length }}</p>
        <div v-for="task in favTasks">
          <TaskDetails :task="task" />
        </div>
    </div>
  </main>
</template>

<script setup>
  import TaskDetails from './components/TaskDetails.vue'
  import { useTaskStore } from './stores/TaskStore'
  import { computed, ref } from 'vue'

  const taskStore = useTaskStore()
  console.log(taskStore)
  const favTasks = computed(() => taskStore.tasks.filter(item => item.isFav))

  const favorite = ref('all')
</script>

