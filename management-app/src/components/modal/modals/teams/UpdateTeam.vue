<script setup>
import { ref, computed, onMounted } from 'vue';
// import { RouterLink } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js';
import Modal from '@/components/modal/Modal.vue';


const appStore = useAppStore()
const props = defineProps({
    modal: Object
})

const team = computed(() => {
    return props.modal.data
})

const name = ref(props.modal.data.name)

const closeModal = () => {
    appStore.REMOVE_MODAL(props)
}

const updateTeam = () => {
    console.log('updateTeam has been clicked', props.modal.data);

    const data = {
        id: props.modal.data.id,
        name: name.value,
        path: name.value.toLowerCase().replace(' ', '-'),
    }

    if(name.value.toLowerCase() !== props.modal.data.name.toLowerCase() && name.value.length > 2){
        appStore.UPDATE_TEAM(data)
        appStore.REMOVE_MODAL(props)
    
        name.value = ''
    }

}

</script>

<template>
<Modal :modal="props.modal">
    <template #modal>
        <div class="modal-header">
            <div class="row">
                <div class="col-12">
                    <h3>Update Team {{ team.name }}</h3>
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
            <button class="btn" @click="updateTeam()">
                <h5>Add Team</h5>
            </button>
        </div>
    </template>
</Modal>
</template>