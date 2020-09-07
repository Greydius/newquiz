<template>
  <div class="modules">
    <PageHeader
      title="Выбор блока"
      sub-title="Можешь начать с любого блока на выбор, а потом вернуться сюда вновь!"
      @back="goToGuide"
      class="modules__header"
    />
    <ModulesList :list="modulesData" :columnsCount="4" class="modules__list" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import PageHeader from '@/components/PageHeader'
import ModulesList from '@/components/modules/ModulesList'

import modulesData from './modulesData'

const { mapMutations: mapTestsResultMutations } = createNamespacedHelpers('testsResult')

export default {
  name: 'TestingModules',

  components: {
    PageHeader, ModulesList,
  },

  data() {
    return {
      modulesData
    }
  },

  beforeMount() {
    this.setTestsResults()
  },

  methods: {
    ...mapTestsResultMutations({
      setTestsResults: 'SET_ARCHIVED_TESTS_RESULTS'
    }),

    goToGuide() {
      this.$router.push({ name: 'modules' })
    }
  }
}
</script>