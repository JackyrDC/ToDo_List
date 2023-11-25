<template>
  <div class="container-fluid">
    <h1 class="">Lista de Tareas</h1>
    <!--Crea una lista desordenada que contendra los elementos guardados-->
    <ul>
      <!--Creo una etiqueta personalizada, que contendra cada tarea, asi como las funciones relacionadas a su funcionamiento-->
      <Items       
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task-status="toggleTaskStatus"
        @remove-task="removeTask"
      />
    </ul>
    <!--Agrego los controles que permiten agregar nuevas tareas-->
    <div>
      <!--Cuadro de texto que llevará la descripción de las nueva tareas.Permite añadirlas al presionar "enter"-->
      <input v-model="newTask" @keyup.enter="addTaskOnEnter" />
      <button class="btn btn-light" @click="addTask">Añadir Tarea</button>
    </div>
  </div>

</template>
