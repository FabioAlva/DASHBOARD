<script setup>

      import {reactive} from 'vue';

  let ObjectReactive = reactive({
    name:"",
    email:"",
    password:""
  })


const handlerSubmit = () => {
  console.log(ObjectReactive);  
}

</script>

    <template>
 <div>
 <h1>Login</h1>
 <form @submit.prevent="handlerSubmit" class="bg-blue-500">
    <input v-model="ObjectReactive.name" type="text" placeholder="Name">
    <input v-model="ObjectReactive.email" type="text" placeholder="Email">
    <input v-model="ObjectReactive.password" type="password" placeholder="Password">
    <button type="submit">Login</button>
 </form>
</div>

</template>