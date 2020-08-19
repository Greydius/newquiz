<template>
  <div>
    <HeaderButtonWithModal
      title="Тех. поддержка"
    >
      <p>
        Номер поддержки: +79036968168
      </p>
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
    </HeaderButtonWithModal>
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
