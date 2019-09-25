<template>
  <div class="options-container">
    <PricingOption
      v-for="(option, idx) in options"
      @click.native="selectOption(option.title)"
      :key="idx"
      :id="`option${idx}`"
      :option="option"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import PricingOption from './PricingOption';

export default {
  name: 'PricingOptionsList',
  data: () => ({
    options: [
      {
        title: 'Writer & Publisher',
        description: 'ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.',
        fee: '$100 Application Fee',
        feeSubtext: 'non-refundable',
        requirementsSection: {
          title: 'Requirements',
          requirements: [
            'Legal Name',
            'Mailing Address',
            'Valid Email Address',
            'SSN/ITIN or EIN',
            'Must be 18 or older*'
          ]
        }
      },
      {
        title: 'Writer',
        description: 'A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.',
        fee: '$50 Application Fee',
        feeSubtext: 'non-refundable',
        requirementsSection: {
          title: 'Requirements',
          requirements: [
            'Legal Name',
            'Mailing Address',
            'Valid Email Address',
            'SSN/ITIN or EIN',
            'Must be 18 or older*'
          ]
        }
      },
      {
        title: 'Publisher',
        description: 'A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.',
        fee: '$50 Application Fee',
        feeSubtext: 'non-refundable',
        requirementsSection: {
          title: 'Requirements',
          requirements: [
            'Legal Name',
            'Mailing Address',
            'Valid Email Address',
            'SSN/ITIN or EIN',
            'Must be 18 or older*'
          ]
        }
      },
    ],
  }),
  components: {
    PricingOption,
  },
  methods: {
    // Move this to PricingOption
    selectOption(optionName) {
      this.SET_MEMBERSHIP_OPTION(optionName);

      // We need to make sure we reset the publisher options and errors
      // if a user switches between membership options
      this.SET_PUBLISHER_OPTION('');
      this.SET_ERROR('');
    },
    ...mapMutations([
      'SET_MEMBERSHIP_OPTION',
      'SET_PUBLISHER_OPTION',
      'SET_ERROR',
    ]),
  }
}
</script>

<style lang="scss" scoped>
  .options-container {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
    row-gap: 16px;

    @include breakpoint(desktop) {
      grid-template-columns: repeat(3, minmax(267px, 327px));
      row-gap: 0px;
      column-gap: 30px;
    }
  }
</style>