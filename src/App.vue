<template>
  <div id="app" class="app-container">
    <HeaderComponent />
    <MembershipForm />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import MembershipForm from './components/MembershipForm.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    MembershipForm,
  },
};
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>
