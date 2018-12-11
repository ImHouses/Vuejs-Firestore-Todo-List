<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>
      <span>Task Name</span>
      <input v-model="taskName" placeholder="Type a task name"><br>
      <span>Priority</span>
      <select v-model="taskPriority">
        <option disabled value="">Please select one</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select><br>
      <label for="description">Description</label>
      <textarea v-model="taskDescription" id="description" placeholder="Type a description"></textarea>
    </form>
    <button class="vue-btn" @click="submitTask">Submit Task</button>
    <task-list-component v-bind:tasks="tasks"></task-list-component>
  </div>
</template>

<script>
import { db } from '../firebaseConfig';
import TaskListComponent from './TaskListComponent.vue';

export default {
  name: 'MainComponent',
  props: {
    msg: String
  },
  data: function() {
    return {
      tasks: [],
      taskPriority: '',
      taskName: '',
      taskDescription: '',
      taskCount: 0
    }
  },
  firestore() {
    return {
      tasks: db.collection("tasks")
    }
  },
  methods: {
    submitTask() {
      this.$firestore.tasks.add({
        name: this.taskName,
        description: this.taskDescription,
        priority: this.taskPriority,
        timestamp: new Date()
      });
    }
  },
  components: {
    TaskListComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

form span {
  margin-right: 10px;
}

form input, select, textarea{
  margin: 10px;
  font-size: 1.5em;
  min-width: 50px;
  min-height: 15px;
  padding: 10px;
  border-radius: 5px;
  color: #2c3e50;
  border: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
}


.vue-btn {
  width: 20%;
  height: 20%;
  font-size: 18px;
  background-color: #41B783;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 6px 12px;
}
</style>
