<template>
  <div class="images-names-form-item__wrapper">
    <h4 class="images-names-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <div class="images-names-form-item__inner-wrapper">
      <div v-if="content.images" class="images-names-form-item__images-wrapper">
        <div
          v-for="(image, i) in content.images"
          :key="i"
          class="images-names-form-item__image-wrapper"
        >
          <img :src="image" alt="" class="images-names-form-item__image">
        </div>
      </div>
      <a-form-item
        v-for="i in content.count"
        :key="i"
        class="images-names-form-item"
      >
        <a-input
          v-decorator="[
            `question[${index}][${i}]`,
            { rules: [{ required: true, message: 'Обязательное поле!' }] },
          ]"
          placeholder="Введите ответ..."
        >
        </a-input>
      </a-form-item>   
    </div>
  </div>
  
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
.images-names-form-item {
  [class*="ant-form-item"] {
    height: 100%;
  }

  .ant-form-item-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__inner-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__images-wrapper {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  &__image-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
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