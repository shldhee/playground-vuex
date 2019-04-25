<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
// import EventService from '@/services/EventServices.js'

export default {
  components: {
    EventCard
  },

  created() {
    this.$store.dispatch('fetchEvents')
  },
  computed: mapState(['events'])
}
</script>

<style lang="scss" scoped></style>
