<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row(data-aos="fade-right")
      .col-lg-12
        p Se le invita a revisar la introducción de este material de formación en el siguiente recurso:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10        
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-rq4_7xgFLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
