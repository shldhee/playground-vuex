<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>This event is created by {{ categories }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    localComputed() {
      return 'aa'
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style lang="scss" scoped></style>
