<template>
  <div class="page-welcome">
    <div class="page__logos">
      <logo-1-icon />
      <logo-2-icon />  
    </div>
    <div class="page__info">
      <h1 class="page__title">Добро пожаловать</h1>
      <h2 class="page__subtitle">на конкурс школьных лесничеств</h2>
      <h3 class="page__subtitle-2">"Лучшее школьное лесничество Калужской области"</h3>
    </div>
    <div class="page__decoration">
      <span class="page__decoration-title">Калужская область</span>
      <div class="page__decoration-block">
        <map-icon />
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
.info-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome {
  padding: 24px 16px;

  &__wrapper {
    font-weight: bold;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: bold;
    }
  }

  &__inner-wrapper {
    position: relative;
  }
  &__logo {
    width: 200px;
  }
}
</style>