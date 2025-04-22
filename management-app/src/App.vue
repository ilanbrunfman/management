<script setup>
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/appStore.js'

const appStore = useAppStore()

appStore.fetchTeams()
appStore.fetchUsers()
</script>

<template>

  <Suspense>
    <RouterView />
    <template #fallback>Loading..</template>
  </Suspense>
  
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
