<template>
  <div class="modules">
    <PageHeader
      title="Выбор блока"
      sub-title="Можешь начать с любого блока на выбор, а потом вернуться сюда вновь!"
      @back="goToGuide"
      class="modules__header"
    />
    <ModulesList :list="modules" :columnsCount="4" class="modules__list" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    name: 'forest-plantation',
    title: 'Лесопосадка. Характеристика леса. Ботаника',
    description: 'Ответь на вопросы',
    disabled: false,
  },
  {
    name: 'forest-directions-and-zoology',
    title: 'Лесное ориентирование. Зоология',
    description: 'Ответь на вопросы',
    disabled: false,
  },
  {
    name: 'forest-diseases-and-pests',
    title: 'Болезни и вредители леса',
    description: 'Ответь на вопросы',
    disabled: false,
  },
  {
    name: 'forest-fire-protection',
    title: 'Охрана лесов от пожаров',
    description: 'Ответь на вопросы',
    disabled: false,
  },
]

export default {
  name: 'TestingModules',

  components: {
    PageHeader, ModulesList,
  },

  data() {
    return {
      modules
    }
  },

  methods: {
    goToGuide() {
      this.$router.push({ name: 'modules' })
    }
  }
}
</script>