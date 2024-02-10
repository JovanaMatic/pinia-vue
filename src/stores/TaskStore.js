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
      async addTask(task) {
        this.tasks.push(task)
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(task)
        })

        if (response.error) {
          console.log(response.error)
        }
      },
      async deleteTask(id) {
        this.tasks =  this.tasks.filter(task => task.id !== id)
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
           method: 'DELETE'
         })

         if (response.error) {
           console.log(response.error)
         }
      },
      async favoriteTaskToggle(task) {
        task.isFav = !task.isFav
        console.log(typeof task.id)
        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
           method: 'PUT',
           body: JSON.stringify(task)
         })

         if (response.error) {
           console.log(response.error)
         }
      }
    }
})