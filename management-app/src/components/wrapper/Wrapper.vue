<script setup>
import { useAppStore } from '@/stores/appStore.js'

// components
import Header from '@/components/header/Header.vue'
import Modal from '@/components/modal/Modal.vue'

const appStore = useAppStore()

</script>

<template>
    <div :class="['']">

        <transition 
            v-for="(modal, index) in appStore.modalInstances" 
            :key="index" 
            :appear="true" 
            :name="modal.transition || 'fade'"
        >
            <component 
                :is="modal.component" 
                :modal="modal"
                v-if="appStore.activeModal" 
            />
        </transition>

        <Header />

        <main>
          <slot name="body" />
        </main>

    </div>
</template>