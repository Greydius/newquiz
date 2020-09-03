<template>
  <GalleryModule v-if="$route.params.moduleId === 'young-botanist'" />
  <VideoModule v-else-if="$route.params.moduleId === 'young-forest-grower'" />
  <TestingModules v-else-if="$route.params.moduleId === 'testing'" />
  <QuestionsModule v-else />
</template>

<script>
import TestingModules from '@/components/module/TestingModules'
import QuestionsModule from '@/components/module/QuestionsModule'
import GalleryModule from '@/components/module/GalleryModule'
import VideoModule from '@/components/module/VideoModule'

export default {
  name: 'Module',

  components: {
    TestingModules,
    QuestionsModule,
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