<script setup>
import {markRaw, ref, computed} from 'vue';
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'
import AddTeam from '@/components/modal/modals/teams/AddTeam.vue';
import UpdateTeam from '@/components/modal/modals/teams/UpdateTeam.vue';

import Card from '@/components/card/Card.vue';

const appStore = useAppStore()

const search = ref('')

const filteredTeams = computed(() => {
    if (!search.value) return appStore.teams;
    return appStore.teams.filter(team =>
        team.name.toLowerCase().includes(search.value.toLowerCase())
      );
})

const toggleEvent = () => {
    appStore.ADD_MODAL({component: markRaw(AddTeam), transition: 'nested'})
}

const updateTeam = (team) => {
    console.log('updateTeam has been clicked')
    appStore.ADD_MODAL({component: markRaw(UpdateTeam), transition: 'nested',  data: team})
}

const deleteTeam = (team) => {
    appStore.DELETE_TEAM(team.id)
}

</script>

<template>
    <Wrapper class="teams">
        <template #body>
            <div class="container pt-1">
                
                <div class="row mb-3">
                    <div class="col-12 d-flex justify-content-between align-items-center ">
                        <h3 class="">Teams</h3>
                        <button @click="toggleEvent()">
                            <label>Add</label>
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 mb-2">
                        <form>
                            <input 
                                type="text" 
                                placeholder="Search" 
                                id="search"
                                v-model="search"
                            />
                            <button id="submit">submit</button>
                        </form>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="teams-cards">
                            <template v-if="appStore.teams.length > 0">
                                <Card 
                                    v-for="(team, index) in filteredTeams" 
                                    :key="index" 
                                    :card="team" 
                                    :updateCard="updateTeam"
                                    :deleteCard="deleteTeam"
                                />
                            </template>
                            <template  v-if="appStore.teams.length > 0 && filteredTeams.length === 0">
                                <p>Team not found</p>
                            </template>
                            <template v-if="appStore.teams.length === 0">
                                <p>Teams list is empty </p>
                            </template>

                        </div>
                    </div>
                </div>

                <div class="row d-none">
                    <div class="col-12 gap-2">

                        <div class="box" style="min-width: 400px;">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <h3>Meets:</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
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
        </template>
    </Wrapper>
</template>

<style lang="scss" scoped>
.teams{   
    &-cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.0rem;
    } 
}
</style>