<template>
  <PageHeader
    :title="title"
    :sub-title="subTitle"
    @back="goBack"
    class="page-header"
  />
</template>

<script>
import { PageHeader } from 'ant-design-vue'
export default {
  props: {
    title: String,
    subTitle: [String, undefined],
  },

  components: {
    PageHeader,
  },

  methods: {
    goBack() {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss">
.page-header {
  border: 1px solid rgb(235, 237, 240);
  margin-bottom: 16px;
}
</style>