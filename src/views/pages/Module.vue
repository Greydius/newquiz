<template>
  <GalleryModule v-if="$route.params.moduleId === 'young-botanist'" />
  <VideoModule v-else />
</template>

<script>
import GalleryModule from '@/components/module/GalleryModule'
import VideoModule from '@/components/module/VideoModule'

export default {
  name: 'Module',

  components: {
    GalleryModule,
    VideoModule,
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>