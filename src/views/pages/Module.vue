<template>
  <GalleryModule v-if="$route.params.moduleId === 'young-botanist'" />
  <VideoModule v-else-if="$route.params.moduleId === 'young-forest-grower'" />
  <TestingModules v-else />
</template>

<script>
import TestingModules from '@/components/module/TestingModules'
import GalleryModule from '@/components/module/GalleryModule'
import VideoModule from '@/components/module/VideoModule'

export default {
  name: 'Module',

  components: {
    TestingModules,
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