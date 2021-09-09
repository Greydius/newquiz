<template>
  <div class="module-gallery">
    <PageHeader
      title="Юный ботаник"
      @back="goBack"
      class="module-gallery__header"
    />
    <Guide v-if="testDates.start === undefined">
      <p>
        На данном этапе Вам необходимо выполнить фотозадание.
        <br>
        Внимательно рассмотрите представленные фотографии.
        При нажатии на фотографию, она увеличится.
        <br>
        Чтобы закрыть фотографию нажмите «Х» в ее верхнем правом углу.
        <br>
        В течение 20 минут запишите все определенные на фотографиях виды растений в соответствующем окне «Ответ».
        <br>
        После нажатия кнопки «Завершить» работа с заданием завершается.
      </p>
    </Guide>
    <template v-else>
      <a-collapse
        style="margin-bottom: 20px"
      >
        <a-collapse-panel key="help" header="Инструкция">
          <p>
            На данном этапе Вам необходимо выполнить фотозадание.
            <br>
            Внимательно рассмотрите представленные фотографии.
            При нажатии на фотографию, она увеличится.
            <br>
            Чтобы закрыть фотографию нажмите «Х» в ее верхнем правом углу.
            <br>
            В течение 20 минут запишите все определенные на фотографиях виды растений в соответствующем окне «Ответ».
            <br>
            После нажатия кнопки «Завершить» работа с заданием завершается.
          </p>
        </a-collapse-panel>
      </a-collapse>
      <div
        ref="viewer"
        class="module-gallery__wrapper"
        v-viewer.static
      >
        <div
          v-for="src of images[user.variant - 1]"
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
          <FormItem label="Ответ">
            <Input
              style="width: 100%"
              placeholder="Введи названия"
              v-decorator="[
                'answers',
                { rules: [] },
              ]"
            />
          </FormItem>
          <div class="module-gallery__form-inner-wrapper">
            <StatisticCountdown
              class="module-gallery__timer"
              :value="deadline"
              format="mm:ss"
              @finish="handleSubmit"
            />

            <FormItem
              class="module-gallery__form-button"
            >
              <a-popconfirm
                title="Вы уверены что хотите завершить задание?"
                ok-text="Да"
                cancel-text="Нет"
                @confirm="handleSubmit"
              >
                <a-button
                  :disabled="hasErrors(form.getFieldsError())"
                  type="primary"
                  html-type="submit"
                  @click.native="(e) => e.preventDefault()"
                >
                  Завершить
                </a-button>
              </a-popconfirm>
            </FormItem>  
          </div>
        </Form>
      </div>  
    </template>
    
  </div>
</template>

<script>

import { Form, Input, Statistic, Collapse } from 'ant-design-vue'

import PageHeader from '@/components/PageHeader'
import Guide from './Guide'

import { createNamespacedHelpers } from 'vuex'

const { mapState: mapTRState, mapMutations: mapTestsResultMutations, mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

const { mapGetters: mapAuthGetters } = createNamespacedHelpers('auth')

const images = [
  [
    '/assets/images/young-botanist/1-1.jpg',
    '/assets/images/young-botanist/1-2.jpg',
    '/assets/images/young-botanist/1-3.jpg',
  ],
  [
    '/assets/images/young-botanist/2-1.jpg',
    '/assets/images/young-botanist/2-2.jpg',
    '/assets/images/young-botanist/2-3.jpg',
  ],
  [
    '/assets/images/young-botanist/3-1.jpg',
    '/assets/images/young-botanist/3-2.jpg',
    '/assets/images/young-botanist/3-3.jpg',
  ]
]

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'GalleryModule',

  components: {
    PageHeader, Guide,
    StatisticCountdown: Statistic.Countdown,
    'a-collapse': Collapse, 'a-collapse-panel': Collapse.Panel,
    Form, FormItem: Form.Item,
    Input,
  },

  data() {
    return {
      images,
      hasErrors,
      form: this.$form.createForm(this, { name: 'answers' }),
    }
  },

  beforeMount() {
    this.setATR()
  },

  computed: {
    ...mapTRState(['testsDates']),
    ...mapAuthGetters({
      user: 'getUser'
    }),
    testDates() {
      return this.testsDates[this.$route.params.moduleId]
    },
    deadline() {
      return this.testDates.start + (20 * 60 * 1000 )
    },
  },

  methods: {
    ...mapTestsResultMutations({
      setATR: 'SET_ARCHIVED_TESTS_RESULTS'
    }),
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
              this.$notification.success({
                message: 'Завершено!',
                description: 'Этап завершен',
                duration: 30
              })
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
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__item {
    display: flex;
  }
  &__image {
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  &__form-wrapper {
    margin-top: 30px;
  }

  &__form-inner-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  &__form-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__timer {
    margin-right: 60px;
  }
}
</style>