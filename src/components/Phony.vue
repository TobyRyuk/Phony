<template>
  <div class="phony">
    <div class="center">
      <h1>{{ msg }}</h1>
      <p>Counter: {{ counter }}</p>
      <button @click="increment">INCREMENT</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'phony',
  computed: mapGetters([
    'counter',
    'msg'
  ]),
  methods: mapActions([
    'increment'
  ])
}
</script>

<style lang="sass" scoped>
  .phony {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }
  h1 {
    font-size: 4rem;
    text-shadow: 3px 3px 0px rgba(0,0,0,0.3);
  }
  p {
    text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
  }
  button {
    color: white;
    text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
  }
</style>
