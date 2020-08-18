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
  &__wrapper {
    flex: 1;
    padding: 30px 15px;
    background: #fff;
  }
}

@media all and (min-width: 768px) {
  .layout {
    padding: 50px;
    &__wrapper {
      padding: 24px;
    }
  }
}
</style>
