<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js'

const route = useRoute()
const appStore = useAppStore()

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'

const user = computed(() => {
    return appStore.users.find((user) => user.id === route.params.id)
})

onMounted(() => {
    document.title = user.value.name
})

</script>

<template>
    <Wrapper class="about">
        <template #body>
            <div class="container">
                
                <div class="row ">
                    <div class="col-12 mt-2">
                        <h2>{{ user.name }}</h2>
                    </div>
                </div>

            </div>
        </template>
    </Wrapper>
</template>