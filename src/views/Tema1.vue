<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Análisis de vulnerabilidades

    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="fade-right")
        .cajon-b.color-primario.p-3.mb-5
          p Revise el siguiente mapa que trata el concepto de Criptografía

  .container.BGIMG01.px-4.pt-4.pt-md-4.px-md-5
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1
      p.mb-0 Concepto de criptografía

    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/img01.svg')  
    
    .row.justify-content-center
      .col-lg-10
        p Cuando se transmiten datos electrónicos, el uso más común de la criptografía es cifrar y descifrar el correo electrónico y otros mensajes de texto plano. El método más simple utiliza el sistema simétrico o de "clave secreta"; en este caso, los datos se cifran utilizando una clave secreta, y luego tanto el mensaje codificado como la clave secreta se envían al destinatario para su descifrado.
      .col-lg-10.mb-5(data-aos="fade-right")
        
          .row.BG03.align-items-center.p-3
            .col-9
              p <b>¿Cuál es el problema?</b> Si el mensaje es interceptado, un tercero tiene todo lo necesario para descifrar y leer el mensaje. Para resolver este problema, los criptólogos diseñaron <b>el sistema asimétrico o de "clave pública"</b>; en este caso, cada usuario tiene dos claves: <b>una pública y otra privada</b>; los remitentes solicitan la clave pública de su destinatario, encriptan el mensaje y lo envían, cuando llega el mensaje, sólo la clave privada del destinatario lo descifra, lo que significa que el robo no sirve de nada sin la correspondiente 
            .col-3
              img(src='@/assets/curso/tema1/img02.png')
    separador

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos y generalidades
    .col-lg-12  
      p.mb-4 La criptografía es la conversión de los datos en un código codificado que se descifra y se envía a través de una red privada o pública; se utiliza para proteger los mensajes de correo electrónico, información de tarjeta de crédito y datos corporativos.    
    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.png')
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-0 En la era actual de las computadoras, la criptografía suele asociarse con el proceso en el que un texto simple ordinario se convierte en texto cifrado, que es el texto hecho de tal manera que el receptor previsto del texto sólo puede decodificarlo y, por lo tanto, este proceso se conoce como cifrado. El proceso de conversión de un texto cifrado a texto plano se conoce como descifrado. Las características de la criptografía son las siguientes:
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img04.png')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
