<template>
  <a-layout-footer class="footer">
    <div class="footer__block">
      <img src="@/assets/images/footer-logo-4.svg" class="footer__logo" alt=""> 
    </div>

    <div class="footer__block">
      <img src="@/assets/images/footer-logo-1.png" class="footer__logo" alt="">
      <img src="@/assets/images/footer-logo-2.png" class="footer__logo" alt="">
      <img src="@/assets/images/footer-logo-3.svg" class="footer__logo" alt="">
    </div>

    <div class="footer__block">
      <img src="@/assets/images/footer-logo-5.jpg" class="footer__logo" alt="">
    </div>
  </a-layout-footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__block {
    flex: 1 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }

  &__logo {
    height: 50px;
  }

  &__logo + &__logo {
    margin-left: 30px;
  }
}
</style>