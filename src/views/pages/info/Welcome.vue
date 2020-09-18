<template>
  <a-result
    title="Добро пожаловать"
    sub-title='на конкурс школьных лесничеств "Лучшее школьное лесничество Калужской области"'
    class="welcome"
  >
    <template #icon>
      <div class="welcome__wrapper">
        <p>Конкурс школьных лесничеств Калужской области успешно завершен</p>
        <div class="welcome__inner-wrapper">
          <img src="@/assets/images/logo.svg" class="welcome__logo">  
        </div>
        
      </div>
    </template>
    <template #extra>
      <router-link :to="{ name: 'lite-guide' }">
        <a-button type="primary" disabled>
          Завершено
        </a-button>  
      </router-link>
    </template>
  </a-result>
</template>

<script>
export default {

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