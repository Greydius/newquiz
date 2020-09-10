<template>
  <a-form-item class="question-form-item">
    <h4 class="question-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <p v-if="content.description" class="question-form-item__description">
      {{ content.description }}
    </p>
    <img v-if="content.image" :src="content.image" alt="" class="question-form-item__image">
    <a-input
      class="question-form-item__input"
      v-decorator="[
        `question[${index}]`,
        { rules: [{ required: true, message: 'Обязательное поле!' }] },
      ]"
      placeholder="Введите ответ..."
    >
    </a-input>
  </a-form-item>
</template>

<script>
import { Form, Input } from 'ant-design-vue'

export default {
  props: {
    content: Object,
    index: Number,
  },

  components: {
    'a-form-item': Form.Item,
    'a-input': Input
  }
}
</script>

<style lang="scss">
.question-form-item {
  &__title {
    line-height: 1;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__description {
    line-height: 1;
    margin-bottom: 10px;
  }

  &__image {
    max-width: 50%;
    margin-bottom: 10px;
  }
}
</style>