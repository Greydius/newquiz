<template>
  <a-layout-content class="layout">
    <Header />
    <a-layout class="layout__wrapper">
      <slot />
    </a-layout>
  </a-layout-content>
</template>

<script>
import Header from './Header'
export default {
  name: 'Content',
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 64px;
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex: 1;
    padding: 0;
    background: transparent;
  }
}
</style>
