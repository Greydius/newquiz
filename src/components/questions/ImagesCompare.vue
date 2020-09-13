<template>
  <div class="images-compare-form-item__wrapper">
    <h4 class="images-compare-form-item__title">{{ `${index+1}. ${content.title}` }}</h4>
    <div class="images-compare-form-item__inner-wrapper">
      <div class="images-compare-form-item__images-wrapper">
        <div class="images-compare-form-item__images-inner-wrapper">
          <div
            v-for="(image, i) in content.images[0]"
            :key="i"
            class="images-compare-form-item__image-wrapper"
          >
            <div class="images-compare-form-item__image-inner-wrapper">
              <img
                :src="image"
                alt=""
                class="images-compare-form-item__image"
              >  
            </div>
            
            <div class="images-compare-form-item__image-title">{{ i + 1 }}</div>
          </div>
          
        </div>
        <div class="images-compare-form-item__images-inner-wrapper">
          <div
            v-for="(image, i) in content.images[1]"
            :key="i"
            class="images-compare-form-item__image-wrapper"
          >
            <div class="images-compare-form-item__image-inner-wrapper">
              <img
                :src="image"
                alt=""
                class="images-compare-form-item__image"
              >  
            </div>
            <div class="images-compare-form-item__image-title">{{ ab[i] }}</div>   
          </div>
        </div>
        
      </div>
      <a-form-item
        v-for="(image, i) in content.images[0]"
        :key="i"
        :label="`${ab[i]}`"
        class="images-compare-form-item"
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
  name: 'ImagesCompare',
  props: {
    content: Object,
    index: Number,
  },

  components: {
    'a-form-item': Form.Item,
    'a-input': Input
  },

  data() {
    return {
      ab: ['А', 'Б', 'В', 'Г']
    }
  }
}
</script>

<style lang="scss">
.images-compare-form-item {
  [class*="ant-form-item"] {
    height: 100%;
  }

  .ant-form-item-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__images-inner-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-bottom: 30px;
  }

  &__image-wrapper {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  &__image-inner-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
  }

  &__image {
    width: 100%;
  }

  &__image-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-top: 1px solid rgb(0 0 0 / 35%);
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