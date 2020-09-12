<template>
  <ListItem
    @click="goToModule"
    class="module-item"
    :class="{ disabled }"
  >
    <Card
      :title="title"
      :hoverable="!disabled"
      class="module-item__card"
    >
      <div
        v-if="!textContent"
        class="module-item__card-image-content"
        :style="{ backgroundImage: `url(/assets/images/modules/${name}.jpg` }"
      >

      </div>
      <p
        v-else
      >
        {{ textContent }}
      </p>
    </Card>
    <div
      v-if="status"
      class="module-item__overlay module-item-overlay"
    >
      <a-icon
        v-if="status === 'done'"
        type="check-circle"
        theme="twoTone"
        two-tone-color="#52c41a"
        class="module-item-overlay__icon"
      />
    </div>
  </ListItem>
</template>

<script>
import { List, Card } from 'ant-design-vue'

export default {
  name: 'ModuleItem',

  props: {
    name: [String, undefined],
    title: String,
    description: [String, undefined],
    disabled: [Boolean, undefined],
    status: [String, undefined],
    textContent: [String, undefined]
  },

  components: {
    ListItem: List.Item, Card,
  },

  methods: {
    goToModule() {
      const moduleId = this.name
      !this.disabled && this.status !== 'done' && this.name ? this.$router.push({ name: 'module', params: { moduleId } }) : undefined
    }
  },
}
</script>

<style lang="scss">
.module-item {

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .ant-list-item {
    position: relative;
    height: 100%;
  }

  &__card {
    height: 100%;
    display: flex;
    flex-direction: column;
    .ant-card-body {
      flex: 1;
    }
  }

  &__card-image-content {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position-y: center;
    min-height: 300px;
  }

  &__overlay {
    
  }

  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(82 196 26 / 10%);
    &__icon {
      font-size: 40px;
    }
  }
}
</style>