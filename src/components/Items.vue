<template>
    <li class="container" style="list-style-type: none; padding-left: 10px;">
      <div class="rounded-pill" :class="{'bg-success': task.completed, 'bg-danger': !task.completed}">
        <span>{{ task.text }}</span>
        <button @click="removeTask" class="btn btn-outline-dark">Eliminar</button>
      </div>
      <div>
        <input type="checkbox" v-model="task.completed" />
        <span :class="{'text-success': task.completed, 'text-danger': !task.completed}">
          {{ task.completed ? 'Realizada' : 'Pendiente' }}
        </span>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: ['task'],
    methods: {
      removeTask() {
        this.$emit('remove-task', this.task);
      }
    }
  };
  </script>
  
