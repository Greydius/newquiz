<template>
  <div class="module-video">
    <PageHeader
      title="Юный защитник леса"
      @back="goBack"
      class="module-video__header"
    />
    <Guide v-if="testDates.start === undefined">
      <p>
        На данном этапе Вам необходимо выполнить видеозадание, которое состоит из 5 видеороликов.
        <br>
        Каждому видеоролику соответствует 1 ответ. 
        <br>
        Видеоролики можно просмотреть только один раз. 
        <br>
        Внимательно просмотрите видеоролик и запишите ответ на поставленный ниже вопрос в соответствующем окне под названием «Ответы:».
        <br>
        После нажатия кнопки «Завершить» работа с заданием завершается. Общее время для выполнения видеозадания – 20 минут.
      </p>
    </Guide>
    <template v-else>
      <a-collapse
        style="margin-bottom: 20px"
      >
        <a-collapse-panel key="help" header="Инструкция">
          <p>
            На данном этапе Вам необходимо выполнить видеозадание, которое состоит из 5 видеороликов.
            <br>
            Каждому видеоролику соответствует 1 ответ. 
            <br>
            Видеоролики можно просмотреть только один раз. 
            <br>
            Внимательно просмотрите видеоролик и запишите ответ на поставленный ниже вопрос в соответствующем окне под названием «Ответы:».
            <br>
            После нажатия кнопки «Завершить» работа с заданием завершается. Общее время для выполнения видеозадания – 20 минут.
          </p>
        </a-collapse-panel>
      </a-collapse>

      <h1>
        По представленным видеороликам определите причину повреждения и поражения деревьев
      </h1>

      <div class="module-video__form-wrapper">
        <Form
          :form="form"
          @submit="handleSubmit"
        >
          <h2>Ответы:</h2>
          <div class="module-video__videos-block">
            <div
              v-for="i in 5"
              :key="i"
              class="module-video__video-block"
            >
              <vue-plyr v-if="!videoEnded(i)" :emit="['ended']" @ended="videoDone(i)">
                <video :src="`https://api.ecoforum40.ru/storage/videos/${i}.mp4`">
                </video>
              </vue-plyr>
              <img v-else :src="`/assets/images/young-forest-grower/video-${i}.jpg`" alt="">
              <FormItem :label="`Ответ №${i}`" :colon="false">
                <a-input
                  placeholder="Впишите ответ"
                  v-decorator="[
                    `answer${i}`,
                    { rules: [] },
                  ]"
                />
              </FormItem>  
            </div>  
          </div>
          
          
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
      videosDone: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      }
    }
  },

  beforeMount() {
    this.setATR()
  },

  mounted() {
    const videosDone = localStorage.getItem('videosdone');
    if(videosDone) {
      this.videosDone = JSON.parse(videosDone);
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

    videoDone(i) {
      this.videosDone[i] = true
      localStorage.setItem('videosdone', JSON.stringify(this.videosDone))
      
    },

    videoEnded(i) {
      return this.videosDone[i]
      
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

  &__videos-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "a b c d" ". f f .";
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  &__video-block {
    img {
      width: 100%;
    }

    &:last-child {
      grid-area: f;
    }
  }
}
</style>