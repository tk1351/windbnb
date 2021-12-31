import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            open: false,
            input: 'location',
            guests: {
                adults: 0,
                children: 0
            }
        }
    },
    getters: {
        getAdults(state) {
            return state.guests.adults
        },
        getChildren(state) {
            return state.guests.children
        },
        getGuests(state) {
            const { adults, children } = state.guests
            return adults + children
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
        },
        increment(state, payload) {
            payload === 'Adults' ? state.guests.adults++ : state.guests.children++
        },
        decrement(state, payload) {
            payload === 'Adults' ? state.guests.adults-- : state.guests.children--
        }
    }
})
