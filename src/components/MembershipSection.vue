<template>
  <div class="page-container">
    <div class="container">
      <div class="circle-container">
        <div class="circle">1</div>
      </div>

      <div class="heading">
        <h3>Membership</h3>
        <p>Select your membership type below:</p>
      </div>

      <PricingOptionsList />

      <Error v-if="this.$store.state.error === MEMBERSHIP_ERROR" />

      <p class="disclaimer">
        *If you are under 18 years of age please read
        <a href="https://ome.ascap.com/helpcenter#underAge" target="_blank">
          more about how to join ASCAP.
        </a>
      </p>

      <PublisherType v-if="this.showPublisherOptions" />

      <p class="disclaimer">
        ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application.
        Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of
        <a href="https://www.tincheck.com/pages/tincheck-agreement" target="_blank">TINCheck</a> and
        <a href="https://smartystreets.com/legal/privacy-policy" target="_blank">SmartyStreets.</a>
      </p>

      <div class="form-actions">
        <a href="https://www.ascap.com/" class="cancel">Cancel</a>
        <button class="continue cute" @click="continueClicked">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { MEMBERSHIP_ERROR, PUBLISHER_ERROR } from '@/constants/errors';
import { SET_ERROR } from '@/constants/mutations';
import PricingOptionsList from './PricingOptionsList';
import PublisherType from './PublisherType';
import Error from './Error';

export default {
  name: 'MembershipSection',
  data: () => ({
    MEMBERSHIP_ERROR,
    PUBLISHER_ERROR,
  }),
  components: {
    PricingOptionsList,
    PublisherType,
    Error,
  },
  computed: {
    showPublisherOptions() {
      return this.$store.state.selectedMembershipOption === 'Writer & Publisher' || this.$store.state.selectedMembershipOption === 'Publisher';
    }
  },
  methods: {
    continueClicked() {
      // Check to see if any options are selected. If not, add error options and message
      if (!this.$store.state.selectedMembershipOption) {
        this.SET_ERROR(MEMBERSHIP_ERROR);
      }

      // If the publisher dropdown is shown and none is selected, throw error
      if (this.showPublisherOptions && !this.$store.state.selectedPublisherOption) {
        this.SET_ERROR(PUBLISHER_ERROR);
      }
    },
    ...mapMutations([
      SET_ERROR,
    ]),
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  padding: 0 25px;
  opacity: 1;
  margin: 50px auto;

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

.container {
  border-left: 1px solid #cecece;
  position: relative;
  padding: 0 0 150px 25px;

  @media (min-width: 992px) {
    padding-left: 50px;
  }
}

.circle-container {
  background-color: $white;
  display: flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  position: absolute;
  left: -17.5px;
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

.heading {
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 30px;
    font-size: 14px;
  }
}

.disclaimer {
  line-height: 21px;
  font-size: 14px;
  margin-bottom: 10px;

  a {
    color: $blue;
    text-decoration: none;

    &:hover {
      color: #489cef;
    }
  }
}

.cancel {
  text-transform: uppercase;
  border-radius: 2px;
  -webkit-transition: all .2s ease;
  transition: all .3s ease-in-out;
  padding: 8px 20px;
  font-size: 16px;
  background-color: $white;
  color: #0d0d0d;
  border: 1px solid #ededed;
  text-decoration: none;
  font-weight: 600;
  margin-right: 10px;

  &:hover {
    background-color: #fafafa;
    border: 1px solid #cecece;
  }
}


.continue {
  text-transform: uppercase;
  color: $white;
  border-radius: 2px;
  transition: all .3s ease-in-out;
  padding: 8px 20px;
  font-size: 16px;
  background-color: $blue;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: $darkblue;
  }
}

.form-actions {
  margin-top: 20px;
  display: flex;
}
</style>