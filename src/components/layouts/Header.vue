<template>
  <a-layout-header class="header">
    <div class="header__block">
      <span class="header__profile-login">forest@gmail.com</span>
      <router-link
        :to="{ name: 'home' }"
        class="header__profile"
      >
        <profile-icon class="header__profile-icon" />
      </router-link>
    </div>
  </a-layout-header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import profileIcon from '../../assets/icons/profile.svg'

const { mapGetters: mapAuthGetters } = createNamespacedHelpers('auth')

export default {
  name: 'Header',

  components: {
    profileIcon
  },

  data() {
    return {
      
    };
  },

  computed: {
    ...mapAuthGetters([
      'isAuthorized'
    ]),
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 50px;
  padding-right: 0;
  background-color: transparent;
  height: auto;

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2) {
      flex: 1;
      justify-content: flex-start;
      margin-left: 60px;
    }
  }

  &__profile {
    width: 100px;
    height: 100px;
    background-color: $green-warm;
    display: flex;
    justify-content: center;
    align-items: center;

    &-icon {
      width: 40px;
    }
    &-login {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #fff;
      margin-right: 32px;
    }
  }
}
.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &__img {
    width: 45px;
  }
  &__text {
    color: #fff;
    font-size: 28px;
  }
}
</style>
