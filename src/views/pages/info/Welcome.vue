<template>
  <a-result
    title="Добро пожаловать"
    sub-title='на конкурс школьных лесничеств "Лучшее школьное лесничество Калужской области"'
    class="welcome"
  >
    <template #icon>
      <div class="welcome__wrapper">
        <p>Конкурс школьных лесничеств Калужской области состоится 18 сентября 2020 года в период с 8.00 до 13.00</p>
        <div class="welcome__inner-wrapper">
          <img src="@/assets/images/logo.png" class="welcome__logo">  
          <div class="welcome__timer">
            <StatisticCoundown
              title="До старта"
              :value="deadline"
              format="DD:HH:mm:ss"
            />
          </div>  
        </div>
        
      </div>
    </template>
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
import { Statistic } from 'ant-design-vue'
export default {
  components: {
    StatisticCoundown: Statistic.Countdown
  },

  data() {
    return {
      deadline: Date.parse('2020-09-18T05:00:00')
    }
  }
}
</script>

<style lang="scss">
.info-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome {
  padding: 24px 16px;

  &__inner-wrapper {
    position: relative;
  }
  &__timer {
    position: absolute;
    height: 100%;
    top: 0;
    left: 100%;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 250px;
  }
}
</style>