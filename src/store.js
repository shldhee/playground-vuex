import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    event: {},
    events: [],
    eventsTotal: ''
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvent({ commit }, id) {
      return EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvents({ commit }, { perPage, page }) {
      return EventService.getEvents(perPage, page)
        .then(response => {
          commit(
            'SET_EVENTS_TOTAL',
            parseInt(response.headers['x-total-count'])
          )
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error : ', error.response)
        })
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    }
  }
})
