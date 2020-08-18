<template>
  <a-layout class="outer-layout">
    <Header />
    <Content>
      <slot />
    </Content>
  </a-layout>
</template>

<script>
import Header from '@/components/layouts/Header';
import Content from '@/components/layouts/Content';

export default {
  name: 'BaseLayout',
  components: {
    Header, Content,
  },
};
</script>

<style lang="scss" scoped>
.outer-layout {
  min-height: 100vh;
}
</style>