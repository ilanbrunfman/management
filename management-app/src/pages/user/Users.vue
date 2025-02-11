<script setup>
import { useAppStore } from '@/stores/appStore.js'

// components
import Wrapper from '@/components/wrapper/Wrapper.vue'

const appStore = useAppStore()

</script>

<template>
    <Wrapper class="teams">
        <template #body>
            <div class="container pt-1">

                <div class="row mb-3">
                    <div class="col-12 d-flex justify-content-between align-items-center ">
                        <h3 class="">Users</h3>
                        <!-- <button @click="toggleEvent()">
                            <label>Add</label>
                        </button> -->
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 d-grid grid-8-4 gap-2">

                        <div class="col box">
                            <div class="row">
                                <div class="col-12">
                                    <div v-for="(user, index) in appStore.users" :key="index" :class="['user',]">

                                        <h3 v-html="user.name"></h3>
                                    </div>
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

