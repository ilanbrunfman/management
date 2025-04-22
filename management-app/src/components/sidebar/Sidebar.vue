<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useAppStore } from '@/stores/appStore.js';

// icons
import SidebarIcon from '@/assets/icons/SidebarIcon.vue';
import Dashboard from '@/assets/icons/DashboardIcon.vue';
import About from '@/assets/icons/AboutIcon.vue';
import Contact from '@/assets/icons/ContactIcon.vue';

onMounted(() => {
    appStore.addMediaQuery()
});

onUnmounted(() => {
    appStore.removeMediaQuery()
});

const links = [
    { name: 'Home', icon: Dashboard, path: '/', },
    { name: 'About', icon: About, path: '/about', },
    { name: 'Contact', icon: Contact, path: '/contact', }
]

const appStore = useAppStore()

const toggleSidebar = () => {
    appStore.SET_STATE({stateName: 'activeSidebar', value: !appStore.activeSidebar})
}

onMounted(() =>{
    appStore.SET_STATE({ stateName: 'activeSidebar', value: window.matchMedia('(max-width: 768px)').matches ? false : true })
})
</script>

<template src="./Sidebar.html" />
<style src="./Sidebar.scss" />