<template>
  <div class="module-video">
    <PageHeader
      title="Юный лесокультурник"
      @back="goBack"
      class="module-video__header"
    />
    <Guide v-if="testDates.start === undefined">
      <p>
        На данном этапе Вам необходимо выполнить видеозадание.
        <br>
        Внимательно просмотрите видеоролик, в котором будет задан вопрос.
        Видеоролик можно просмотреть только один раз.
        <br>
        После просмотра видеоролика в течение 20 минут запишите 5 ответов на поставленный вопрос в соответствующих окнах под названием «Ответы:».
        <br>
        После нажатия кнопки «Закончить» работа с заданием завершается. 
      </p>
    </Guide>
    <template v-else>
      <a-collapse
        style="margin-bottom: 20px"
      >
        <a-collapse-panel key="help" header="Инструкция">
          <p>
            На данном этапе Вам необходимо выполнить видеозадание.
            <br>
            Внимательно просмотрите видеоролик, в котором будет задан вопрос.
            Видеоролик можно просмотреть только один раз.
            <br>
            После просмотра видеоролика в течение 20 минут запишите 5 ответов на поставленный вопрос в соответствующих окнах под названием «Ответы:».
            <br>
            После нажатия кнопки «Закончить» работа с заданием завершается. 
          </p>
        </a-collapse-panel>
      </a-collapse>
      <div
        class="module-video__wrapper"
      >
        <vue-plyr v-if="!videoEnded" :settings="['quality']" :emit="['ended']" @ended="videoDone">
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
          <div class="module-video__form-inner-wrapper">
            <StatisticCountdown
              class="module-video__timer"
              :value="deadline"
              format="mm:ss"
              @finish="handleSubmit"
            />

            <FormItem
              class="module-video__form-button"
            >
              <a-button
                :disabled="hasErrors(form.getFieldsError())"
                type="primary"
                html-type="submit"
              >
                Завершить
              </a-button>
            </FormItem>  
          </div>
        </Form>
      </div>  
    </template>
    
  </div>
</template>

<script>

import { Form, Input, Statistic, Collapse } from 'ant-design-vue'
import VuePlyr from 'vue-plyr'

import PageHeader from '@/components/PageHeader'
import Guide from './Guide'

import { createNamespacedHelpers } from 'vuex'

const { mapState: mapTRState, mapMutations: mapTestsResultMutations, mapActions: mapTestsResultActions } = createNamespacedHelpers('testsResult')

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'VideoModule',

  components: {
    PageHeader, Guide, StatisticCountdown: Statistic.Countdown,
    'a-collapse': Collapse, 'a-collapse-panel': Collapse.Panel,
    Form, FormItem: Form.Item,
    'a-input': Input,
    VuePlyr,
  },

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'answers' }),
      videoEnded: false,
    }
  },

  beforeMount() {
    this.setATR()
  },

  mounted() {
    const videoEnded = localStorage.getItem('videoended');
    if(videoEnded) {
      this.videoEnded = true;
    }
  },

  computed: {
    ...mapTRState(['testsDates']),
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

    videoDone() {
      this.videoEnded = true;
      localStorage.setItem('videoended', true)
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err) => {
        if (!err) {
          this.$router.push({ name: 'modules' })
          this.$notification.success({
            message: 'Завершено!',
            description: 'Этап завершен',
            duration: 30
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

  &__form-inner-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  &__timer {
    margin-right: 60px;
  }
}
</style>