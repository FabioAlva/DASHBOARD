<script setup>
import { useUserStore } from '@/stores/user';


const userStore = useUserStore()

</script>

<template>

    <p v-for="user in userStore.userList" :key="user.id">
        {{ user.name }} {{ user.apellido }}
    </p>
</template>