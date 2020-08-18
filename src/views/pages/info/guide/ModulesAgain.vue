<template>
  <div class="guide-modules-again">
    <h2></h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet?
    </p>
    <ModulesList :list="modules" />
  </div>
</template>

<script>
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    title: 'Юный ботаник',
    description: 'Найди как можно больше видов растений на фотографиях',
    status: 'done',
  },
  {
    title: 'Лесопосадка',
    description: 'Тебе предстоит доказать свои знания, ответив на вопросы',
    status: 'done',
  },
  {
    title: 'Юный лесокультурник',
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
.guide-intro {
  &__modules-list {
    margin-bottom: 16px;
  }
}
</style>