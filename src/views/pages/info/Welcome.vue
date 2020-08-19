<template>
  <a-result
    title="Добро пожаловать"
    sub-title='на конкурс школьных лесничеств "Лучшее школьное лесничество Калужской области"'
    class="welcome"
  >
    <template #icon>
      <p>Конкурс школьных лесничеств Калужской области состоится 18 сентября 2020 года в период с 8.00 до 13.00</p>
      <img src="@/assets/images/logo.png" class="welcome__logo">
    </template>
    <template #extra>
      <router-link :to="{ name: 'guide' }">
        <a-button type="primary">
          К инструкции!
        </a-button>  
      </router-link>
    </template>
  </a-result>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.info-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome {
  padding: 24px 16px;
  &__logo {
    width: 250px;
  }
}
</style>