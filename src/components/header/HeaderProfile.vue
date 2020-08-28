<template>
  <div class="header-profile">
    <span class="header-profile__title">{{ user.name }}</span>
    <a-avatar 
      @click="logOut"
      @mouseenter="onHover"
      @mouseleave="onUnhover"
      :icon="currentIcon"
      :src="user.avatar"
      shape="circle"
      class="header-profile__avatar"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: mapAuthGetters, mapActions: mapAuthActions } = createNamespacedHelpers('auth')

export default {
  name: 'HeaderProfile',
  data() {
    return {
      isHover: false,
    };
  },

  computed: {
    ...mapAuthGetters({
      user: 'getUser'
    }),

    currentIcon() {
      return this.isHover ? 'logout' : 'user'
    }
  },

  methods: {
    ...mapAuthActions({
      logout: 'logout',
    }),

    logOut() {
      this.logout()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    },
    onHover() {
      this.isHover = true;
    },
    onUnhover() {
      this.isHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-profile {
  display: flex;
  align-items: center;

  &__title {
    color: #fff;
  }

  &__avatar {
    cursor: pointer;
  }

  &__title + &__avatar {
    margin-left: 15px;
  }
}
</style>
