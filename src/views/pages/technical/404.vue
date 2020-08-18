<template>
  <a-result status="500" title="404" sub-title="Упс... Кажется вы забрели в дебри!">
    <template #extra>
      <router-link :to="{ name: 'home' }">
        <a-button type="primary">
          На главную!
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

</style>