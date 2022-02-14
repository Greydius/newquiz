<template>
  <div class="guide">
    <a-steps :current="current" class="guide__steps guide-steps">
      <a-step 
        v-for=" step in steps" 
        :key="step.title" 
        :title="step.title"
      >
        <a-icon slot="icon" :type="step.icon" />
      </a-step>
    </a-steps>
    <div class="guide__content">
      <router-view
        @next="next"
      ></router-view>
    </div>
    <div class="guide__actions">
      <a-button v-if="current > 0" style="margin-right: 8px" @click="prev">
        Шаг назад
      </a-button>
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Дальше
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="guideDone"
      >
        НАЧАТЬ
      </a-button>
    </div>
  </div>
</template>

<script>
import { Steps as ASteps } from 'ant-design-vue';
export default {
  components: {
    ASteps,
    AStep: ASteps.Step,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'Введение',
          route: 'intro',
          icon: 'book',
        },
        {
          title: 'Этапы',
          route: 'modules',
          icon: 'switcher',
        },
        {
          title: 'Этап',
          route: 'module',
          icon: 'profile',
        },
        {
          title: 'Этапы, снова',
          route: 'modules-again',
          icon: 'interaction',
        },
        {
          title: 'Финиш!',
          route: 'finish',
          icon: 'flag',
        },
      ],
    }
  },
  methods: {
    next() {
      this.current++;
      this.toStep()
    },
    prev() {
      this.current--;
      this.toStep()
    },

    toStep() {
      const currentRoute = this.steps[this.current];
      this.$router.push({ name: `guide-${currentRoute.route}` })
    },

    guideDone() {
      this.$message.success('Удачного прохождения!');

      this.$router.push({ name: `home` });
    }
  },

  beforeMount() {
    this.current = this.steps.findIndex(({ route }) => this.$route.name === `guide-${route}`)
  },
}
</script>

<style lang="scss">
.guide {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__steps {

  }

  &__content {
    flex: 1;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: #f5f5f5;

  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>