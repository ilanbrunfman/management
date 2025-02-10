import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    // Data
    state: () => ({
        count: 0,
        users: [],
        teams: [],
        meets: [],
        activeModal: false,
        modalInstances: [],
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

        ADD_MODAL(state) {
            this.modalInstances.push(state)
            this.activeModal = true
        }, 

        REMOVE_MODAL(state){
            // console.log('REMOVE_MODAL has been clicked', state.component.__name)
            this.activeModal = false
            setTimeout( () => {
                this.modalInstances.pop()
            }, 10);
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

        // Add new team
        async ADD_TEAM(team) {
            this.teams.push(team)
    
            const response = await fetch('/api/teams', {
                method: 'POST',
                body: JSON.stringify(team),
                headers: { 'Content-Type': 'application/json' }
            })
    
            if (response.error) {
                console.log(response.error)
            }
        },

        // Delete Team
        async DELETE_TEAM(id) {
            this.teams = this.teams.filter((team) => team.id !== id)
            // axios.delete(`/api/users/` + id)
    
            const response = await fetch('/api/teams/' + id, {
                method: 'DELETE'
            })
    
            if (response.error) {
                console.log(response.error)
            }
        },

        // Update Team
        async UPDATE_TEAM(data) {
            console.log('UPDATE_TEAM', data)
            this.teams.map((team) => {
                if (team.id === data.id) {
                    team.id = data.id
                    team.name = data.name
                }
            })
  
            const response = await fetch(`/api/teams/${data.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
  
            if (response.error) {
                console.log(response.error)
            }
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
