<script setup>
import { useAppStore } from '@/stores/appStore.js';
import {markRaw} from 'vue';

import './Header.scss';

import AddItemModal from '../modal/modals/AddItemModal.vue';
import SidebarIcon from '@/assets/icons/SidebarIcon.vue';
import EditIcon from '@/assets/icons/EditIcon.vue';

const appStore = useAppStore()

const toggleSidebar = () => {
    appStore.SET_STATE({stateName: 'activeSidebar', value: !appStore.activeSidebar})
}

const toggleAddItemModal = (value) => {
    appStore.ADD_MODAL({component: markRaw(AddItemModal), transition: 'nested'})
}
</script>

<template src="./Header.html"/>