import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: false
  }),
  actions: {
    async getJSONTasks() {
      this.isLoading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()
      this.isLoading = false

      this.tasks = data
    },
      addTask(task) {
        this.tasks.push(task)
      },
      deleteTask(id) {
       this.tasks =  this.tasks.filter(task => task.id !== id)
      },
      favoriteTaskToggle(task) {
        task.isFav = !task.isFav
      }
    }
})