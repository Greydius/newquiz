<template>
  <div class="answers-select-form-item__wrapper">
    <h4 class="answers-select-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <div v-viewer.static v-if="content.images" class="answers-select-form-item__images-wrapper">
      <div
        v-for="(image, i) in content.images"
        :key="i"
        class="answers-select-form-item__image-outer-wrapper"
      >
        <div class="answers-select-form-item__image-wrapper">
          <img :src="image" alt="" class="answers-select-form-item__image">
        </div>
      </div>
    </div>
    <a-form-item
      class="answers-select-form-item"
    >
    <a-checkbox-group
      v-decorator="[
        `question[${index}]`,
      ]"
      class="answers-select-form-item__checkbox-group"
    >
      <a-checkbox
        v-for="(answer, i) in content.answers"
        :key="i"
        :value="answer"
        class="answers-select-form-item__checkbox-button"
      >
        {{ answer }}
      </a-checkbox>
    </a-checkbox-group>
    </a-form-item>   
  </div>
  
</template>

<script>
import { Form, Checkbox } from 'ant-design-vue'

export default {
  props: {
    content: Object,
    index: Number,
  },

  components: {
    'a-form-item': Form.Item,
    'a-checkbox-group': Checkbox.Group,
    'a-checkbox': Checkbox,
  }
}
</script>

<style lang="scss">
.answers-select-form-item {
  &__images-wrapper {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
  }

  &__image-outer-wrapper {
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  &__image-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
  }

  &__number-wrapper {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    font-weight: bold;
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