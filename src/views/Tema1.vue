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

    .row.justify-content-center
    .col-md-10.col-lg-4.mb-4.mb-lg-0
      .TFcontainer
        img.TFimage(src='@/assets/curso/tema1/img07.png', alt='Fase 1')
        .TFoverlay--01.text-black.p-3
          h5 Confidencialidad:
          p.mb-0 La información sólo puede ser accedida por la persona a la que está destinada y ninguna otra persona puede acceder a ella.

    .row.align-items-center.mb-5
      .col-lg-2.col-md-6.col-6(data-aos="fade-right").mb-5
        img(src='@/assets/curso/tema1/img12.png')  
    .row.justify-content-center
      p Se conoce como cifrado:
      .col-lg-8  
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2
          p.mb-0 Cifrado
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img13.svg')  
      p A continuación, se presenta un breve tratamiento de los cifrados, para un tratamiento completo.
    .BGIMG02.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-5
          .col-lg-6
            img(src='@/assets/curso/tema1/img16.png')
          .col-lg-5
            p <b>La transposición y la sustitución</b> se realizan en cascada; por ejemplo, en un sistema de este tipo, denominado sistema de fraccionamiento, la sustitución se realiza primero a partir de símbolos en texto plano a múltiples símbolos en el texto cifrado, que luego se superpone a una transposición.
            p Todas las operaciones o etapas de la transformación de un mensaje se efectúan de conformidad con una regla definida por una clave secreta que solo conocen el emisor del mensaje y el receptor previsto.
            .cajon.color-acento-contenido.p-5
             h4 TODAS LAS CIFRAS 
              p Implican una transposición o sustitución, o una combinación de estas dos operaciones matemáticas, es decir, cifras de productos. 
        .row.justify-content-center.align-items-center.p-5
          .col-lg-6
            img(src='@/assets/curso/tema1/img17.png')
          .col-lg-6
            .cajon.color-acento-contenido.p-5
              h4 EN LOS SISTEMAS POR TRANSPOSICIÓN
              p Los elementos del texto simple (por ejemplo, una letra, una palabra o una cadena de símbolos) se reordenan sin que cambie la identidad de los elementos, 
        .row.justify-content-center.align-items-center.p-5
          .col-lg-6
            img(src='@/assets/curso/tema1/img18.png')
          .col-lg-6
            .cajon.color-acento-contenido.p-5
              h4 EN LOS SISTEMAS POR SUSTITUCIÓN
              p Esos elementos se sustituyen por otros objetos o grupos de objetos sin que se modifique su secuencia, en los sistemas de cifrado de productos.
        
    .row.mb-5.justify-content-center
      p Se conoce como cifrado:
      .col-lg-8  
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          p.mb-0 Cifrado
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.svg') 

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Se han utilizado comúnmente dispositivos o máquinas de cifrado para cifrar y descifrar mensajes. El primer dispositivo de cifrado parece haber sido empleado por los antiguos griegos alrededor del año 400 a.C. para las comunicaciones secretas entre los comandantes militares. Este dispositivo, llamado la guadaña, consistía en un bastón cónico alrededor del cual se envolvía en espiral un trozo de pergamino inscrito con el mensaje, cuando se desenvolvía, el pergamino llevaba un incomprensible juego de letras, pero cuando se envolvía alrededor de otro bastón de idénticas proporciones, el texto original reaparecía. 
        p.mb-0 Otros dispositivos simples conocidos como discos cifrados fueron utilizados por los gobiernos europeos para las comunicaciones diplomáticas a finales de 1400. Estos dispositivos consistían en dos círculos concéntricos giratorios, ambos con una secuencia de 26 letras; un disco se usaba para seleccionar las letras de texto plano, mientras que el otro se usaba para el componente de cifrado correspondiente.
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img20.png') 
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Tipos y cifrados
    p A continuación, estudiará los tipos de criptografía.

    .BGIMG03.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5
            h3 Criptografía de clave simétrica
            p Es un sistema de encriptación en el que el emisor y el receptor de un mensaje utilizan una única clave común para encriptar y desencriptar los mensajes, los sistemas de clave simétrica son más rápidos y simples, pero el problema es que el emisor y el receptor tienen que intercambiar la clave de alguna manera segura. El sistema de criptografía de clave simétrica más popular es el Sistema de Cifrado de Datos (DES).
          .col-lg-6
            img(src='@/assets/curso/tema1/img21.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5
            h3 Funciones hash
            p No hay uso de ninguna clave en este algoritmo. Un valor hash con longitud fija se calcula según el texto plano, lo que hace imposible que el contenido del texto plano se recupere. Muchos sistemas operativos utilizan funciones hash para encriptar las contraseñas.
          .col-lg-6
            img(src='@/assets/curso/tema1/img22.svg') 
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5
            h3 Criptografía de clave asimétrica
            p En este sistema, se utiliza un par de claves para encriptar y desencriptar información; se utiliza una clave pública para el cifrado y una clave privada para el descifrado; la clave pública y la privada son diferentes, incluso si la clave pública es conocida por todos, el receptor previsto solo puede descifrarla porque solo él conoce la clave privada.
          .col-lg-6
            img(src='@/assets/curso/tema1/img23.svg')
    .col-lg-12.mb-5      
      p Ahora aborde algunos estándares y algoritmos:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Estándar de cifrado avanzado (AES)")
        .col-md-8.col-11.mb-4.mb-md-0
          p El cifrado AES fue establecido por el Instituto Nacional de Estándares y Tecnología de los Estados Unidos (NIST) en 2001 y su objetivo es ofrecer una especificación para la encriptación de datos electrónicos.

          p Los desarrolladores del AES son dos criptógrafos belgas: Joan Deamen y Vincent Rijmen; se sabe que el dúo ha propuesto su cifrado en bloque al Instituto Nacional de Estándares y Tecnología durante el proceso de selección de un AES. Para seleccionar un AES seguro, el NIST consideró tres diferentes bloques de cifrado de la familia de cifrado Rijndael. Estos tres cifrados seleccionados eran todos de 128 bits, pero las longitudes de sus claves eran de 128, 192 y 265 bits.
          p Al final, se seleccionó el cifrado en bloque desarrollado por Rijmen y Daemen. Este AES fue adoptado por primera vez en los Estados Unidos, pero con el tiempo se convirtió en la corriente principal en todo el mundo; el AES se caracteriza por ser un cifrado en bloque simétrico, en otras palabras, utiliza la misma clave para el cifrado y el descifrado. 
        .col-md-9.col-6
          figure
            img(src='@/assets/curso/tema1/img25.svg')
      .row(titulo="Estándar de encriptación de datos (DES)")
        .col-md-8.col-11.mb-4.mb-md-0
          p DES es el nombre del estándar FIPS (Federal Information Processing Standard) 46-3, el cual describe el algoritmo de cifrado de datos (DEA), que es un sistema criptográfico simétrico originalmente diseñado para implementación en el hardware; también es usado para encriptación de usuario simple para almacenar datos en el disco de forma encriptada, un algoritmo de cifrado en bloque que toma texto plano en bloques de 64 bits y los convierte en texto cifrado utilizando claves de 48 bits.
        .col-md-3.col-6
          figure
            img(src='@/assets/curso/tema1/img26.png')
      .row(titulo="Algoritmos RC4, RC5, RC6")
        .col-md-8.col-11.mb-4.mb-md-0
          p DES es el nombre del estándar FIPS (Federal Information Processing Standard) 46-3, el cual describe el algoritmo de cifrado de datos (DEA), que es un sistema criptográfico simétrico originalmente diseñado para implementación en el hardware; también es usado para encriptación de usuario simple para almacenar datos en el disco de forma encriptada, un algoritmo de cifrado en bloque que toma texto plano en bloques de 64 bits y los convierte en texto cifrado utilizando claves de 48 bits.
        .col-md-3.col-6
          figure
            img(src='@/assets/curso/tema1/img27.png')
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
