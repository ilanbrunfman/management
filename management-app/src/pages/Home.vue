<script setup>
import { useAppStore } from '@/stores/appStore.js'

const appStore = useAppStore()
</script>

<template>
    <h1>Home page</h1>

    <h2>{{ appStore.name }}</h2>

    <button @click="appStore.incrementCount()">click me</button>

    <p>doubleCount {{ appStore.doubleCount }}</p>

    <p>{{ appStore.teams }}</p>

</template>