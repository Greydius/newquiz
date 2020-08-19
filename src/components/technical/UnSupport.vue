<template>
  <a-result
    status="warning"
    title="Проект работает только на персональных компьютерах!"
    class="un-support"
  />
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.un-support {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1024px) {
    display: none;
  }
}
</style>