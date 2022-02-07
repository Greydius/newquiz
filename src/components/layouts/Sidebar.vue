<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__menu">
        <router-link :to="{ name: 'home' }" class="sidebar__menu-element sidebar__menu-element--main">
          <logo-icon class="sidebar__menu-element-icon" />
        </router-link>
        <router-link :to="{ name: 'home' }" class="sidebar__menu-element sidebar__menu-element">
          <logo-icon class="sidebar__menu-element-icon" />
        </router-link>
      </div>
    </div>
    <div class="sidebar__main">
      <div class="sidebar__main-timer">
        <div class="timer">
          <span class="timer__title">Таймер</span>
          <span class="timer__countdown">00:00</span>
        </div>
      </div>
      <div class="sidebar__main-action">

      </div>
      <div class="sidebar__main-sponsors">
        <div class="sidebar__main-sponsor">
          <plus-circle-icon class="sidebar__main-sponsor-icon" />
        </div>
        <div class="sidebar__main-sponsor">
          <plus-circle-icon class="sidebar__main-sponsor-icon" />
        </div>
        <div class="sidebar__main-sponsor">
          <plus-circle-icon class="sidebar__main-sponsor-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoIcon from '../../assets/icons/logo.svg'
import plusCircleIcon from '../../assets/icons/plus-circle.svg'
export default {
  components: {
    logoIcon, plusCircleIcon
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  display: flex;
  &__header {
    width: 100px;
    background-color: $green-warm;
  }

  &__menu {
    width: 100%;
    &-element {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      &--main {
        height: 100px;
        width: 100%;
        background: linear-gradient(180deg, #5FB45C 0%, #6AC767 100%);
      }
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: linear-gradient(180deg, rgba(95, 180, 92, 0.9) 0%, rgba(57, 178, 121, 0.9) 100%);

    &-timer {
      flex: 1;
      background: url(../../assets/images/forest.png);
      background-size: contain;
      background-position: center bottom;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-action {

    }

    &-sponsors {
      width: 100%;
      height: 100px;
      background-color: $green-dark;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-image: url(../../assets/images/pattern.png);
      background-size: cover;
      background-position: center bottom;
    }

    &-sponsor {
      display: flex;
      width: 50px;
      &-icon {
        width: 100%;
      }
    }
  }
}
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-transform: uppercase;
    color: $white;
  }
  &__countdown {
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    text-transform: uppercase;
    color: $white;
  }
}
</style>