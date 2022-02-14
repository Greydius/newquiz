<template>
  <div class="page-welcome">
    <div class="page__logos">
      <logo-1-icon class="page__logo" />
      <logo-2-icon class="page__logo" />  
    </div>
    <div class="page__info">
      <h1 class="page__title">Добро пожаловать</h1>
      <h2 class="page__subtitle">на конкурс школьных лесничеств</h2>
      <h3 class="page__subtitle-2">"Лучшее школьное лесничество Калужской области"</h3>
    </div>
    <div class="page__decoration">
      <span class="page__decoration-title">Калужская область</span>
      <div class="page__decoration-block">
        <map-icon class="page__decoration-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import logo1Icon from '../../../assets/icons/logo-1.svg'
import logo2Icon from '../../../assets/icons/logo-2.svg'
import mapIcon from '../../../assets/icons/map.svg'

export default {
  components: {
    logo1Icon, logo2Icon, mapIcon
  }
}
</script>

<style lang="scss">
.page {
  &-welcome {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 215px;
  }

  &__logos {
    display: flex;
    align-items: flex-start;
    margin-left: 25px;
  }

  &__logo {
    // width: 150px;
    margin-right: -20px;
  }

  &__info {
    margin-top: 38px;
    margin-left: 25px;
    flex: 1;
  }

  &__title {
    font-weight: bold;
    font-size: 50px;
    line-height: 61px;
    margin-bottom: 14px;

    text-transform: uppercase;
    color: #FFFFFF;
  }

  &__subtitle {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;

    text-transform: uppercase;
    margin-bottom: 4px;

    color: #FFFFFF;
  }

  &__subtitle-2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  &__decoration {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    &-title {
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 12px;
    }
    &-block {
      width: 216px;
      height: 216px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #5FB45C;
    }
    &-icon {

    }
  }
}
</style>