<template>
  <div id="app">
    <HeaderComponent />
  </div>
</template>

<script>
  import HeaderComponent from './components/Header.vue';

  export default {
    name: 'app',
    components: {
      HeaderComponent,
    }
  }
</script>

<style lang="scss">
  @import '@/styles/global.scss';

  #app {
    font-family: 'Helvetica';
  }
</style>
