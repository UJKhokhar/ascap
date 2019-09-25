<template>
  <div id="app">
    <HeaderComponent />
    <MembershipSection />
  </div>
</template>

<script>
  import HeaderComponent from './components/Header.vue';
  import MembershipSection from './components/MembershipSection.vue';

  export default {
    name: 'app',
    components: {
      HeaderComponent,
      MembershipSection,
    }
  }
</script>

<style lang="scss">
  @import '@/styles/global.scss';

  #app {
    font-family: 'Source Sans Pro';
  }
</style>
