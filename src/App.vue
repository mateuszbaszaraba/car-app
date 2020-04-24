<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <app-header></app-header>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
