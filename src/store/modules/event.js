import EventService from '@/services/EventServices.js'

export const namespaced = true

export const state = {
  event: {},
  events: [],
  eventsTotal: ''
}

export const mutations = {
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
}
export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          event = response.data
        })
        .catch(error => {
          console.log('There was an error: ', error.response)
        })
    }
  },
  fetchEvents({ commit }, { perPage, page }) {
    return EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error : ', error.response)
      })
  }
}

export const getters = {
  catLength: state => {
    return state.categories.length
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
