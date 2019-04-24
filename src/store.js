import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

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
    count: 0
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
    // INCREMENT_COUNT(state, value) {
    //   state.count += value
    // }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
    // updateCount(context, incrementBy) {
    //   console.log(context)
    //   if (context.state.user) {
    //     context.commit('INCREMENT_COUNT', incrementBy)
    //   }
    // }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    }
  }
})
