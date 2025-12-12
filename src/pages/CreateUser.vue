<script setup>



const handlerSubmit = () => {
    console.log("Formulario enviado");
}


</script>

<template> 
<div>
<form @submit.prevent="handlerSubmit" class="flex-column w-[50px]"> 
<label for="nombreInput">Nombre:</label>
    <input id="nombreInput" type="text" placeholder="Nombre"> </input>
 <label for="ApellidoInput">Apellido:</label>
   
    <input id="ApellidoInput" type = "text" placeholder="Apellido">    </input>

    <button type="submit">Enviar</button>
</form>
</div>
</template>