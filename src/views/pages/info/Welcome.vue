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
      <h2>Дорогие участники конкурса!</h2>
      <p>
        Предлагаем Вам пройти пробный тест для ознакомления с особенностями работы с вопросами в он-лайн режиме.
      </p>
      <p>
        Дистанционный конкурс состоит из 3 этапов. Последовательность прохождения этапов Вы выберете сами.
        Для начала работы с пробным этапом нажмите на него. В предложенном пробном этапе Вам необходимо ответить на 4 вопроса.
        Для ответов на все вопросы у Вас будет 6 минут.
      </p>
      <p>
        Для начала выполнения заданий нажмите кнопку «Начать», для перехода к следующему вопросу нажмите кнопку «Далее»,
        для возврата к предыдущему вопросу нажмите кнопку «Назад» либо кнопку с указанием номера вопроса.
        Чтобы завершить задание, нажмите кнопку «Завершить».
      </p>  
    </div>
 
    <router-link :to="{ name: 'module', params: { moduleId: 'testing-test'} }">
      <a-button type="primary">
        ПРОБНЫЙ ТЕСТ
      </a-button>  
    </router-link>
  </div>
  
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      deadline: Date.parse("Fry, 18 Sep 2020 08:00:00 GMT+0300")
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
    position: absolute;
    top: 0;
    left: 7.5%;
    width: 85%;
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