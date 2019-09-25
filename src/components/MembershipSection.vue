<template>
  <div class="container">
    <div class="circle">1</div>

    <h3>Membership</h3>
    <p>Select your membership type below:</p>

    <PricingOptionsList />

    <Error v-if="membershipError === this.$store.state.error" />

    <p>
      *If you are under 18 years of age please read
      <a href="https://ome.ascap.com/helpcenter#underAge" target="_blank">
        more about how to join ASCAP.
      </a>
    </p>

    <PublisherType v-if="this.showPublisherOptions" />

    <Error v-if="publisherError === this.$store.state.error" />

    <p>
      ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application.
      Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of
      <a href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank">TINCheck</a> and
      <a href="https://smartystreets.com/legal/privacy-policy" target="_blank">SmartyStreets.</a>
    </p>

    <a href="https://www.ascap.com/">Cancel</a>
    <button @click="continueClicked">Continue</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import PricingOptionsList from './PricingOptionsList';
import PublisherType from './PublisherType';
import Error from './Error';

export default {
  name: 'MembershipSection',
  components: {
    PricingOptionsList,
    PublisherType,
    Error,
  },
  data: () => ({
    // Errors should be constants somewhere
    membershipError: 'Please select your membership type.',
    publisherError: 'Please select your publisher company type.',
  }),
  computed: {
    showPublisherOptions() {
      return this.$store.state.selectedMembershipOption === 'Writer & Publisher' || this.$store.state.selectedMembershipOption === 'Publisher';
    }
  },
  methods: {
    continueClicked() {
      // Check to see if any options are selected. If not, add error options and message
      if (!this.$store.state.selectedMembershipOption) {
        this.SET_ERROR(this.membershipError);
      }

      // If the publisher dropdown is shown and none is selected, throw error
      if (this.showPublisherOptions && !this.$store.state.selectedPublisherOption) {
        this.SET_ERROR(this.publisherError);
      }
    },
    ...mapMutations([
      'SET_ERROR',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-left: 1px solid #cecece;
  padding: 0 25px;
  opacity: 1;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}

.circle {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  line-height: 25px;
  background: $blue;
  color: $white;
  text-align: center;
  font-size: 12px;
}

h3 {
  font-size: 23px;
  font-weight: 600;
}
</style>