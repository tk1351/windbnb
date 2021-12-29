import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            open: false,
            input: 'location'
        }
    },
    mutations: {
        changeState(state) {
            state.open = !state.open
        },
        close(state) {
            state.open = false
        },
        changeInputTab(state, payload) {
            state.input = payload
        }
    }
})