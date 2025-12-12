import { defineStore } from "pinia"
export const useUserStore = defineStore("user", () => {
const userList = ref([
    {
        id: 1,
        name:"marco",
        apellido: "lopez"
    } ,
   {
        id: 2,
        name:"Pedro",
        apellido: "Perez"
    } ,
])

const addUser = (user) => {
    userList.value.push(user)
}

return {userList, addUser}
})