<template>
  <div class="guide-intro">
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

    <p>
      Попробовать тест:
    </p>
    <ModulesList :list="modules" :columnsCount="3" />
  </div>
</template>

<script>
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    name: 'testing-test',
    title: 'Пробный тест',
    description: 'Служит для проверки',
  },
]

export default {
  name: 'GuideTest',

  components: {
    ModulesList,
  },

  data() {
    return {
      modules
    }
  },
}
</script>

<style lang="scss">
.guide-modules-again {
  &__modules-list {
    margin-bottom: 16px;
  }

  &__button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>