<template>
  <a-result status="404" title="Добро пожаловать" sub-title='на конкурс школьных лесничеств "Лучшее школьное лесничество Калужской области"'>
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

<style>
.info-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>