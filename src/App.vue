<template>
  <div id="app">
    <div class="loading-bar" :style="opacity">
      <div class="progress" :style="width"></div>
    </div>

    <div v-for="s in Object.keys($store.state.ajaxCalls)" :key="s.type">
      <div>
        {{ $store.state.ajaxCalls[s] }}
      </div>
    </div>
    <br>
    Progress: {{ $store.getters['pendingCalls'] }} / {{ $store.getters['total'] }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',

  created () {
    this.$store.dispatch('firstCall', { isAjax: true })
    this.$store.dispatch('secondCall', { isAjax: true })
    this.$store.dispatch('thirdCall', { isAjax: true })
  },

  computed: {
    width () {
      return {
        'width': 100 - (100 / (this.$store.getters['total'] / this.$store.getters['pendingCalls'])) + 'vw',
      }
    },

    opacity () {
      return { 
        'opacity': this.$store.getters['pendingCalls'] === 0 ? '0' : '1',
        'transition-delay': '1.5s',
        'transition-duration': '1s'
      }
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

}

.progress {
  transition-duration: 1s;
  background-color: rgba(0, 188, 212, 0.5);
  position: absolute;
  left: 1px;
  top: 1px;
  height: 2px;
}
</style>
