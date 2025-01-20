<script setup>
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'

const appStore = useAppStore()
</script>

<template>
    <Wrapper class="home">
        <template #body>
            <h1>Home page</h1>
        
            <h2>{{ appStore.name }}</h2>
        
            <button @click="appStore.incrementCount()">click me</button>
        
            <p>doubleCount {{ appStore.doubleCount }}</p>
        
            <p>{{ appStore.teams }}</p>
        </template>
    </Wrapper>
</template>