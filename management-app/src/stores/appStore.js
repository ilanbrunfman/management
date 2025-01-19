import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    // Data
    state: () => ({
        count: 0,
        name: 'ilan brunfman',
        users: [],
    }),       
    
    // Methods
    actions: {
        CallMe() {
            console.log('CallMe has been called!')
        },

        SET_STATE(props) {
            if( typeof props.stateName === 'string' ) {
                this[props.stateName] = props.value
                this.targetState = this[props.stateName]
            } else {
                console.warn("Cannot set state with a payload.prop that isn't a string or an array of strings");
            }
        },

        incrementCount(state) {
            this.count++
        },

        // Fetch Teams
        async fetchTeams() {
            const response = await fetch('/api/teams')
            const data = await response.json()
    
            this.teams = data
        },


        // Fetch Users
        async fetchUsers() {
            const response = await fetch('/api/users')
            const data = await response.json()
    
            this.users = data
        },
    },

    // Computed
    getters: {
        doubleCount: (state) => {
            return state.count * 2
        }
    }
})
