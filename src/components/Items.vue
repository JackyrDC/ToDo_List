<template>
    <li style="list-style-type: none; padding-left: 10px;">
      <section class="rounded-pill container-fluid" :class="{'bg-success': task.completed, 'bg-danger': !task.completed}">
          <div class="row">
            <span class="col-3 col-sm-4 ml-3 mr-3 mt-3">{{ task.text }}</span>
            <button @click="removeTask" class="btn btn-outline-dark col-3 col-sm-3">Eliminar</button>
          </div>
      </section>
          <div class="container">
            <input type="checkbox" class="ml-3 mt-1" v-model="task.completed" />
            <span>{{ task.completed ? 'Realizada' : 'Pendiente' }}</span>
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
  
