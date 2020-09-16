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
      <template v-else-if="currentRoute === 'testing-test'">
        <p>
          В текущем блоке Вам необходимо ответить на 4 вопроса.
          <br>
          Для ответов на все вопросы у Вас будет 10 минут.
          <br>
          Для начала выполнения заданий Вам нужно нажать кнопку «Начать», для перехода к следующему вопросу Вам нужно нажать кнопку «Далее», для возврата к предыдущему вопросу Вам нужно нажать кнопку «Назад» либо кнопку с указанием номера вопроса. 
          <br>
          Чтобы завершить задание, Вам нужно нажать кнопку «Завершить».

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
        <div class="questions-module__form-wrapper">
          <a-form-item v-if="currentStep > 0" class="question-form-item">
            <a-button
              @click="prevStep"
              type="primary"
            >
              Назад
            </a-button>
          </a-form-item>
          <div class="questions-module__form-timer">
            <StatisticCountdown
              :value="deadline"
              format="mm:ss"
              @finish="handleSubmit"
            />
          </div>
          <a-form-item v-if="currentStep < routeInputs.length-1" class="question-form-item">
            <a-button
              @click="nextStep"
              type="primary"
            >
              Далее
            </a-button>
          </a-form-item>
        </div>
        <a-form-item class="question-form-item question-form-item__submit">
          <a-button
            type="primary"
            html-type="submit"
            class="question-form-item__submit-button"
          >
            Завершить тест!
          </a-button>
        </a-form-item>
      </a-form>  
    </template>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

import AnswersSelect from '../questions/AnswersSelect'
import MultipleAnswersSelect from '../questions/MultipleAnswersSelect'
import ImagesCompare from '../questions/ImagesCompare'
import ImagesNames from '../questions/ImagesNames'
import ImagesSelect from '../questions/ImagesSelect'
import Question from '../questions/Question'
import MultipleAnswers from '../questions/MultipleAnswers'

import Guide from './Guide'

import { Form, Steps, Statistic } from 'ant-design-vue'

import forestPlantation from '@/content/forest-plantation'
import forestFireSecurity from '@/content/forest-fire-security'
import zoo from '@/content/zoo'
import pests from '@/content/pests'
import testingTest from '@/content/testing-test'

import modulesData from './modulesData'

import { createNamespacedHelpers } from 'vuex'

const { mapState: mapTRState, mapMutations: mapTRMutations, mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: "QuestionsModule",
  components: {
    PageHeader,
    // eslint-disable-next-line vue/no-unused-components
    AnswersSelect, MultipleAnswersSelect, ImagesCompare, ImagesNames, ImagesSelect, Question, MultipleAnswers,
    StatisticCountdown: Statistic.Countdown,
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
        'forest-diseases-and-pests': pests,
        'testing-test': testingTest
      },
      currentStep: 0,
      modulesData: [
        ...modulesData,
        {
          "name": "testing-test",
          "title": "Пробный тест",
          "description": "Для проверки",
          "disabled": false
        }
      ]
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'questions-module-form' });
  },

  beforeMount(){
    this.setATR()

    console.log(this.deadline, Date.now(), this.deadline <= Date.now())
    if(this.deadline <= Date.now()) {
      // this.goToGuide()
    }
  },

  computed: {
    ...mapTRState(['testsDates']),
    testDates() {
      return this.testsDates[this.$route.params.moduleId]
    },
    deadline() {
      const dates = {
        'forest-plantation': 38,
        'forest-fire-protection': 30,
        'forest-directions-and-zoology': 30,
        'forest-diseases-and-pests': 30,
        'testing-test': 10
      }
      return this.testDates.start + (dates[this.$route.params.moduleId] * 60 * 1000 )
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
    ...mapTRMutations({
      setATR: 'SET_ARCHIVED_TESTS_RESULTS'
    }),
    ...mapTestsResultActions({
      setTestsResults: 'set',
    }),
    hasErrors,

    handleSubmit(e) {
      if(e) {
        e.preventDefault();
      }
      
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

    prevStep(e) {
      e.preventDefault();

      this.currentStep--;
    },

    nextStep(e) {
      e.preventDefault();

      this.currentStep++;
    },

    changeStep(current) {
      this.currentStep = current;
    },

    goToGuide() {
      if(this.$route.params.moduleId === 'testing-test'){
        this.$router.push({ name: 'guide-test' })
      } else {
        this.$router.push({ name: 'module', params: { moduleId: 'testing' } })
      }
      
    }
  },
}
</script>

<style lang="scss">
.questions-module {
  h4 {
    font-size: 26px;
    text-align: center;
  }
  &__steps-wrapper {
    overflow-x: auto;
    padding-top: 15px;
    margin-bottom: 60px;
  }

  &__form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .question-form-item {
      margin-bottom: 0;
    }
  }

  &__form-timer {
    margin: 0 60px;
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

.question-form-item {
  &__submit {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    &-button {
      font-size: 24px;
      height: auto;
    }
  }
}
</style>