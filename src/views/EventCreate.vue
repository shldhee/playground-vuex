<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ categories }}</p>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCount">Count</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
return {
  incrementBy: 1
}
  },
  computed: {
    localComputed() {
      return 'aa'
    },
    ...mapState(['user', 'categories'])
  },
  methods: {
    incrementCount() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  },
}
</script>

<style lang="scss" scoped></style>
