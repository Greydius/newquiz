<template>
  <div class="modules">
    <PageHeader
      title="Выбор этапа"
      sub-title="Дистанционный конкурс состоит из 3 этапов. Последовательность прохождения этапов Вы выбираете сами. Для начала работы с этапом нажмите на него. После выполнения заданий одного из этапов Вы вернетесь на эту страницу, чтобы приступить к заданиям следующего этапа. После завершения этапа на кнопке соответствующего этапа появится отметка «Завершено»"
      @back="goToGuide"
      class="modules__header"
    />
    <ModulesList :list="modules" :columnsCount="3" class="modules__list" />
    <div v-if="isTestingComplete" class="modules__complete-wrapper">
      <router-link :to="{ name: 'goodbye' }">
        <a-button
          style="font-size: 30px; height: auto;"
          type="primary"
        >Завершить конкурс</a-button>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import PageHeader from '@/components/PageHeader'
import ModulesList from '@/components/modules/ModulesList'

const { mapGetters: mapTRGetters, mapMutations: mapTestsResultMutations } = createNamespacedHelpers('testsResult')

const modules = [
  {
    name: 'testing',
    title: 'Тестирование',
    description: '4 блока вопросов, на которые предстоит ответить',
    disabled: false,
  },
  {
    name: 'young-botanist',
    title: 'Юный ботаник',
    description: 'Найди как можно больше видов растений на фотографиях',
    disabled: false,
  },
  {
    name: 'young-forest-grower',
    title: 'Юный лесокультурник',
    description: 'Посмотри видео и ответь на вопросы',
    disabled: false,
  }
]

export default {
  name: 'Modules',

  components: {
    PageHeader, ModulesList,
  },

  data() {
    return {
      modules
    }
  },

  beforeMount() {
    this.setTestsResults()
  },

  computed: {
    ...mapTRGetters(['isTestingComplete'])
  },

  methods: {
    ...mapTestsResultMutations({
      setTestsResults: 'SET_ARCHIVED_TESTS_RESULTS'
    }),
    goToGuide() {
      this.$router.push({ name: 'guide' })
    }
  }
}
</script>

<style lang="scss">
.modules {
  &__complete-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>