<template>
  <div id="app">
    <v-button>按钮</v-button>
  </div>
</template>

<script>



export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px;
}
html{
  font-size: var(--font-size);
}
:root{
  --font-size: 14px;
}
</style>
