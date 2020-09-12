<template>
  <div class="guide-modules-again">
    <h2></h2>
    <p>
      После завершения всех этапов тестирования появится кнопка "Завершить"
    </p>
    <ModulesList :list="modules" :columnsCount="3" />
    <div class="guide-modules-again__button-wrapper">
      <a-button type="primary">Завершить</a-button>
    </div>
  </div>
</template>

<script>
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    name: 'testing',
    title: 'Юный ботаник',
    description: 'Найди как можно больше видов растений на фотографиях',
    status: 'done',
  },
  {
    name: 'young-forest-grower',
    title: 'Юный лесокультурник',
    description: 'Тебе предстоит доказать свои знания, ответив на вопросы',
    status: 'done',
  },
  {
    name: 'young-botanist',
    title: 'Юный ботаник',
    description: 'Посмотри видео и ответь на вопросы',
    status: 'done',
  }
]

export default {
  name: 'GuideModules',

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