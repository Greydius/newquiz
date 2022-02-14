<template>
  <div class="guide-modules">
    <h2>Этапы</h2>
    <p>
      Дистанционный конкурс состоит из 3 этапов.
      Последовательность прохождения этапов Вы выбираете сами.
      <br>
      Для начала работы с этапом нажмите на него.
      После выполнения заданий одного из этапов Вы вернетесь на эту страницу, чтобы приступить к заданиям следующего этапа. 
      <br>
      После завершения этапа на кнопке соответствующего этапа появится отметка «Завершено»
    </p>
    <ModulesList :list="modules" :columnsCount="3" />
  </div>
</template>

<script>
import ModulesList from '@/components/modules/ModulesList'

const modules = [
  {
    title: '1 Этап',
    textContent: 'Тестирование',
    disabled: false,
  },
  {
    title: '2 Этап',
    textContent: 'Юный защитный леса',
    disabled: false,
  },
  {
    title: '3 Этап',
    textContent: 'Юный ботаник',
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
