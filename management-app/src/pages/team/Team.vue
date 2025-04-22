<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'
import Article from '@/components/article/Article.Vue'

const route = useRoute()
const appStore = useAppStore()

const team = computed(() => {
    return appStore.teams.find((item) => item.id === route.params.teamId)
})

const users = computed(() => {
    return appStore.users.filter((user) => user.teamId === team.value.id)
})

onMounted(() => {})


</script>

<template>
    <Wrapper class="about">
        <template #body>
            <div class="container">

                <div class="row">
                    <div class="col-12 mb-4">
                        <Article>
                            <template #header>
                                <h3 class="sub-title mb-3" v-html="team.name"></h3>
                            </template>

                            <template #body>
                                <h2>ilan</h2>
                            </template>

                        </Article>
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