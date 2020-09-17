<template>
  <div class="lite-guide">
    <div class="lite-guide__content">
      <div class="lite-guide-intro">
        <h2>Введение</h2>
        <p>
          Конкурс проводится дистанционно. Задания дистанционного конкурса необходимо пройти 18 сентября 2020 года в период с 8.00 до 13.00. Дистанционный конкурс состоит из 3 этапов:
          <ul>
            <li>1 этап «Тестирование»</li>
            <li>2 этап «Юный лесокультурник»</li>
            <li>3 этап «Юный ботаник»</li>
          </ul>
          Первый этап «Тестирование» состоит из 4 самостоятельных блоков. К заданиям любого блока первого этапа, а также второго и третьего этапов можно приступить только один раз. После завершения работы с заданиями любого блока первого этапа, а также второго и третьего этапов вернуться к ним нельзя.
          <br>
          Набранные баллы за ответы не отображаются.
          <br>
          Результаты выполнения заданий будут обработаны судьями по каждому этапу и блоку первого этапа конкурса в соответствии с Положением о конкурсе
        </p>
      </div>
    </div>
    <div class="lite-guide__actions">
      <a-button
        type="primary"
        @click="guideDone"
      >
        Ага, понятно!
      </a-button>
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
    guideDone() {
      this.$message.success('Удачного прохождения!');

      this.$router.push({ name: `modules` });
    }
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

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>