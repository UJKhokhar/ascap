<template>
  <div class="membership-options-container">
    <MembershipOption
      v-for="(option, idx) in options"
      :key="idx"
      :id="`option${idx}`"
      :option="option"
    />
  </div>
</template>

<script>
import { WRITER_AND_PUBLISHER, WRITER, PUBLISHER } from '@/constants/membershipOptions';
import MembershipOption from './MembershipOption';

export default {
  name: 'MembershipOptionsList',
  data: () => ({
    options: [
      WRITER_AND_PUBLISHER,
      WRITER,
      PUBLISHER,
    ],
  }),
  components: {
    MembershipOption,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/MembershipOptionsList.scss';
</style>