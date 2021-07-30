<template>
  <div class="button-with-modal">
    <a-button
      @click="handleOpen"
      type="primary"
    >
      {{ title }}
    </a-button>

    <a-modal
      :title="title"
      :visible="isModalOpen"
      :footer="null"
      @cancel="handleClose"
    >
      <slot />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'HeaderButtonWithModal',

  props: {
    title: String,
  },

  data() {
    return {
      isModalOpen: false,
    }
  },

  methods: {
    handleOpen() {
      this.isModalOpen = true
    },
    handleClose() {
      this.isModalOpen = false
    }
  }
}
</script>

<style lang="scss">
.button-with-modal {
  + .button-with-modal {
    margin-left: 60px;
  }
}
</style>
