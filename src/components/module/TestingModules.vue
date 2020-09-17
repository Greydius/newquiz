<template>
  <div class="modules">
    <PageHeader
      title="Выбор блока"
      @back="goToGuide"
      class="modules__header"
    />
    <Guide v-if="testDates.start === undefined">
      <p>
        1 этап «Тестирование» состоит из 4 блоков:
        <ul>
          <li>блок: «Лесопосадка. Характеристика леса. Ботаника» состоят из 25 вопросов</li>
          <li>блок: «Лесное ориентирование. Зоология» состоит из 20 вопросов</li>
          <li>блок: «Болезни и вредители леса» состоит из 20 вопросов</li>
          <li>блок: «Охрана лесов от пожаров» состоит из 20 вопросов</li>
        </ul>
      </p>
      <p>
        Вопросы блоков предполагают одиночный или множественный ответ, включают фото- и графические ответы, а также текстовые ответы.
        Последовательность выполнения блоков Вы можете выбрать самостоятельно.
      </p>
      <p>
        Для начала работы с блоком нажмите на него. После выполнения заданий одного из блоков Вы вернетесь на эту страницу, чтобы приступить к заданиям следующего блока.
        После завершения блоков на кнопке соответствующего блока появится отметка «Завершено»
      </p>
    </Guide>
    <template v-else>
      <a-collapse
        style="margin-bottom: 20px"
      >
        <a-collapse-panel key="help" header="Инструкция">
          <p>
            Последовательность выполнения блоков Вы можете выбрать самостоятельно.
            <br>
            Для начала работы с блоком нажмите на него. После выполнения заданий одного из блоков Вы вернетесь на эту страницу, чтобы приступить к заданиям следующего блока.
            <br>
            После завершения блоков на кнопке соответствующего блока появится отметка «Завершено»
          </p>
        </a-collapse-panel>
      </a-collapse>

      <ModulesList :list="modulesData" :columnsCount="4" class="modules__list" />

      <div class="testing-modules__finish">
        <a-button
          style="font-size: 30px; height: auto;"
          type="primary"
          html-type="submit"
          @click="handleSubmit"
        >
          Завершить
        </a-button>
      </div>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { Collapse } from 'ant-design-vue'

import PageHeader from '@/components/PageHeader'
import ModulesList from '@/components/modules/ModulesList'

import Guide from './Guide'

import modulesData from './modulesData'

const { mapState: mapTRState, mapMutations: mapTestsResultMutations } = createNamespacedHelpers('testsResult')

export default {
  name: 'TestingModules',

  components: {
    PageHeader, ModulesList, Guide,
    'a-collapse': Collapse, 'a-collapse-panel': Collapse.Panel,
  },

  data() {
    return {
      modulesData
    }
  },

  beforeMount() {
    this.setTestsResults()
  },

  computed: {
    ...mapTRState(['testsDates']),
    testDates() {
      return this.testsDates[this.$route.params.moduleId]
    },
  },

  methods: {
    ...mapTestsResultMutations({
      setTestsResults: 'SET_ARCHIVED_TESTS_RESULTS'
    }),

    goToGuide() {
      this.$router.push({ name: 'modules' })
    },

    handleSubmit() {
      this.$router.push({ name: 'modules' })
      this.$notification.success({
        message: 'Успех!',
        description: 'Блок тестирования завершен',
        duration: 30
      })
    }
  }
}
</script>

<style lang="scss">
.testing-modules {
  &__finish {
    display: flex;
    justify-content: center;
  }
}
</style>