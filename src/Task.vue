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
        <button class="btn btn-light" @click="addTask">Agregar Tarea</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Items from './components/Items.vue';
  
  export default {
    components: {
      Items
    },
    //Defino el estado del componente
    setup() {
      //Añado un arreglo de tareas al almacenamiento local, en caso de no haberlas, crea un arreglo vacío
      const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || []);
      //Variable que almacenará las nuevas tareas
      const newTask = ref('');
      //Función para agregar nuevas tareas. Sólo lo hará si el cuadro de texto no está vacio.
      const addTask = () => {
        if (newTask.value.trim() !== '') {
          tasks.value.push({
            id: tasks.value.length + 1,
            text: newTask.value,
            completed: false
          });
          newTask.value = '';
          updateLocalStorage();
        }
      };
  
      //Función de borrado de tareas
      const removeTask = task => {
        tasks.value = tasks.value.filter(item => item !== task);
        updateLocalStorage();
      };
  
      //Función para cambiar el estado de las tareas entre completadas o pendientes.
      const toggleTaskStatus = task => {
        task.completed = !task.completed;
        updateLocalStorage();
      };
  
      //Función que permite el agregado de nuevas tareas a la lista presionando enter en el textbox.
      const addTaskOnEnter = () => {
        addTask();
      };
  
      //Función que guarda el arreglo de tareas en el almacenamiento, usando para ello el formato JSON.
      const updateLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks.value));
      };
  
      onMounted(() => {
        updateLocalStorage();
      });
  
      return { tasks, newTask, addTask, removeTask, toggleTaskStatus, addTaskOnEnter };
    }
  };
  </script>
  