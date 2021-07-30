<template>
  <a-config-provider :locale="locale">
    <base-layout>
      <router-view></router-view>
      <un-support />
    </base-layout>
  </a-config-provider>
</template>

<script>
import ruRU from 'ant-design-vue/lib/locale-provider/ru_RU';
import moment from 'moment';
import 'moment/locale/ru';

import BaseLayout from '@/views/layouts/BaseLayout';
import UnSupport from '@/components/technical/UnSupport'

moment.locale('ru');

export default {
  components: {
    BaseLayout,
    UnSupport
  },
  data() {
    return {
      locale: ruRU,
    }
  }
}
</script>

<style lang="scss">
.layout {
  .ant-page-header-heading-sub-title {
    font-size: 20px;
  }  
}

.modules__header {
  .ant-page-header-heading {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

button.ant-btn-primary {
  font-size: 25px;
    color: #fdfbfb;
    background-color: #2ba247;
    border-radius: 0;
    border: none;
    height: auto;
    box-shadow: 1px 1px 5px rgb(26, 26, 26);
}
</style>