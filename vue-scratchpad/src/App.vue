<template>
  <div id="app">
    <h1>{{ product }}</h1>
    <h1>{{ description }}</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      product: "Socks",
      description: "This is a pair of socks"
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
