<template>
  <div class="answers-select-form-item__wrapper">
    <h4 class="answers-select-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <div v-viewer.static v-if="content.images && !content.single" class="answers-select-form-item__images-wrapper">
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
    <div v-if="content.single" class="answers-select-form-item__single-image-wrapper">
      <img :src="content.images[0]" alt="" class="answers-select-form-item__image">
    </div>
    <a-form-item
      class="answers-select-form-item"
      :class="{ breaks: content.breaks}"
    >
    <a-radio-group
      v-decorator="[
        `question[${index}]`,
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
  .ant-radio-button-wrapper {
    height: auto;
  }
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

  &.breaks {
    .answers-select-form-item {
      &__radio-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      &__radio-button {
        margin-bottom: 15px;
      }
    }
  }
}
</style>