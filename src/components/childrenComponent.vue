<script setup>
    import { ref } from 'vue' // <--- ¡Asegúrate de tener esto!
defineProps({
    msg:String,
    id:Number
})
const userName = ref("Adrian");
const Nuevo  = ref("PABLO");

const login = () =>{  
    emit("login", Nuevo.value)
}
const emit = defineEmits(["login"])

</script>

<template>
  <div> <h1>{{ msg }}</h1>
    <p>ID: {{ id }}</p>
    <button @click="login">Login</button>
  </div>
  
</template>