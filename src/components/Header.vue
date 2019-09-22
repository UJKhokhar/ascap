<template>
  <Header>
    <nav>
      <a href="#" class="logo">
        <img src="@/assets/mobile_logo.svg" />
        <img src="@/assets/logo.svg" />
      </a>
      <h1>Membership Application</h1>
      <a href="#" class="help">
        <button>Looking for help?</button>
        <svg id="ome-help-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
      </a>
    </nav>
  </Header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
  }
</script>

<style lang="scss" scoped>
  nav {
    background-image: linear-gradient(-135deg,#489cef,#175da7);
    color: $white;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    @include breakpoint(desktop) {
      padding: 40px;
    }
  }

  h1 {
    font-weight: bold;
    align-self: center;
    font-size: 16px;

    @include breakpoint(desktop) {
      font-size: 28px;
    }
  }

  .logo {
    align-self: center;

    img:last-child {
      display: none;
    }

    @include breakpoint(desktop) {
      img:first-of-type {
        display: none;
      }

      img:last-of-type {
        display: block;
      }
    }
  }

  .help {
    align-self: center;
    text-decoration: none;

    &:visited {
      color: unset;
    }

    button {
      display: none;
      text-transform: uppercase;
      color: $white;
      border: 2px solid $white;
      border-radius: 2px;
      padding: 5px;
      transition: all .2s ease;
      padding: 8px 20px;
      background: none;
      font-size: 16px;

      &:hover {
        background-color: $white;
        color: $blue;
      }

      @include breakpoint(desktop) {
        display: block;
      }
    }

    svg {
      &:hover {
        stroke: $blue;
        fill: #fff;
      }

      @include breakpoint(desktop) {
        display: none;
      }
    }
  }
</style>