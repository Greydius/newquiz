<template>
  <div class="questions-module">
    <PageHeader
      :title="routeData.title"
      :sub-title="routeData.description"
      @back="goToGuide"
      class="modules__header"
    />
    
    <Guide v-if="testDates.start === undefined">
      <template v-if="currentRoute === 'forest-plantation'">
        <p>
          В текущем блоке Вам необходимо ответить на 25 вопросов.
          <br>
          Для ответов на все вопросы у Вас будет 38 минут.
          <br>
          Для начала выполнения заданий нажмите кнопку «Начать», для перехода к следующему вопросу нажмите кнопку «Далее», для возврата к предыдущему вопросу нажмите кнопку «Назад» либо кнопку с указанием номера вопроса.
          <br>
          Чтобы завершить задание, нажмите кнопку «Завершить».

        </p>
      </template>
      <template v-else>
        <p>
          В текущем блоке Вам необходимо ответить на 20 вопросов.
          <br>
          Для ответов на все вопросы у Вас будет 30 минут.
          <br>
          Для начала выполнения заданий Вам нужно нажать кнопку «Начать», для перехода к следующему вопросу Вам нужно нажать кнопку «Далее», для возврата к предыдущему вопросу Вам нужно нажать кнопку «Назад» либо кнопку с указанием номера вопроса. 
          <br>
          Чтобы завершить задание, Вам нужно нажать кнопку «Завершить».

        </p>
      </template>
    </Guide>

    <template v-else >
      <div class="questions-module__steps-wrapper">
        <a-steps
          @change="changeStep"
          progress-dot
          :current="currentStep"
          size="small"
          class="questions-module__steps"
        >
          <a-step
            v-for="(input, i) in routeInputs"
            :key="i"
            :title="i+1"
          />
        </a-steps>  
      </div>
      
      <a-form
        :form="form"
        class="questions-module"
        @submit="handleSubmit"
      >
        <component
          v-for="(input, i) in routeInputs"
          v-show="currentStep === i"
          :key="i"
          :is="input.type"
          :content="input.content"
          :index="i"
        />
        <a-form-item v-if="currentStep < routeInputs.length-1" class="question-form-item">
          <a-button
            @click="nextStep"
            type="primary"
          >
            Далее
          </a-button>
        </a-form-item>
        <a-form-item class="question-form-item">
          <a-button
            type="primary"
            html-type="submit"
          >
            Готово!
          </a-button>
        </a-form-item>
      </a-form>  
    </template>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

import AnswersSelect from '../questions/AnswersSelect'
import ImagesCompare from '../questions/ImagesCompare'
import ImagesNames from '../questions/ImagesNames'
import ImagesSelect from '../questions/ImagesSelect'
import Question from '../questions/Question'
import MultipleAnswers from '../questions/MultipleAnswers'

import Guide from './Guide'

import { Form, Steps } from 'ant-design-vue'

import forestPlantation from '@/content/forest-plantation'
import forestFireSecurity from '@/content/forest-fire-security'
import zoo from '@/content/zoo'
import pests from '@/content/pests'

import modulesData from './modulesData'

import { createNamespacedHelpers } from 'vuex'

const { mapState: mapTRState, mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: "QuestionsModule",
  components: {
    PageHeader,
    // eslint-disable-next-line vue/no-unused-components
    AnswersSelect, ImagesCompare, ImagesNames, ImagesSelect, Question, MultipleAnswers,
    Guide,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-steps': Steps,
    'a-step': Steps.Step
  },

  data() {
    return {
      inputs: {
        'forest-plantation': forestPlantation,
        'forest-fire-protection': forestFireSecurity,
        'forest-directions-and-zoology': zoo,
        'forest-diseases-and-pests': pests
      },
      currentStep: 0,
      modulesData
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'questions-module-form' });
  },

  computed: {
    ...mapTRState(['testsDates']),
    testDates() {
      return this.testsDates[this.$route.params.moduleId]
    },
    currentRoute() {
      const route = this.$route.params.moduleId;
      const hasRoute = this.modulesData.find(({ name }) => name === route)
      return hasRoute ? route : 'forest-plantation'
    },

    routeInputs() {
      return this.inputs[this.currentRoute]
    },
    routeData() {
      return this.modulesData.find(({ name }) => name === this.currentRoute)
    }
  },

  methods: {
    ...mapTestsResultActions({
      setTestsResults: 'set',
    }),
    hasErrors,

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.setTestsResults({
            test: this.$route.params.moduleId,
            formData: values
          })
            .then(() => {
              this.goToGuide()
            })
          console.log('Received values of form: ', values);
        }
      });
    },

    nextStep(e) {
      e.preventDefault();

      this.currentStep++;
    },

    changeStep(current) {
      this.currentStep = current;
    },

    goToGuide() {
      this.$router.push({ name: 'module', params: { moduleId: 'testing' } })
    }
  },
}
</script>

<style lang="scss">
.questions-module {
  &__steps-wrapper {
    overflow-x: auto;
    padding-top: 15px;
    margin-bottom: 60px;
  }

  .ant-steps-dot .ant-steps-item-tail, .ant-steps-dot.ant-steps-small .ant-steps-item-tail {
    margin: 0 0 0 4px;
  }

  .ant-steps-dot .ant-steps-item-icon, 
  .ant-steps-dot.ant-steps-small .ant-steps-item-icon {
    margin-left: 6px;
  }

  .ant-steps-dot .ant-steps-item-content,
  .ant-steps-dot.ant-steps-small .ant-steps-item-content {
    width: 20px;
  }

  .ant-steps-dot .ant-steps-item-tail::after, .ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
    width: 100%;
    margin-left: 4px;
  }

  .ant-steps-label-vertical .ant-steps-item {
    max-width: 50px;
  }
}
</style>