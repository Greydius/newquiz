<template>
  <div class="module-guide">
    <slot></slot>
    
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