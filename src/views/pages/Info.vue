<template>
  <div class="info-layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'InfoLayout',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.info-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
}
</style>