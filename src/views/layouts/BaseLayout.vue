<template>
  <a-layout class="outer-layout">
    <Header />
    <Content>
      <slot />
    </Content>
    <Footer />
  </a-layout>
</template>

<script>
import Header from '@/components/layouts/Header';
import Content from '@/components/layouts/Content';
import Footer from '@/components/layouts/Footer';

export default {
  name: 'BaseLayout',
  components: {
    Header, Content, Footer
  },
};
</script>

<style lang="scss" scoped>
.outer-layout {
  min-height: 100vh;
}
</style>