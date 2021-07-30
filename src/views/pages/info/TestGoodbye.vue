<template>
<div class="goodbye">
  <h2>ЗАДАНИЕ ЗАВЕРШЕНО</h2>
  <router-link :to="{ name: 'module', params: { moduleId: 'testing-test'} }">
    <a-button type="primary">
      Начать заново!
    </a-button>  
  </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.goodbye {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>