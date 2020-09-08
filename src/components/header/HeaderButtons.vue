<template>
  <div>
    <HeaderButtonWithModal
      title="Обратная связь"
    >
      <h2>По вопросам организации Конкурса:</h2>

      <i>Ситникова Елена Викторовна</i>, начальник отдела организационно-контрольной работы министерства природных ресурсов и экологии Калужской области
      <br>
      <a href="tel:4842719989">(4842)71-99-89</a>
      <br>
      <a href="tel:89108639611">8-910-863-96-11</a>
      <br>
      <a href="mailto:ignatovaev@adm.kaluga.ru">ignatovaev@adm.kaluga.ru</a>

      <br>
      <br>

      <i>Карпенко Виктория Сергеевна</i>, ведущий эксперт отдела организационно-контрольной работы министерства природных ресурсов и экологии Калужской области
      <br>
      <a href="tel:4842719975">(4842)71-99-75</a>
      <br>
      <a href="tel:89641498797">8-964-149-87-97</a>
      <br>
      <a href="mailto:karpenko_vs@adm.kaluga.ru">karpenko_vs@adm.kaluga.ru</a>

      <br>
      <br>
      <br>

      <h2>Техническое сопровождение:</h2>

      <i>Ситников Сергей Александрович</i>
      <br>
      <a href="tel:89641498797">8-903-696-81-68</a>
      <br>
      <a href="mailto:karpenko_vs@adm.kaluga.ru">esmiralda2011@gmail.com</a>
      
    </HeaderButtonWithModal>
    <HeaderButtonWithModal title="Документы">
      <p>
        <a href="/assets/files/Технические требования к рабочему месту.docx" target="_blank" rel="noopener noreferrer"><a-icon type="download" /> Технические требования к рабочему месту</a>
      </p>
      <p>
        <a href="/assets/files/Состав жюри.docx" target="_blank" rel="noopener noreferrer"><a-icon type="download" /> Состав жюри</a>
      </p>
      <p>
        <a href="/assets/files/Состав судей.docx" target="_blank" rel="noopener noreferrer"><a-icon type="download" /> Состав судей</a>
      </p>
      <p>
        <a href="/assets/files/Положение о конкурсе ШЛ 2020.pdf" target="_blank" rel="noopener noreferrer"><a-icon type="download" /> Положение о конкурсе ШЛ 2020</a>
      </p>
      <p>
        <a href="/assets/files/Порядок проведения тестирования.doc" target="_blank" rel="noopener noreferrer"><a-icon type="download" /> Порядок проведения тестирования</a>
      </p>
    </HeaderButtonWithModal>

    <router-link :to="{ name: 'guide' }" class="header-to-guide">
      <a-button type="submit">
        К инструкции
      </a-button>
    </router-link>
  </div>
</template>

<script>
import HeaderButtonWithModal from '@/components/header/HeaderButtonWithModal'

export default {
  name: 'HeaderButtons',

  components: {
    HeaderButtonWithModal
  },
}
</script>

<style lang="scss">
.header-to-guide {
  margin-left: 60px;
}
</style>
