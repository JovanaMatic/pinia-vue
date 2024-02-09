<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="handleDelete(task.id)" class="material-icons" >delete</i>
      <i @click=handleFavValue(task)  :class="['material-icons', { active: task.isFav }]">favorite</i>
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
  }

  const handleFavValue = (task) => {
    taskStore.favoriteTaskToggle(task)
  }
</script>

<style scoped>

</style>