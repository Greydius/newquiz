<template>
  <div class="guide-modules">
    <h2></h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet?
    </p>
    <ModulesList :list="modules" :columnsCount="3" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magni cum tenetur ducimus architecto veritatis.
      Sed alias ea eveniet officia deserunt consequuntur soluta facilis est?
      Unde placeat eius obcaecati culpa eveniet?
    </p>
  </div>
</template>

<script>
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    title: 'Юный ботаник',
    description: 'Найди как можно больше видов растений на фотографиях',
    disabled: false,
  },
  {
    title: 'Лесопосадка',
    description: 'Тебе предстоит доказать свои знания, ответив на вопросы',
    disabled: false,
  },
  {
    title: 'Юный лесокультурник',
    description: 'Посмотри видео и ответь на вопросы',
    disabled: false,
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
