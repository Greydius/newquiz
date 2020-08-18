<template>
  <a-layout-header class="header">
    <div class="header__block">
      <router-link
        :to="{ name: 'home' }"
        class="logo"
      >
        <span class="logo__text">Ecoforum40.ru</span>
      </router-link>
    </div>

    <div class="header__block">
      <HeaderProfile v-if="isAuthorized" />
    </div>
  </a-layout-header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HeaderProfile from '@/components/header/HeaderProfile'

const { mapGetters: mapAuthGetters } = createNamespacedHelpers('auth')

export default {
  name: 'Header',

  components: {
    HeaderProfile,
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
  &__text {
    color: #fff;
    font-size: 28px;
  }
}
</style>
