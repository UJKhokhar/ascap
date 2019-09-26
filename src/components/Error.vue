<template>
  <div>
    <p>{{ this.$store.state.error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style lang="scss" scoped>
div {
  color: $red;
  margin: 9px 0;
}
</style>