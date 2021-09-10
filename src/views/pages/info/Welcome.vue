<template>
  <!-- <a-result
    title="Добро пожаловать"
    sub-title='на конкурс школьных лесничеств "Лучшее школьное лесничество Калужской области"'
    class="welcome"
  >
    <template #icon>
      <div class="welcome__wrapper">
        <p>Конкурс школьных лесничеств Калужской области состоится 18 сентября 2020 года в период с 8.00 до 13.00</p>
        <div class="welcome__inner-wrapper">
          <img src="@/assets/images/logo.svg" class="welcome__logo">  
        </div>
        
      </div>
    </template>
    <template #extra>
      <router-link :to="{ name: 'lite-guide' }">
        <a-button type="primary">
          Начать!
        </a-button>  
      </router-link>
    </template>
  </a-result> -->
  <div class="info-welcome">
    <img class="info-welcome__background" src="@/assets/images/logos.png" alt="">
    <div class="info-welcome__text">
      <div class="info-welcome">
        <h1>
          Конкурс школьных лесничеств Калужской области
          <br>
          успешно завершен!
        </h1>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  components: {

  },

  data() {
    return {
      deadline: Date.parse("Wed, 01 Sep 2021 08:00:00 GMT+0300")
    }
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
  position: relative;
  width: 100%;
  height: 100%;

  &__background {
    width: 85%;
    width: 90%;
    position: absolute;
    top: 15%;
    left: 5%;
  }
}

.welcome {
  padding: 24px 16px;

  &__wrapper {
    font-weight: bold;
    font-size: 24px;
    max-width: 670px;
    p {
      font-weight: bold;
    }
  }

  &__inner-wrapper {
    position: relative;
  }
  &__timer {
    position: absolute;
    height: 100%;
    top: 0;
    left: 100%;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 200px;
  }
}
</style>