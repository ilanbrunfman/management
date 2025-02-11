<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'

const route = useRoute()
const appStore = useAppStore()

const team = computed(() => {
    return appStore.teams.find((item) => item.id === route.params.teamId)
})

const users = computed(() => {
    return appStore.users.filter((user) => user.team.id === team.value.id)
})

onMounted(() => {})


</script>

<template>
    <Wrapper class="about">
        <template #body>
            <div class="container">
                
                <div class="row ">
                    <div class="col-12 mt-2 mb-3">
                        <h3>{{ team.name }}</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 d-grid grid-8-4 gap-2">

                        <div class="col box">
                            <div class="row">
                                <div class="col-12">
                                    <h3 class="mb-2">Users: </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p v-for="(user, index) in users" :key="index" v-html="user.name "></p>
                                    <!-- <p v-for="(user, index) in users" :key="index" v-html="user.team.id "></p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>

                    </div>
                </div>

                

            </div>
        </template>
    </Wrapper>
</template>