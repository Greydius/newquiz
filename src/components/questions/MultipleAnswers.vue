<template>
  <div class="multiple-answers-form-item__wrapper">
    <h4 class="multiple-answers-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <div class="multiple-answers-form-item__inner-wrapper">
      <div v-viewer.static v-if="content.images && !content.single" class="multiple-answers-form-item__images-wrapper">
        <div
          v-for="(image, i) in content.images"
          :key="i"
          class="multiple-answers-form-item__image-outer-wrapper"
        >
          <div class="multiple-answers-form-item__image-wrapper">
            <img :src="image" alt="" class="multiple-answers-form-item__image">
          </div>
          <div class="multiple-answers-form-item__number-wrapper">
            {{ i+1 }}
          </div>
        </div>
      </div>
      <div v-if="content.images && content.single" class="multiple-answers-form-item__main-image-wrapper">
        <img :src="content.images[0]" alt="" class="multiple-answers-form-item__image">
      </div>
      <a-form-item
        v-for="i in questions"
        :key="i"
        :label="i"
        :colon="false"
        class="multiple-answers-form-item"
      >
        <a-input
          v-decorator="[
            `question[${index}][${i}]`,
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
  },

  computed: {
    questions() {
      console.log(this.content.questions, this.content.count, this.index)
      return this.content.questions !== undefined ? this.content.questions : this.content.count
    }
  }
}
</script>

<style lang="scss">
.multiple-answers-form-item {
  margin-bottom: 0;
  &:last-child {
    margin-bottom: 30px;
  }

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
    justify-content: center;
  }

  &__image-outer-wrapper {
    flex: 1;
    max-width: 300px;
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