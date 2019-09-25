<template>
  <div>
    <h3>Publisher Company Type</h3>
    <p>Please select the federal tax classification of your publisher company.</p>
    <div class="container" :class="{ error: this.$store.state.error === this.publisherError, 'open': this.showPublisherOptions }">
      <button @click="togglePublisherOptions">
        {{ this.$store.state.selectedPublisherOption ? this.$store.state.selectedPublisherOption : 'Publisher Company Type' }}
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
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PublisherType',
  data: () => ({
    publisherError: 'Please select your publisher company type.',
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
      'SET_PUBLISHER_OPTION',
      'SET_ERROR',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    border: 1px solid $grey;
    border-radius: 2px;

    &.error {
      border-color: $red;
    }

    &.open {
      border-color: $blue;
    }

    &:hover:not(.open) {
      border-color: #4a4d56;
    }
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

    &:focus {
      outline: none;
    }

    &:hover {
      border-color: #4a4d56;
    }
  }

  .option {
    display: block;
    padding: 12px 10px;
    color: #0d0d0d;
    border-bottom: 1px solid #ededed;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background-color: #ededed;
      color: #1178ce;
    }
  }
</style>