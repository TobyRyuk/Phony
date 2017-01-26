<template>
  <div class="app">
    <Phony />
  </div>
</template>

<script>
import Phony from './components/Phony.vue'

export default {
  name: 'app',
  components: { 'Phony': Phony }
}
</script>

<style lang="sass" scoped>
  .app {
    height: 100vh;
  }
</style>
