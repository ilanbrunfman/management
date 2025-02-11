<script setup>
import { ref, computed } from 'vue';
// import { RouterLink } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js';
import Modal from '@/components/modal/Modal.vue';


const appStore = useAppStore()
const props = defineProps({
    modal: Object
})

const name = ref('')
const duplicateTeamName = ref(false)

const closeModal = () => {
    appStore.REMOVE_MODAL(props)
}

const testFiltered = computed(() => {
    return appStore.teams.filter(team =>
        team.name.toLowerCase().includes(name.value.toLowerCase())
      )
})

const addTeam = () => {
    

    const data = {
        name: name.value,
        path: name.value.toLowerCase().replace(' ', '-'),
        id: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
    }

    appStore.teams.filter(team =>{
        if(team.name.toLowerCase().includes(name.value.toLowerCase())){
            duplicateTeamName.value = true
            console.log(name.value.toLowerCase())
        } else {
            duplicateTeamName.value = false
        }}
    )

    
    if(name.value.length > 2 && !duplicateTeamName.value){
        appStore.ADD_TEAM(data)
        appStore.REMOVE_MODAL(props)
    
        name.value = ''

        console.log('add new team');
    } else {
        console.log('issue to add new team', duplicateTeamName.value);
    }
}

</script>

<template>
<Modal :modal="props.modal">
    <template #modal>
        <div class="modal-header">
            <div class="row">
                <div class="col-12">
                    <h3>Add Team</h3>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent>
                        <div class="form-control">
                            <label>Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Team's name"
                                v-model="name"
                            >
                        </div>
                        <!-- <div class="form-submit">
                            <button @click="onSubmitNewTeam" class="btn btn-primary">Add team</button>
                        </div> -->
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn" @click="closeModal()">
                <h5>Cancel</h5>
            </button>
            <button class="btn" @click="addTeam()">
                <h5>Add Team</h5>
            </button>
        </div>
    </template>
</Modal>
</template>