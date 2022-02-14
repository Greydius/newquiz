<template>
  <a-layout-footer class="footer">

    <div class="footer__block">
      <img src="@/assets/images/footer-logo-2.png" class="footer__logo" alt="">
      <img src="@/assets/images/footer-logo-4.svg" class="footer__logo" alt=""> 
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
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgba(2, 115, 60, 0.7) 0%, rgba(2, 115, 60, 0.69) 19%, rgba(107, 183, 123, 0.68) 31%, rgba(107, 183, 123, 0.68) 37%, rgba(107, 183, 123, 0.69) 57%, rgba(77, 164, 105, 0.7) 70%, #08783e 100%);

  &__block {
    flex: 1 33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    height: 50px;
  }

  &__logo + &__logo {
    margin-left: 30px;
  }
}
</style>