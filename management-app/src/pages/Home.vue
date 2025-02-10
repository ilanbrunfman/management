<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'

const appStore = useAppStore()

</script>

<template>
    <Wrapper class="home">
        <template #body>

            <div class="container mt-2">

                <div class="row mb-2">
                    <div class="col-12">
                        <h3>Users:</h3>
                    </div>
                </div>

                <!-- 
                <div class="box">
                    <div class="row">
                        <div class="col-12">
                            <div class="users">
                                <div v-for="(user, index) in appStore.users" :key="index" class="user">
                                    <p class="" v-html="user.username"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                -->

                <div class="row">
                    <div class="col-12 d-grid grid-8-4 gap-2">
                        <div class="col box">
                            <div class="row">
                                <div class="col-12">
                                    <h3>Teams:</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="teams">
                                        <div v-for="(team, index) in appStore.teams" :key="index" class="team" v-if="appStore.teams.length > 0">
                                            <p class="" v-html="team.name"></p>
                                        </div>
                                        <p v-else>Teams list is empty</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col box">
                            <div class="row">
                                <div class="col-12">
                                    <h3>Meets:</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="meets">
                                        <div v-for="(meet, index) in appStore.meets" :key="index" class="meet" v-if="appStore.meets.length > 0">
                                            <p class="" v-html="meet.name"></p>
                                        </div>
                                        <p v-else>Meets list is empty</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </Wrapper>
</template>