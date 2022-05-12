<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white S
      h1 Síntesis
   
    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    .row.justify-content-center 
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
      
  
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
