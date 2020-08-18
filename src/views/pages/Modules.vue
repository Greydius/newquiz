<template>
  <div class="modules">
    <PageHeader
      title="Выбор этапа"
      sub-title="Можешь начать с любого этапа на выбор, а потом вернуться сюда вновь!"
      @back="goToGuide"
      class="modules__header"
    />
    <ModulesList :list="modules" class="modules__list" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    name: 'young-botanist',
    title: 'Юный ботаник',
    description: 'Найди как можно больше видов растений на фотографиях',
    disabled: false,
  },
  {
    name: 'forest-plantation',
    title: 'Лесопосадка',
    description: 'Тебе предстоит доказать свои знания, ответив на вопросы',
    disabled: true,
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

  methods: {
    goToGuide() {
      this.$router.push({ name: 'guide' })
    }
  }
}
</script>