<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="handleDelete(task.id)" class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script setup>
  import { useTaskStore } from '../stores/TaskStore'
  const props = defineProps({
    task: {
      type: Object,
      required: true
    }
  })
  const taskStore = useTaskStore()
  const handleDelete = (id) => {
    taskStore.deleteTask(id)
    console.log(taskStore.tasks)
  }
</script>

<style scoped>

</style>