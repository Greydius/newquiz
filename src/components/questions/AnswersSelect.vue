<template>
  <div class="answers-select-form-item__wrapper">
    <h4 class="answers-select-form-item__title">{{ content.title }}</h4>
    <a-form-item
      class="answers-select-form-item"
    >
    <a-radio-group
      v-decorator="[
        `question[${index}]`,
        { rules: [{ required: true, message: 'Обязательное поле!' }] },
      ]"
      class="answers-select-form-item__radio-group"
    >
      <a-radio-button
        v-for="(answer, i) in content.answers"
        :key="i"
        :value="answer"
        class="answers-select-form-item__radio-button"
      >
        {{ answer }}
      </a-radio-button>
    </a-radio-group>
    </a-form-item>   
  </div>
  
</template>

<script>
import { Form, Radio } from 'ant-design-vue'

export default {
  props: {
    content: Object,
    index: Number,
  },

  components: {
    'a-form-item': Form.Item,
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button,
  }
}
</script>

<style lang="scss">
.answers-select-form-item {
  &__image {
    width: 100%;
  }

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
}
</style>