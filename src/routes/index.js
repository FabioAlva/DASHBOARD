import Home from "@/pages/Home.vue"
import ListUser from "@/pages/ListUser.vue"
import Login from "@/pages/Login.vue"
import CreateUser from "@/pages/CreateUser.vue"

import { createRouter, createWebHistory} from "vue-router"
const router = createRouter({  
history: createWebHistory(),
    routes: [
{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
          path: "/createuser",
          name: "createuser",
          component: CreateUser
        },
        {
          path: "/listuser",
          name: "listuser",
          component:ListUser
        }
    ]
})

export default router