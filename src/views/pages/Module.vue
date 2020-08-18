<template>
  <GalleryModule v-if="$route.name === 'young-botanist'" />
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