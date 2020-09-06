<template>
  <div class="questions-module">
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
  </div>
</template>

<script>
import AnswersSelect from '../questions/AnswersSelect'
import ImagesCompare from '../questions/ImagesCompare'
import ImagesNames from '../questions/ImagesNames'
import ImagesSelect from '../questions/ImagesSelect'
import Question from '../questions/Question'

import { Form, Steps } from 'ant-design-vue'

import forestPlantation from '@/content/forest-plantation'
import forestFireSecurity from '@/content/forest-fire-security'
import zoo from '@/content/zoo'
import pests from '@/content/pests'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: "QuestionsModule",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AnswersSelect, ImagesCompare, ImagesNames, ImagesSelect, Question,
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
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'questions-module-form' });
  },

  computed: {
    routeInputs() {
      const route = this.$route.params.moduleId;
      const data = this.inputs[route]
      return data ? data : this.inputs['forest-plantation']
    }
  },

  methods: {
    hasErrors,

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
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
}
</style>