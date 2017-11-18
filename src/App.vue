<template>
  <div id="app">
    <div class="loading-bar">
      <div class="progress" :style="width"></div>
    </div>
    <div v-for="s in Object.keys($store.state.ajaxCalls)" :key="s.type">
      <div>
        {{ s }}: {{ $store.state.ajaxCalls[s] }}
      </div>
    </div>
    <br>
    {{ $store.getters['pendingCalls'] }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',

  created () {
    this.$store.dispatch('slowCall')
    this.$store.dispatch('mediumCall')
    this.$store.dispatch('fastCall')
  },

  computed: {
    width () {
      return { width: 100 / this.$store.getters['pendingCalls'] + 'vw' }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.loading-bar {
  left: 0px;
  height: 3px;
  top: 0px;
  position: absolute;
  width: 100vw;
  background-color: green;

}

.progress {
  background-color: white;
  position: absolute;
  left: 1px;
  top: 1px;
  height: 1px;
}
</style>
