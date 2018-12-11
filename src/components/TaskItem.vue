<template>
  <div class="task-item">
    <h4>{{ task.name }}</h4>
    <button 
    class="item-button"
    @click="deleteTask">Delete Task</button>
  </div>
</template>

<script>
  import { db } from '../firebaseConfig';
  export default {
    name: 'TaskItem',
    props: ['task'],
    firestore() {
      return {
        tasks: db.collection("tasks")
      };
    },
    methods: {
      deleteTask() {
        console.log(`Task to delete: ${this.task['.key']}`);
        this.$firestore.tasks.doc(this.task['.key']).delete()
      }
    }
  }
</script>

<style scoped>
.task-item {
  font-size: 20px;
  background-color: #fff;
  width: 100%;
  border: 0.3px solid #2c3e50;
  padding-right: 8px;
  padding-left: 16px;
  padding-bottom: 8px;
  border-radius: 4px;
  margin-top: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
  text-align: left;
}

.item-button {
  width: 20%;
  height: 20%;
  font-size: 16px;
  background-color: #f45042;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 6px 12px;
}
</style>