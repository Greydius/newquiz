<template>
  <a-layout-footer class="footer">
    <div class="footer__block">
      <img src="@/assets/images/footer-logo-1.png" class="footer__logo" alt="">
      <img src="@/assets/images/footer-logo-2.png" class="footer__logo" alt="">
      <!-- <img src="@/assets/images/footer-logo-3.png" class="footer__logo" alt=""> -->
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
  justify-content: center;
  align-items: center;

  &__block {

  }

  &__logo {
    height: 50px;
  }

  &__logo + &__logo {
    margin-left: 30px;
  }
}
</style>