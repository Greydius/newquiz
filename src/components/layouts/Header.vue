<template>
  <a-layout-header class="header">
    <div class="header__block">
      <router-link
        :to="{ name: 'home' }"
        class="logo"
      >
        <img
          src="@/assets/logo.png"
          class="logo__img"
          alt=""
        >
      </router-link>
    </div>

    <HeaderButtons class="header__block" />

    <div class="header__block">
      <HeaderProfile v-if="isAuthorized" />
    </div>
  </a-layout-header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HeaderProfile from '@/components/header/HeaderProfile'
import HeaderButtons from '@/components/header/HeaderButtons'

const { mapGetters: mapAuthGetters } = createNamespacedHelpers('auth')

export default {
  name: 'Header',

  components: {
    HeaderProfile,
    HeaderButtons
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
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
