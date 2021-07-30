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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  background-image: linear-gradient(to right, #08783e 0%, rgba(8, 120, 62, 0.7) 21%, rgba(8, 120, 62, 0.69) 40%, rgba(107, 183, 123, 0.68) 50%, rgba(2, 115, 60, 0.69) 64%, rgba(2, 115, 60, 0.7) 81%, #02733c 100%);

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
