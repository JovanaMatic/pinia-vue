<template>
  <form @submit.prevent="handleSubmit">
    <input type="text"
    placeholder="add task"
    v-model="newTask"
    >
    <button>Add task</button>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '../stores/TaskStore'
  
  const taskStore = useTaskStore()
  const newTask = ref('')

  const handleSubmit = () => {
    if (newTask.value.length > 0) {
      taskStore.addTask({
        id: String(Math.floor(Math.random() * 10000)),
        title: newTask.value,
        isFav: false
      })
    }
    newTask.value = ''
  }

</script>

<style scoped>

</style>