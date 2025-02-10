<script setup>
import { useAppStore } from '@/stores/appStore.js';
import './_modal.scss'

const appStore = useAppStore()

const props = defineProps({
    modal: Object
})

const closeModal = (props) => {
    appStore.REMOVE_MODAL(props.modal)
}


</script>

<template>
    <div :class="['modal',]">
        <div class="modal-backdrop" @click="closeModal(props)"></div>
        <div class="modal-container inner">
            <slot name="modal"/>
        </div>
    </div>
</template>