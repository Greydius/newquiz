<template>
  <div class="guide-modules-again">
    <h2></h2>
    <p>
      Попробовать тест:
    </p>
    <ModulesList :list="modules" :columnsCount="3" />
    <div class="guide-modules-again__button-wrapper">
      <a-button @click="$emit('next')" type="primary">Завершить</a-button>
    </div>
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