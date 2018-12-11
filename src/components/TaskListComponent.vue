<template>
  <div class="task-list">
    <h1>My Tasks</h1>
    <ul>
      <task-item v-for="taskItem in tasks"
      v-bind:task="taskItem"
      v-bind:key="taskItem['.key']"></task-item>
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  name: 'TaskListComponent',
  props: ['tasks'],
  data: function() {
    return { }
  },
  methods: {

  },
  components: {
    TaskItem
  }
}
</script>

<style scoped>

.task-list {
  width: 95%;
  margin-top: 35px;
}

</style>
