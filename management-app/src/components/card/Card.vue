<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import './_card.scss'

const props = defineProps({
    card: Object,
    updateCard: Function,
    deleteCard: Function,
})

const isFocused = ref(false);

const onFocus = () => {
    isFocused.value = true
};

const onBlur = () => {
    setTimeout( () => {
        isFocused.value = false;
    }, 250)
};
</script>

<template>

<div class="card">
    <div class="card-header">
        
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="">
                    <RouterLink :to="`/team/${card.id}`" class="nav-link">
                        <h5>{{ card.name }}</h5>
                    </RouterLink>
                </div>
                <button class="" @focus="onFocus" @blur="onBlur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg> 
                    
                    <div class="card-menu" v-if="isFocused">
                        <button class="btn" @click="updateCard(card)">
                            <label>Edit</label>
                        </button>
                        <button class="btn" @click="deleteCard(card)">
                            <label>Delete</label>
                        </button>
                    </div>

                </button>

                    

            </div>
        </div>
        
    </div>
    <div class="card-footer"></div>
</div>

</template>