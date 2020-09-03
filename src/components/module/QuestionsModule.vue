<template>
  <div class="questions-module">
    <a-form
      :form="form"
      class="questions-module"
      @submit="handleSubmit"
    >
      <component
        v-for="(input, i) in inputs"
        :key="i"
        :is="input.type"
        :content="input.content"
        :index="i"
      />
      <a-form-item class="question-form-item">
        <a-button
          :disabled="hasErrors(form.getFieldsError())"
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

import { Form } from 'ant-design-vue'

import inputs from '@/content/forest-plantation'

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
  },

  data() {
    return {
      inputs,
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'questions-module-form' });
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
  },
}
</script>

<style>

</style>