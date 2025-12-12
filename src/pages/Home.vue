<script setup>
  import {ref,reactive} from 'vue';
let number= ref(0);
const animals = [
{
  id:1,
  name:"Perro"
}, 
{
  id:2,
  name:"Gato"
},
{
  id:3,
  name:"Pajaro"
}
]
const myValue = ref("nOMBRE");
const myId = "Patata";
const addOne = () =>{
  number.value++;
}

let fdsfsa = reactive({
  id: '',
  name: ''
})
let myCondition = true;

const movies = ['Inception', 'Interstellar', 'The Dark Knight'];
const variableMensaje = "xdasdasdasdasdasda"

import HeaderComponent from '../components/HeaderComponent.vue';
import ChildrenComponent from '../components/childrenComponent.vue';


const displayName = ref("")
const setName = (e) => {
  displayName.value = e
}
</script>

<template>
   <h1 @click="addOne">{{ number }}</h1>
   <h1 v-bind:id="myId"> Hola a todos</h1>
   <input type="text" v-model="myValue">

   <h1 :class="myCondition ? 'bg-blue-500': 'darkstig'">HOLAASDASDA {{ displayName }}</h1>
   <h2>{{ myValue.valueOf() }}</h2>
   
    
   <h3 v-if="myCondition">xdddddddd </h3>
   <HeaderComponent />
   
   <p v-for="(movie,index) in movies" :key="movie">{{index + 1}} - {{ movie }}</p>
  <ul>
    <li v-for="animal in animals" :key = "animal.id">{{ animal.name }}</li>
  </ul>

  <ChildrenComponent @login="setName" :msg="variableMensaje" :id="123"/>


  </template>

<style scoped>
.highligth{
  background-color: blue;
  color : yellow
}

.darkstig{
  background-color: red;
  color:blue
}
  
</style>
