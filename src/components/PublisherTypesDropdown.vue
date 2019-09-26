<template>
  <div class="publisher-options-container" :class="{ error: this.$store.state.error === PUBLISHER_ERROR }">
    <h4>Publisher Company Type</h4>
    <p>Please select the federal tax classification of your publisher company.</p>
    <div class="dropdown-container" v-click-outside="hidePublisherOptions">
      <div class="dropdown"
        :class="{ error: this.$store.state.error === PUBLISHER_ERROR, open: this.showPublisherOptions }"
      >
        <button @click="togglePublisherOptions" :class="{ selected: !!this.$store.state.selectedPublisherOption }">
          <label>Publisher Company Type</label>
          {{ this.$store.state.selectedPublisherOption }}
          <svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1">
              <g class="down-arrow" fill-rule="nonzero">
                <path d="M15.2465234,0.918304993 C15.0397833,0.711564894 14.7038306,0.711564894 14.4970905,0.918304993 L7.90724985,7.52106691 L1.30448793,0.918304993 C1.09774783,0.711564894 0.761795173,0.711564894 0.555055074,0.918304993 C0.348314975,1.12504509 0.348314975,1.46099775 0.555055074,1.66773785 L7.51961216,8.63229494 C7.62298221,8.73566499 7.75219478,8.78735002 7.89432859,8.78735002 C8.02354116,8.78735002 8.16567497,8.73566499 8.26904502,8.63229494 L15.2336021,1.66773785 C15.4532635,1.46099775 15.4532635,1.12504509 15.2465234,0.918304993 Z" id="Path"></path>
              </g>
            </g>
          </svg>
        </button>

        <ul v-if="showPublisherOptions">
          <li
            v-for="(publisherOption, idx) in PUBLISHER_OPTIONS"
            :key="idx"
            class="publisher-option"
            @click="selectPublisher(publisherOption)"
          >
            {{ publisherOption }}
          </li>
        </ul>
      </div>
    </div>
    <Error v-if="this.$store.state.error === PUBLISHER_ERROR" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { PUBLISHER_ERROR } from '@/constants/errors';
import { SET_PUBLISHER_OPTION, SET_ERROR } from '@/constants/mutations';
import { PUBLISHER_OPTIONS} from '@/constants/publisherOptions';
import Error from './Error';
import '@/directives/clickOutside.js';

export default {
  name: 'PublisherTypesDropdown',
  components: {
    Error,
  },
  data: () => ({
    PUBLISHER_ERROR,
    PUBLISHER_OPTIONS,
    showPublisherOptions: false,
  }),
  methods: {
    togglePublisherOptions() {
      this.showPublisherOptions = !this.showPublisherOptions;
    },
    hidePublisherOptions() {
      this.showPublisherOptions = false;
    },
    selectPublisher(option) {
      this.SET_PUBLISHER_OPTION(option);
      this.SET_ERROR('');
      this.togglePublisherOptions();
    },
    ...mapMutations([
      SET_PUBLISHER_OPTION,
      SET_ERROR,
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/PublisherTypesDropdown.scss';
</style>