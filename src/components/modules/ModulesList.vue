<template>
  <List
    :grid="{ gutter: 16, column: columnsCount }"
    :data-source="list"
    class="modules-list"
  >
    <ModuleItem
      slot="renderItem"
      slot-scope="{ name, title, description, disabled, status }"
      :name="name"
      :title="title"
      :description="description"
      :disabled="disabled"
      :status="status"
      class="modules-list__item"
    />
  </List>
</template>

<script>
import { List } from 'ant-design-vue'

import ModuleItem from './ModuleItem'

export default {
  name: 'ModulesList',

  props: {
    list: Array,
    columnsCount: {
      type: Number,
      default: 3,
    },
  },

  components: {
    List, ModuleItem,
  },
}
</script>

<style lang="scss">
.modules-list {
  margin-bottom: 15px;
  .ant-row {
    display: flex;
  }
}
</style>