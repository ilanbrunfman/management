<script setup>

// components
import Header from '@/components/header/Header.vue'
</script>

<template>
    <div :class="['']">

        <Header />

        <main>
          <slot name="body" />
        </main>

    </div>
</template>