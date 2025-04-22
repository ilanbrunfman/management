<script setup>
import { markRaw, ref, computed, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'
import Article from '@/components/article/Article.Vue'
import UpdateUser from '@/components/modal/modals/users/UpdateUser.vue';    
import UpdateTeam from '@/components/modal/modals/teams/UpdateTeam.vue';    

// icons
// import MoreVert from '@/assets/icons/MoreVert.vue';

const appStore = useAppStore()

const users = computed(() => {
    return appStore.users
})

const teams = computed(() => {
    return appStore.teams
})

// const updateUser = (user) => {
//     console.log('updateUser has been clicked', user.name)
//     appStore.ADD_MODAL({component: markRaw(UpdateUser), transition: 'nested',  data: user})
// }

// const updateTeam = (team) => {
//     console.log('updateTeam has been clicked')
//     appStore.ADD_MODAL({component: markRaw(UpdateTeam), transition: 'nested',  data: team})
// }

</script>

<template>
    <Wrapper class="home">
        <template #body>

            <div class="container mt-2">

                <div class="row">
                    <div class="col-12 mb-4">
                        <Article>
                            <template #header>
                                <h3 class="sub-title mb-3">Users:</h3>
                            </template>
                            
                            <template #body>
                                <table class="user-table" v-if="appStore.users.length > 0 ">
                                    <thead class="table-header">
                                        <tr>
                                            <th class="text-left fw-bold">Name</th>
                                            <!-- <th class="text-left fw-bold">Passowrd</th> -->
                                            <th class="text-left fw-bold">Team</th>
                                            <th></th>
                                            <th class="text-left fw-bold">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        <tr v-for="(user, index) in users" :key="index" >
                                            <td class="text-left">
                                                <RouterLink :to="`user/${user.id}`" class="nav-link">{{ user.name }}</RouterLink>
                                            </td>
                                            
                                            <!-- <td class="text-left" v-html="user.password"></td> -->
                                             <!--  -->
                                            <td class="text-left">
                                                <template v-if="user.teamId">
                                                    <template v-for="team in teams" >
                                                        <RouterLink :key="team.id" v-if="user.teamId === team.id" :to="`team/${user.teamId}`" class="nav-link">{{ team.name }}</RouterLink>
                                                    </template>
                                                </template>
                                                <template v-else>--</template>
                                            </td>
                                            <td></td>
                                            <td class="text-left" v-html="user.role ? user.role : '--' "></td>
                                            <!-- <td class="">
                                                <div class="icon-more-vert" @click="updateUser(user)">
                                                    <MoreVert />
                                                </div>
                                            </td> -->
                                        </tr>
                                    </tbody>
                                </table>
                                <template v-else>
                                    <p>Teams list is empty</p>
                                </template>
                            </template>

                        </Article>
                    </div>
                </div>

                <div class="row mb-4 d-none">
                    <div class="col-12 d-grid grid-8-4 gap-2">
                        
                        <Article header="ilan">
                            <template #header>
                                <h3 class="sub-title mb-3">Teams:</h3>
                            </template>

                            <template #body>
                                <div class="teams">
                                    <template  v-if="appStore.teams.length > 0">
                                        <div v-for="(team, index) in teams" :key="index" class="team d-flex justify-content-between">
                                            <RouterLink :to="`team/${team.id}`" class="nav-link">
                                                <p class="" v-html="team.name"></p>
                                            </RouterLink>
                                            <button class="btn" @click="updateTeam(team)">
                                                <label>Edit</label>
                                            </button>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <p>Teams list is empty</p>
                                    </template>
                                </div>
                            </template>

                        </Article>

                        <Article type="">
                            <template #body>
                                <div class="col-12">
                                    <h3 class="mb-2">Meets:</h3>
                                </div>
                                <div class="col-12">
                                    <div class="meets">
                                        <template v-if="appStore.meets.length > 0">
                                            <div v-for="(meet, index) in appStore.meets" :key="index" class="meet" >
                                                <p class="" v-html="meet.name"></p>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <p >Meets list is empty</p>
                                        </template>
    
                                    </div>
                                </div>
                            </template>
                        </Article>
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

            </div>

        </template>
    </Wrapper>
</template>