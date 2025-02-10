<script setup>
import { RouterLink } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js';
import {markRaw} from 'vue';

import './_header.scss';

import AddItemModal from '../modal/modals/AddItemModal.vue';

const appStore = useAppStore()

const links = [
    { name: 'Home', path: '/', },
    { name: 'About', path: '/about', },
    { name: 'Contact', path: '/contact', }
]

const toggleAddItemModal = (value) => {
    appStore.ADD_MODAL({component: markRaw(AddItemModal), transition: 'nested'})

}
</script>

<template>
    <header :class="['header',]">
        <div class="header-container">
            <div class="">
                <h3>Management</h3>
            </div>
            <div class="d-flex align-items-center gap-1">
                <RouterLink v-for="(link, index) in links" :key="index" :to=link.path class="nav-link">
                    <label>{{ link.name }}</label>
                </RouterLink>
                <button class="btn" @click="toggleAddItemModal()">
                    <label>Menu</label>
                </button>
            </div>
        </div>
    </header>
</template>