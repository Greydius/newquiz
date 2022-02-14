<template>
  <div class="guide">
    <div class="guide__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },

  beforeMount() {

  },
}
</script>

<style lang="scss">
.guide {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: #f5f5f5;

  }
}
</style>