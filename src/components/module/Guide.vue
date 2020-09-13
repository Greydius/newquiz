<template>
  <div class="module-guide">
    <p>
      В текущем блоке Вам необходимо ответить на 25 вопросов. Для ответов на все вопросы у Вас будет 38 минут.
      <br>
      Для начала выполнения заданий нажмите кнопку «Начать», для перехода к следующему вопросу нажмите кнопку «Далее», для возврата к предыдущему вопросу нажмите «Назад», либо кнопку с указанием номера вопроса. Чтобы завершить задание, нажмите кнопку «Завершить».
    </p>
    
    <div class="module-guide__start-wrapper">
      <a-button @click="startTest" type="primary">Начать!</a-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState: mapTRState, mapMutations: mapTRMutations } = createNamespacedHelpers('testsResult')
export default {
  computed: {
    ...mapTRState(['testsDates']),

    testDate() {
      return this.testsDates[this.$route.params.moduleId]
    }
  },

  methods: {
    ...mapTRMutations({
      setTestStart:'SET_TEST_START',
    }),

    startTest() {
      this.setTestStart({
        date: Date.now(),
        test: this.$route.params.moduleId,
        type: 'start'
      })
    }
  }
}
</script>

<style lang="scss">
.module-guide {
  &__start-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>