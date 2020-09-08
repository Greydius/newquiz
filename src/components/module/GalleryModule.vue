<template>
  <div class="module-gallery">
    <PageHeader
      title="Юный ботаник"
      sub-title="Найди как можно больше видов растений на фотографиях"
      @back="goBack"
      class="module-gallery__header"
    />
    <div
      ref="viewer"
      class="module-gallery__wrapper"
      v-viewer.static
    >
      <div
        v-for="src of images"
        :key="src"
        class="module-gallery__item"
      >
        <img :src="src" class="module-gallery__image" alt="">
      </div>
    </div>

    <div class="module-gallery__form-wrapper">
      <Form
        :form="form"
        @submit="handleSubmit"
      >
        <FormItem label="Названия">
          <Select
            mode="tags"
            maxTagPlaceholder="Достаточно!"
            :maxTagCount="30"
            style="width: 100%"
            placeholder="Введи названия"
            v-decorator="[
              'answers',
              { rules: [{ required: true, message: 'Введи хотя бы один вариант!' }] },
            ]"
          >
          </Select>
        </FormItem>
        <FormItem>
          <a-button
            :disabled="hasErrors(form.getFieldsError())"
            type="primary"
            html-type="submit"
          >
            Готово!
          </a-button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'

import { Form, Select } from 'ant-design-vue'

import PageHeader from '@/components/PageHeader'
import Viewer from 'v-viewer'
import Vue from 'vue'

import { createNamespacedHelpers } from 'vuex'

const { mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

Vue.use(Viewer)

const images = [
  '/assets/images/young-botanist/6.jpg',
  '/assets/images/young-botanist/1.jpg',
  '/assets/images/young-botanist/2.jpg',
  '/assets/images/young-botanist/3.jpg',
  '/assets/images/young-botanist/4.jpg',
  '/assets/images/young-botanist/5.jpg',
  '/assets/images/young-botanist/7.jpg'
]

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'GalleryModule',

  components: {
    PageHeader,
    Form, FormItem: Form.Item,
    Select,
  },

  data() {
    return {
      images,
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
.module-gallery {
  &__wrapper {
    display: grid;
    grid-gap: 16px;
    grid-template-areas: 
      "double"
      "double";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &__item {
    display: flex;
    &:first-child {
      grid-area: double;
    }
  }
  &__image {
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  &__form-wrapper {
    margin-top: 30px;
  }
}
</style>