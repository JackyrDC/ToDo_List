<template>
    <li class="container" style="list-style-type: none; padding-left: 10px;">
      <div class="rounded-pill container-fluid" :class="{'bg-success': task.completed, 'bg-danger': !task.completed}">
        <span class="col-3 col-sm-6 m-3">{{ task.text }}</span>
        <button @click="removeTask" class="btn btn-outline-dark col-4 col-sm-3 m-3">Eliminar</button>
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
  
