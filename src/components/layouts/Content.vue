<template>
  <a-layout-content class="layout">
    <a-layout class="layout__wrapper">
      <slot />
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  background-image: url(../../assets/images/background.jpg);
  background-size: cover;
  background-position-y: center;
  padding: 15px;
  &__wrapper {
    flex: 1;
    padding: 0px;
    background: rgba(255, 255, 255, 0.75);
  }
}
</style>
