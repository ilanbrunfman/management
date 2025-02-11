<script setup>
import { markRaw, ref, computed } from 'vue'
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'
import UpdateTeam from '@/components/modal/modals/teams/UpdateTeam.vue';    

const appStore = useAppStore()

const teams = computed(() => {
    return appStore.teams
})

const updateTeam = (team) => {
    console.log('updateTeam has been clicked')
    appStore.ADD_MODAL({component: markRaw(UpdateTeam), transition: 'nested',  data: team})
}

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
                                    <h3 class="mb-2">Teams:</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="teams">
                                        <div v-for="(team, index) in teams" :key="index" class="team d-flex justify-content-between mb-1" v-if="appStore.teams.length > 0">

                                            <RouterLink :to="`team/${team.id}`" class="nav-link">
                                                <p class="" v-html="team.name"></p>
                                            </RouterLink>
                                            <button class="btn" @click="updateTeam(team)">
                                                <label>Edit</label>
                                            </button>
                                        </div>
                                        <p v-else>Teams list is empty</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col box">
                            <div class="row">
                                <div class="col-12">
                                    <h3 class="mb-2">Meets:</h3>
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