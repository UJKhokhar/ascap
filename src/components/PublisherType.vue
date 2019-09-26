<template>
  <div class="component-container" :class="{ error: this.$store.state.error === PUBLISHER_ERROR }">
    <h3>Publisher Company Type</h3>
    <p>Please select the federal tax classification of your publisher company.</p>
    <div class="dropdown-container">
      <div class="dropdown"
        :class="{ error: this.$store.state.error === PUBLISHER_ERROR, open: this.showPublisherOptions }"
      >
        <button @click="togglePublisherOptions" :class="{ selected: !!this.$store.state.selectedPublisherOption }">
          <label>Publisher Company Type</label>
          {{ this.$store.state.selectedPublisherOption }}
          <svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1">
              <g id="down-arrow" fill-rule="nonzero">
                <path d="M15.2465234,0.918304993 C15.0397833,0.711564894 14.7038306,0.711564894 14.4970905,0.918304993 L7.90724985,7.52106691 L1.30448793,0.918304993 C1.09774783,0.711564894 0.761795173,0.711564894 0.555055074,0.918304993 C0.348314975,1.12504509 0.348314975,1.46099775 0.555055074,1.66773785 L7.51961216,8.63229494 C7.62298221,8.73566499 7.75219478,8.78735002 7.89432859,8.78735002 C8.02354116,8.78735002 8.16567497,8.73566499 8.26904502,8.63229494 L15.2336021,1.66773785 C15.4532635,1.46099775 15.4532635,1.12504509 15.2465234,0.918304993 Z" id="Path"></path>
              </g>
            </g>
          </svg>
        </button>

        <ul v-if="showPublisherOptions">
          <li
            v-for="(publisherOption, idx) in publisherOptions"
            :key="idx"
            class="option"
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
import Error from './Error';
import '@/directives/clickOutside.js';

export default {
  name: 'PublisherType',
  components: {
    Error,
  },
  data: () => ({
    PUBLISHER_ERROR,
    showPublisherOptions: false,
    // Options should be constants somewhere
    publisherOptions: [
      "C Corporation",
      "S Corporation",
      "LLC - C Corporation",
      "LLC - S Corporation",
      "LLC - Partnership",
      "Individual / Sole proprietor or Single-member LLC",
      "Partnership",
      "Trust / Estate",
      "OTHER",
    ],
  }),
  methods: {
    togglePublisherOptions() {
      this.showPublisherOptions = !this.showPublisherOptions;
    },
    selectPublisher(option) {
      this.SET_PUBLISHER_OPTION(option);
      //should we check to see if there is an error
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
.component-container {
  margin: 40px 0;
}

.dropdown-container {
  height: 45px;
}

.dropdown {
  width: calc(100% - 40px);
  max-width: 690px;
  border: 1px solid $grey;
  border-radius: 2px;
  background-color: $white;
  position: absolute;
  z-index: 10;

  svg {
    right: 10px;
    top: 17px;
    position: absolute;
    transition: all .3s ease;
  }

  #down-arrow {
    fill: #000000;
  }

  &.error {
    border-color: $red;
  }


  &.open {
    border-color: $blue;

    svg {
      transform: rotate(180deg);
    }

    #down-arrow {
      fill: $blue;
    }
  }

  &:hover:not(.open) {
    border-color: #4a4d56;
  }
}

h3 {
  font-weight: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

p {
  margin-bottom: 20px;
  line-height: 21px;
  font-size: 14px;
}

button {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  border: none;
  padding: 0 12px;
  font-size: 18px;
  cursor: pointer;
  text-align: left;
  position: relative;

  &:not(.selected) {
    color: $grey;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: #4a4d56;
  }

  label {
    position: absolute;
    top: 0;
    font-size: 16px;
  }

  &.selected {
    label {
      font-size: 12px;
      background-color: white;
      width: 150px;
      text-align: center;
      line-height: 12px;
      transition: all .3s ease ;
      top: -7px;
      color: #6d6d6d;
    }
  }
}

.option {
  display: block;
  padding: 15px 12px;
  color: #0d0d0d;
  border-bottom: 1px solid #ededed;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ededed;
    color: #1178ce;
  }
}

ul {
  height: 300px;
  overflow: scroll;
}
</style>