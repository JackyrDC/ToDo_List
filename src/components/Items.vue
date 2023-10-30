<template>
    <li style="list-style-type: none; padding-left: 10px;">
      <section class="rounded-pill container-fluid" :class="{'bg-success': task.completed, 'bg-danger': !task.completed}">
          <div class="row p-3">
            <span class="col-3 col-sm-4 ml-3 mr-3 mt-3 mb-3">{{ task.text }}</span>
            <div class="col-4 col-sm-5"></div>  
            <button @click="removeTask" class="btn btn-outline-dark rounded-pill col-3 col-sm-3 mt-3 mb-3">Eliminar</button>
          </div>
      </section>
          <div class="container">
            <input type="checkbox" class="mt-2" v-model="task.completed" />
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
  
