<template>
  <div>
    {{ this.$store.state.error }}
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style lang="scss" scoped>
  div {
    color: $red;
  }
</style>