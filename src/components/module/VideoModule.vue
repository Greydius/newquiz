<template>
  <div class="module-video">
    <PageHeader
      title="Юный лесокультурник"
      sub-title="Посмотри видео и ответь на вопросы"
      @back="goBack"
      class="module-video__header"
    />
    <div
      class="module-video__wrapper"
    >
      <vue-plyr :settings="['quality']">
        <video poster="/assets/images/young-forest-grower/poster.jpg" src="/assets/video/young-forest-grower_1080.mp4">
          <source src="/assets/video/young-forest-grower_480.mp4" type="video/mp4" size="480">
          <source src="/assets/video/young-forest-grower_720.mp4" type="video/mp4" size="720">
          <source src="/assets/video/young-forest-grower_1080.mp4" type="video/mp4" size="1080">
        </video>
      </vue-plyr>
    </div>

    <div class="module-video__form-wrapper">
      <Form
        :form="form"
        @submit="handleSubmit"
      >
        <h2>Ответы:</h2>
        <FormItem label="Ошибка №1" :colon="false">
          <a-input
            placeholder="Впишите ошибку"
            v-decorator="[
              'answer1',
              { rules: [{ required: true, message: 'Введите текст' }] },
            ]"
          />
        </FormItem>
        <FormItem label="Ошибка №2" :colon="false">
          <a-input
            placeholder="Впишите ошибку"
            v-decorator="[
              'answer2',
              { rules: [{ required: true, message: 'Введите текст' }] },
            ]"
          />
        </FormItem>
        <FormItem label="Ошибка №3" :colon="false">
          <a-input
            placeholder="Впишите ошибку"
            v-decorator="[
              'answer3',
              { rules: [{ required: true, message: 'Введите текст' }] },
            ]"
          />
        </FormItem>
        <FormItem label="Ошибка №4" :colon="false">
          <a-input
            placeholder="Впишите ошибку"
            v-decorator="[
              'answer4',
              { rules: [{ required: true, message: 'Введите текст' }] },
            ]"
          />
        </FormItem>
        <FormItem label="Ошибка №5" :colon="false">
          <a-input
            placeholder="Впишите ошибку"
            v-decorator="[
              'answer5',
              { rules: [{ required: true, message: 'Введите текст' }] },
            ]"
          />
        </FormItem>
        <FormItem
          class="module-video__form-button"
          :colon="false"
        >
          <a-button
            :disabled="hasErrors(form.getFieldsError())"
            type="primary"
            html-type="submit"
          >
            Закончить
          </a-button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

import { Form, Input } from 'ant-design-vue'
import VuePlyr from 'vue-plyr'

import PageHeader from '@/components/PageHeader'

import { createNamespacedHelpers } from 'vuex'

const { mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'VideoModule',

  components: {
    PageHeader,
    Form, FormItem: Form.Item,
    'a-input': Input,
    VuePlyr,
  },

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'answers' }),
    }
  },

  methods: {
    ...mapTestsResultActions({
      setTestsResults: 'set',
    }),
    goBack() {
      this.$router.push({ name: 'modules' })
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.setTestsResults({
            test: this.$route.params.moduleId,
            formData: values
          })
            .then(() => {
              this.$router.push({ name: 'modules' })
              this.$message.success('Завершено!')
            })
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.module-video {
  &__wrapper {
  }

  &__form-wrapper {
    margin-top: 30px;
  }

  &__form-button {
    display: flex;
    justify-content: flex-end;
  }
}
</style>