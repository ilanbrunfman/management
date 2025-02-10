<script setup>
import {markRaw} from 'vue';
import { RouterLink } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js';
import Modal from '../Modal.vue';

// import AddTeam from './teams/AddTeam.vue';

const appStore = useAppStore()
const props = defineProps({
    modal: Object
})

const links = [
    { name: 'Teams', path: '/teams', role: true,},
    { name: 'Add new user', path: '/add-user', role: appStore.teams.length > 0 ? true : false, },
    { name: 'Add new meet', path: '/add-meet', role: appStore.teams.length > 0 && appStore.users.length > 0? true : false, }
]

const toggle = (item) => {
    console.log('toggle', item)
    appStore.REMOVE_MODAL(props)
    // appStore.ADD_MODAL({component: markRaw(AddTeam), transition: 'nested'})
}

</script>

<template>
<Modal :modal="props.modal">
    <template #modal>
        <div class="modal-header">
            <div class="row">
                <div class="col-12">
                    <h3>Items</h3>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12">
                    <template v-for="(link, index) in links" :key="index" >

                        <RouterLink :to=link.path class="nav-link" @click="toggle(link)" v-if="link.role">
                            <h4>{{ link.name }}</h4>
                        </RouterLink>
                    </template>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button @click="appStore.REMOVE_MODAL(props)">
                <h5>Cancel</h5>
            </button>
        </div>
    </template>
</Modal>
</template>