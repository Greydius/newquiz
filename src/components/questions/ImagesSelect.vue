<template>
  <div class="images-select-form-item__wrapper">
    <h4 class="images-select-form-item__title">{{ content.title }}</h4>
    <a-form-item
      class="images-select-form-item"
    >
    <a-radio-group
      v-decorator="[
        `question[${index}]`,
        { rules: [{ required: true, message: 'Обязательное поле!' }] },
      ]"
      class="images-select-form-item__radio-group"
    >
      <a-radio-button
        v-for="(image) in content.images"
        :key="image"
        :value="image"
        class="images-select-form-item__radio-button"
      >
        <img :src="image" alt="" class="images-select-form-item__image">
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
.images-select-form-item {
  &__radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__radio-button {
    height: auto;
    display: flex;
    align-items: center;
    padding: 15px;
  }

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