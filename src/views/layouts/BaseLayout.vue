<template>
  <a-layout class="outer-layout">
    <a-layout class="outer-layout__wrapper">
      <a-layout-sider class="outer-layout__sider" width="540px">
        <Sidebar />
      </a-layout-sider>
      <Content>
        <slot />
      </Content>  
    </a-layout>
  </a-layout>
</template>

<script>
import Content from '@/components/layouts/Content';
import Sidebar from '@/components/layouts/Sidebar';

export default {
  name: 'BaseLayout',
  components: {
    Content, Sidebar
  },
};
</script>

<style lang="scss" scoped>
.outer-layout {
  min-height: 100vh;
  background: url(../../assets/images/main-background.jpg);
  background-blend-mode: soft-light, normal, normal;
  background-size: cover;
  background-position: right bottom;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__wrapper {
    background: transparent;
  }

  &__sider {
    background: transparent;
  }
}
</style>