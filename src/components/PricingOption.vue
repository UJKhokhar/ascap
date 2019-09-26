<template>
    <div
      @click="selectOption(option.title)"
      class="pricing-option"
      :class="className"
    >
      <div class="pricing-header">
        <svg
          v-if="option.title === 'Writer & Publisher'"
          id="quavers-and-briefcases"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
          width="40px"
          height="29px"
          viewBox="-24.652 -22.871 40 27"
          class="c-icon c-icon--size-auto"
        >
          <g transform="translate(15, 7)">
            <path d="M-16.564-16.8h3.777h10.173c1.084,0,1.962,0.879,1.962,1.961v9.425c0,1.083-0.877,1.962-1.962,1.962h-15.689
c-1.083,0-1.961-0.879-1.961-1.962v-3.697">
            </path>
            <path d="M-6.536-3.452v-15.254c0-1.054-0.878-1.907-1.961-1.907h-3.924c-1.083,0-1.96,0.854-1.96,1.907v15.254">
            </path>
          </g>
          <path d="M-17.523-7.893h-4.085c-1.129,0-2.043,0.915-2.043,2.043c0,1.128,0.915,2.042,2.043,2.042h2.043
c1.128,0,2.042-0.914,2.042-2.042V-7.893z M-5.265-9.936h-4.086c-1.128,0-2.042,0.914-2.042,2.042c0,1.128,0.914,2.043,2.042,2.043
h2.043c1.128,0,2.043-0.916,2.043-2.043V-9.936z">
          </path>
          <polyline points="-17.523,-7.893 -17.523,-20.151 -5.265,-22.194 -5.265,-9.936 "></polyline>
        </svg>

        <svg
          v-else-if="option.title === 'Writer'"
          id="quavers" xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
          width="22px"
          height="29px"
          viewBox="-26.663 -25.084 22 21.999"
          aria-hidden="true"
          class="c-icon c-icon--size-auto"
        >
          <path fill="none" d="M-18.997-8.528h-4.443c-1.228,0-2.223,0.996-2.223,2.223c0,1.227,0.996,2.221,2.223,2.221h2.223
          c1.227,0,2.221-0.994,2.221-2.221V-8.528z M-5.663-10.75h-4.445c-1.227,0-2.221,0.994-2.221,2.221s0.994,2.223,2.221,2.223h2.223
          c1.227,0,2.222-0.997,2.222-2.223V-10.75z">
          </path>
          <polyline fill="none" points="-18.997,-8.528 -18.997,-21.862 -5.663,-24.084 -5.663,-10.75 ">
          </polyline>
        </svg>

        <svg
          v-else-if="option.title === 'Publisher'"
          id="briefcase"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
          width="26"
          height="29"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="c-icon c-icon--size-auto">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>

        <h4>{{ option.title }}</h4>
      </div>
      <div class="pricing-info">
        <p class="description">{{ option.description }}</p>
        <p class="fee">{{ option.fee }}</p>
        <span class="fee-subtext">{{ option.feeSubtext }}</span>
        <h5>{{ option.requirementsSection.title }}</h5>
        <ul>
          <li v-for="(requirement, idx) in option.requirementsSection.requirements" :key="idx">
          <svg width="10px" height="7px" viewBox="0 0 10 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="icons8-checkmark" transform="translate(1.000000, 1.000000)" stroke="#000000">
                      <polyline id="Path" points="8 0 2.13333333 5 0 3.18181818"></polyline>
                  </g>
              </g>
          </svg>
          {{ requirement }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { MEMBERSHIP_ERROR } from '@/constants/errors';
import {
  SET_MEMBERSHIP_OPTION,
  SET_PUBLISHER_OPTION,
  SET_ERROR,
} from '@/constants/mutations';

export default {
  name: 'PricingOption',
  props: ['option'],
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
      SET_MEMBERSHIP_OPTION,
      SET_PUBLISHER_OPTION,
      SET_ERROR,
    ]),
  },
  computed: {
    // Set state of membership option
    className() {
      if (this.$store.state.error === MEMBERSHIP_ERROR) {
        return 'error';
      } else if (this.$store.state.selectedMembershipOption === this.option.title) {
        return 'active';
      } else if (this.$store.state.selectedMembershipOption && this.$store.state.selectedMembershipOption !== this.option.title) {
        return 'inactive';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
svg {
  vertical-align: sub;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pricing-option {
  width: 100%;
  border: 1px solid $grey;
  border-radius: 2px;
  cursor: pointer;
  transition: all .5s ease-in-out;

  &.active {
    box-shadow: 0 0 15px -1px rgba(0,0,0,.5);
    border: 1px solid $blue;

    .pricing-header {
      color: $white;
      background-color: $blue;
      background-image: none;
      border-color: $blue;
    }
  }

  &.error {
    border-color: $red;

    .pricing-header {
      border-color: $red;
    }
  }

  &.inactive {
    border-color: #a9abb6;

    .pricing-header {
      background: #fafafa;
      color: $grey;
    }

    .pricing-info {
      color: #6d6d6d;

      .fee {
        color: #6d6d6d;
      }

      h5 {
        color: #6d6d6d;
      }
    }
  }

  &:hover:not(.active) {
    border-color: #4dbdff;

    .pricing-header {
      border-color: #4dbdff;
      background: #fff linear-gradient(-180deg,rgba(255,255,255,0) 0%,rgba(17,120,206,.03) 100%);
      color: $darkblueheader;
    }

    .pricing-info {
      color: unset;

      .fee {
        color: $darkblue;
      }

      h5 {
        color: unset;
      }
    }
  }
}

.pricing-header {
  display: flex;
  background-image: linear-gradient(-180deg, rgb(250, 250, 250) 0%, rgb(237, 237, 237) 100%);
  border-bottom: 1px solid $grey;
  color: $darkblueheader;
  justify-content: center;
  padding: 16px 0;
  transition: all .5s ease-in-out;

  h4 {
    font-size: 16px;
    font-weight: 600;
    align-self: center;

    &.active {
      background-color: $blue;
    }

    @include breakpoint(desktop) {
      font-size: 20px;
    }
  }

  svg {
    align-self: center;
    margin-right: 10px;

    @include breakpoint(desktop) {
      margin-right: 16px;
    }
  }
}

.pricing-info {
  padding: 16px;
  font-size: 14px;
  transition: all .5s ease-in-out;

  .description {
    line-height: 21px;
    margin: 0 0 10px;
  }

  .fee {
    color: $darkblue;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 6px;
    line-height: 24px;
  }

  .fee-subtext {
    color: #6d6d6d;
  }

  h5 {
    font-weight: 600;
    margin: 18px 0 16px;
  }

  ul {
    list-style: none;
    margin-bottom: 16px;

    li {
      margin-bottom: 16px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
  }
}

#icons8-checkmark {
  stroke: currentColor;
}
</style>