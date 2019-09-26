<template>
  <div class="membership-form-container">
    <div class="membership-form">
      <div class="circle">
        <div>1</div>
      </div>

      <div class="membership-heading">
        <h2>Membership</h2>
        <p>Select your membership type below:</p>
      </div>

      <MembershipOptionsList />

      <Error v-if="this.$store.state.error === MEMBERSHIP_ERROR" />

      <p class="disclaimer">
        *If you are under 18 years of age please read
        <a href="https://ome.ascap.com/helpcenter#underAge" target="_blank">
          more about how to join ASCAP.
        </a>
      </p>

      <PublisherTypesDropdown v-if="this.showPublisherOptions" />

      <p class="disclaimer">
        ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application.
        Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of
        <a href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank">TINCheck</a> and
        <a href="https://smartystreets.com/legal/privacy-policy" target="_blank">SmartyStreets.</a>
      </p>

      <div class="form-actions">
        <a href="https://www.ascap.com/" class="cancel-btn btn">Cancel</a>
        <button class="continue-btn btn" @click="submitForm">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { WRITER_AND_PUBLISHER, WRITER, PUBLISHER } from '@/constants/membershipOptions';
import { MEMBERSHIP_ERROR, PUBLISHER_ERROR } from '@/constants/errors';
import { SET_ERROR } from '@/constants/mutations';
import MembershipOptionsList from './MembershipOptionsList';
import PublisherTypesDropdown from './PublisherTypesDropdown';
import Error from './Error';

export default {
  name: 'MembershipForm',
  data: () => ({
    MEMBERSHIP_ERROR,
    PUBLISHER_ERROR,
  }),
  components: {
    MembershipOptionsList,
    PublisherTypesDropdown,
    Error,
  },
  computed: {
    showPublisherOptions() {
      const selectedMembershipOption = this.$store.state.selectedMembershipOption;
      return selectedMembershipOption === WRITER_AND_PUBLISHER.title || selectedMembershipOption === PUBLISHER.title;
    }
  },
  methods: {
    submitForm() {
      // Check to see if any options are selected
      if (!this.$store.state.selectedMembershipOption) {
        this.SET_ERROR(MEMBERSHIP_ERROR);
      }

      // If the publisher dropdown is shown and none are selected, throw error
      if (this.showPublisherOptions && !this.$store.state.selectedPublisherOption) {
        this.SET_ERROR(PUBLISHER_ERROR);
      }

      this.validSubmission();
    },
    validSubmission() {
      const selectedMembershipOption = this.$store.state.selectedMembershipOption;
      const selectedPublisherOption = this.$store.state.selectedPublisherOption;

      if (selectedMembershipOption === WRITER.title) {
        // eslint-disable-next-line
        console.log(`Success! Membership Option: ${selectedMembershipOption}`);
      } else if ((selectedMembershipOption === WRITER_AND_PUBLISHER.title || selectedMembershipOption === PUBLISHER.title) && selectedPublisherOption) {
        // eslint-disable-next-line
        console.log(`Success! Membership Option: ${selectedMembershipOption}`);
        // eslint-disable-next-line
        console.log(`Publisher Option: ${selectedPublisherOption}`);
      }
    },
    ...mapMutations([
      SET_ERROR,
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/MembershipForm.scss';
</style>