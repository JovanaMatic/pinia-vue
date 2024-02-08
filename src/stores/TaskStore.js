import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Buy milk', isFav: false },
      { id: 2, title: 'Learn pinia', isFav: true }
    ]
  }),
  actions: {
      addTask(task) {
        this.tasks.push(task)
      }
    }
})