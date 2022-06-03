<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Criptografía

    .row.justify-content-center
      .col-lg-12(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3
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
        .cajon.color-primario
          .row.align-items-center.p-4
            .col-11.col-lg-8
              p.mb-0 <b>¿Cuál es el problema?</b> Si el mensaje es interceptado, un tercero tiene todo lo necesario para descifrar y leer el mensaje. Para resolver este problema, los criptólogos diseñaron <b>el sistema asimétrico o de "clave pública"</b>; en este caso, cada usuario tiene dos claves: <b>una pública y otra privada</b>; los remitentes solicitan la clave pública de su destinatario, encriptan el mensaje y lo envían, cuando llega el mensaje, solo la clave privada del destinatario lo descifra, lo que significa que el robo no sirve de nada sin la correspondiente clave privada.
            .col-lg-3
              img(src='@/assets/curso/tema1/img02.png')
    
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 1.1 Conceptos y generalidades
    .col-lg-12  
      p.mb-4 La criptografía es la conversión de los datos en un código codificado que se descifra y se envía a través de una red privada o pública; se utiliza para proteger los mensajes de correo electrónico, información de tarjeta de crédito y datos corporativos.    
    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.png')
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-3
        p.mb-0 En la era actual de las computadoras, la criptografía suele asociarse con el proceso en el que un texto simple ordinario se convierte en texto cifrado, que es el texto hecho de tal manera que el receptor previsto del texto solo puede decodificarlo y, por lo tanto, este proceso se conoce como cifrado. El proceso de conversión de un texto cifrado a texto plano se conoce como descifrado. Las características de la criptografía son las siguientes:
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img04.png')

    .row.justify-content-center.align-center(data-aos="fade-left")
      .col-12.col-lg-3.col-md-6.col-6.mb-3.p-3
        .row.BGIMG07.h-100
          .col-12.p-0      
            img(src='@/assets/curso/tema1/img08.png')(data-aos="fade-right")
          .col-12.p-5          
            h5.tex-center Confidencialidad
            p.tex-center La información solo puede ser accedida por la persona a la que está destinada y ninguna otra persona puede acceder a ella.
   
      .col-12.col-lg-3.col-md-6.col-6.mb-3.p-3
        .row.BGIMG07.h-100
          .col-12.p-0(data-aos="fade-right")     
            img(src='@/assets/curso/tema1/img09.png')(data-aos="fade-right")
          .col-12.px-4.py-5            
            h5.tex-center Integridad
            p.tex-center La información no puede ser modificada en el almacenamiento o en la transición entre el emisor y el receptor previsto sin que se detecte cualquier adición a la información.
    
      .col-12.col-lg-3.col-md-6.col-6.mb-3.p-3
        .row.BGIMG07.h-100
          .col-12.p-0(data-aos="fade-right")     
            img(src='@/assets/curso/tema1/img10.png')(data-aos="fade-right")
          .col-12.p-5          
            h5.tex-center No repudio
            p.tex-center El creador/ remitente de la información no puede negar su intención de enviar la información en una etapa posterior.
    
      .col-12.col-lg-3.col-md-6.col-6.mb-3.p-3
        .row.BGIMG07.h-100
          .col-12.p-0(data-aos="fade-right")      
            img(src='@/assets/curso/tema1/img11.png')(data-aos="fade-right")
          .col-12.p-5           
            h5.tex-center Autenticación
            p.tex-center Se confirma la identidad del emisor y del receptor, así como el destino/origen de la información se confirma.
            <br>


    .row.align-items-center.mb-3
      .col-lg-2.col-md-6.col-6(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img12.png')
    .row.justify-content-center
      p Se conoce como cifrado:
      .col-lg-8  
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 <strong>Figura 2</strong> Cifrado
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img13.svg')
      p A continuación, se presenta un breve tratamiento de los cifrados, para un tratamiento completo.
    .BGIMG02.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-3
          .col-lg-6
            img(src='@/assets/curso/tema1/img16.png')
          .col-lg-5
            p <b>La transposición y la sustitución</b> se realizan en cascada; por ejemplo, en un sistema de este tipo, denominado sistema de fraccionamiento, la sustitución se realiza primero a partir de símbolos en texto plano a múltiples símbolos en el texto cifrado, que luego se superpone a una transposición.
            p Todas las operaciones o etapas de la transformación de un mensaje se efectúan de conformidad con una regla definida por una clave secreta que solo conocen el emisor del mensaje y el receptor previsto.
            .cajon.color-acento-contenido.p-3
             h5 TODAS LAS CIFRAS 
              p Implican una transposición o sustitución, o una combinación de estas dos operaciones matemáticas, es decir, cifras de productos. 
        .row.justify-content-center.align-items-center.p-3
          .col-lg-6.mb-3
            img(src='@/assets/curso/tema1/img17.png')
          .col-lg-6
            .cajon.color-acento-contenido.p-3
              h5 EN LOS SISTEMAS POR TRANSPOSICIÓN
              p Los elementos del texto simple (por ejemplo, una letra, una palabra o una cadena de símbolos) se reordenan sin que cambie la identidad de los elementos. 
        .row.justify-content-center.align-items-center.p-3
          .col-lg-6.mb-3
            img(src='@/assets/curso/tema1/img18.png')
          .col-lg-6
            .cajon.color-acento-contenido.p-3
              h5 EN LOS SISTEMAS POR SUSTITUCIÓN
              p Esos elementos se sustituyen por otros objetos o grupos de objetos sin que se modifique su secuencia, en los sistemas de cifrado de productos.
        
    .row.mb-5.justify-content-center(data-aos="fade-left")
      p Se conoce como cifrado:
      .col-lg-10  
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 <strong>Figura 3</strong> <em>Tipos de cifrado</em>
          
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img19.svg')
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Se han utilizado comúnmente dispositivos o máquinas de cifrado para cifrar y descifrar mensajes. El primer dispositivo de cifrado parece haber sido empleado por los antiguos griegos alrededor del año 400 a.C. para las comunicaciones secretas entre los comandantes militares. Este dispositivo, llamado la guadaña, consistía en un bastón cónico alrededor del cual se envolvía en espiral un trozo de pergamino inscrito con el mensaje, cuando se desenvolvía, el pergamino llevaba un incomprensible juego de letras, pero cuando se envolvía alrededor de otro bastón de idénticas proporciones, el texto original reaparecía. 
        p Otros dispositivos simples conocidos como discos cifrados fueron utilizados por los gobiernos europeos para las comunicaciones diplomáticas a finales de 1400. Estos dispositivos consistían en dos círculos concéntricos giratorios, ambos con una secuencia de 26 letras; un disco se usaba para seleccionar las letras de texto plano, mientras que el otro se usaba para el componente de cifrado correspondiente.
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img20.png')
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 1.2 Tipos y cifrados
    p A continuación, estudiará los tipos de criptografía.

    .BGIMG03.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5.mb-3
            h4 Criptografía de clave simétrica
            p Es un sistema de encriptación en el que el emisor y el receptor de un mensaje utilizan una única clave común para encriptar y desencriptar los mensajes, los sistemas de clave simétrica son más rápidos y simples, pero el problema es que el emisor y el receptor tienen que intercambiar la clave de alguna manera segura. El sistema de criptografía de clave simétrica más popular es el Sistema de Cifrado de Datos (DES).
          .col-lg-6
            img(src='@/assets/curso/tema1/img21.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5.mb-3
            h4 Funciones <em>hash</em>
            p No hay uso de ninguna clave en este algoritmo. Un valor <em>hash</em> con longitud fija se calcula según el texto plano, lo que hace imposible que el contenido del texto plano se recupere. Muchos sistemas operativos utilizan funciones <em>hash</em> para encriptar las contraseñas.
          .col-lg-6
            img(src='@/assets/curso/tema1/img22.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-5.mb-3
            h4 Criptografía de clave asimétrica
            p En este sistema, se utiliza un par de claves para encriptar y desencriptar información; se utiliza una clave pública para el cifrado y una clave privada para el descifrado; la clave pública y la privada son diferentes, incluso si la clave pública es conocida por todos, el receptor previsto solo puede descifrarla porque solo él conoce la clave privada.
          .col-lg-6
            img(src='@/assets/curso/tema1/img23.svg')
    .col-lg-12.mb-5      
      p Ahora aborde algunos estándares y algoritmos:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Estándar de cifrado avanzado (AES)").justify-content-center
        .col-md-12.col-12.mb-4.mb-md-0
          p El cifrado AES fue establecido por el Instituto Nacional de Estándares y Tecnología de los Estados Unidos (NIST) en 2001 y su objetivo es ofrecer una especificación para la encriptación de datos electrónicos.

          p Los desarrolladores del AES son dos criptógrafos belgas: Joan Deamen y Vincent Rijmen; se sabe que el dúo ha propuesto su cifrado en bloque al Instituto Nacional de Estándares y Tecnología durante el proceso de selección de un AES. Para seleccionar un AES seguro, el NIST consideró tres diferentes bloques de cifrado de la familia de cifrado Rijndael. Estos tres cifrados seleccionados eran todos de 128 <em>bits</em>, pero las longitudes de sus claves eran de 128, 192 y 265 <em>bits</em>.
          p Al final, se seleccionó el cifrado en bloque desarrollado por Rijmen y Daemen. Este AES fue adoptado por primera vez en los Estados Unidos, pero con el tiempo se convirtió en la corriente principal en todo el mundo; el AES se caracteriza por ser un cifrado en bloque simétrico, en otras palabras, utiliza la misma clave para el cifrado y el descifrado. 
        .col-12.col-md-9
          figure
            img(src='@/assets/curso/tema1/img25.svg')
      .row(titulo="Estándar de encriptación de datos (DES)").justify-content-center
        .col-md-8.col-11.mb-4.mb-md-0
          p DES es el nombre del estándar FIPS (Federal Information Processing Standard) 46-3, el cual describe el algoritmo de cifrado de datos (DEA), que es un sistema criptográfico simétrico originalmente diseñado para implementación en el hardware; también es usado para encriptación de usuario simple para almacenar datos en el disco de forma encriptada, un algoritmo de cifrado en bloque que toma texto plano en bloques de 64 <em>bits</em> y los convierte en texto cifrado utilizando claves de 48 <em>bits</em>.
        .col-md-3.col-6
          figure
            img(src='@/assets/curso/tema1/img26.png')
      .row.mb-5(titulo="Algoritmos RC4, RC5, RC6")
        .col-md-8.col-12.mb-4.mb-md-0
          p RC4, RC5 y RC6 son los algoritmos de una encriptación simétrica. Estas soluciones son diferentes entre sí en cuanto a los métodos y enfoques utilizados para el cifrado de datos. Handy Backup puede proporcionar todas las funciones necesarias para respaldar los datos de su software RSA cuando lo necesite.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-md-10.col-12.mb-4.mb-md-0
              ol.lista-candado
                li.mb-3
                  .lista-candado
                  | El RC4 es un cifrado de flujo de tamaño de clave variable, con operaciones orientadas a los bytes. El algoritmo utiliza una permutación aleatoria para los datos.
                li.mb-3
                  .lista-candado
                  | RC5 es un algoritmo parametrizado, que implementa un bloque de 32, 64 o 128 <em>bits</em>, un tamaño de clave variable y un número variable de rondas.
                li
                  .lista-candado
                  | El RC6 utiliza el RC5 con una suma de una multiplicación entera e implementando los cuatro registros de trabajo de 4 <em>bits</em> en lugar de los dos registros de 2 <em>bits</em> del RC5.
          p Estas soluciones de encriptación se aplican ampliamente en algunas áreas, incluyendo sitios web basados en Joomla CMS y algunas otras soluciones.
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1/img27.png')
      .row(titulo="El DSA y los esquemas de firmas relacionados")
        .col-lg-12-mb-5
          p El Algoritmo de Firma Digital, o DSA, por sus siglas en inglés, utiliza un algoritmo diferente para la firma y la encriptación a RSA (Rivest Shamir Aldeman, el cual revisará más adelante), pero proporciona el mismo nivel de seguridad. Fue propuesto en 1991 por el Instituto Nacional de Estándares y Tecnología (NIST) y adoptado por el Estándar Federal de Procesamiento de Información (FIPS) en 1993; desde entonces, ha pasado por cuatro revisiones.
        .row.justify-content-center 
          .col-12.col-lg-9
            .titulo-sexto.color-acento-contenido
              p.mb-0 <strong>Figura 4</strong> Firma digital
            figure.mb-5
              img.center(src='@/assets/curso/tema1/img29.svg')
        .col-lg-12.mb-5   
          p Un certificado de la DSA facilita el cumplimiento de las normas gubernamentales, ya que está avalado por los organismos federales, incluido el inminente paso a longitudes de clave de 2048 <em>bits</em>, incluso puede ejecutar RSA y DSA simultáneamente para mejorar aún más su seguridad, los servidores Apache, por ejemplo, pueden ejecutar los certificados RSA y DSA simultáneamente en un solo servidor web, esto beneficiará a las empresas que buscan maximizar el alcance de su ecosistema para su correspondencia comercial.
      .row.mb-5(titulo="RSA (Rivest Shamir Aldeman)")
        .col-lg-12
          p.mb-5 En la siguiente infografía, puede revisar el concepto
          img(src='@/assets/curso/tema1/img30.png').mb-5
          p Como la mayoría de los criptosistemas, la seguridad de la RSA depende de cómo se implementa y se utiliza. Un factor importante es el tamaño de la llave, cuanto mayor es el número de <em>bits</em> de una llave (esencialmente la longitud de la misma), más difícil es romperla mediante ataques como la fuerza bruta y el factoraje.
          p Dado que los algoritmos de clave asimétrica como RSA pueden romperse mediante factorización de enteros, mientras que los algoritmos de clave simétrica como AES no pueden, las claves RSA necesitan ser mucho más largas para lograr el mismo nivel de seguridad. Actualmente, el mayor tamaño de clave que ha sido factorizado es de 768 <em>bits</em> de largo, esto fue hecho por un equipo de académicos durante un período de dos años, utilizando cientos de máquinas.
          p Dado que la factorización se completó a finales de 2009 y la potencia de computación ha crecido significativamente desde entonces, se puede asumir que un intento de intensidad similar podría ahora factorizar una clave RSA mucho más grande; a pesar de esto, el tiempo y los recursos necesarios para este tipo de ataque lo pone fuera del alcance de la mayoría de los hackers y en el ámbito de los estados nacionales. La mejor longitud de la clave a utilizar dependerá de su modelo de amenaza individual. El Instituto Nacional de Estándares y Tecnología recomienda un tamaño mínimo de clave de 2048 <em>bits</em>, pero también se utilizan claves de 4096 <em>bits</em> en algunas situaciones en las que el nivel de amenaza es mayor.
          p El factoraje es solo una forma en la que el RSA puede romperse, otros ataques tienen el potencial de romper el cifrado con una cantidad menor de recursos, pero estos dependen de la aplicación y otros factores, no necesariamente del propio RSA.
      .row.mb-5(titulo="Funciones de resumen (<em>Bash</em> de una vía)")
        .col-lg-12-mb-5
          p.mb-5 A continuación, se presenta en qué consisten las funciones de resumen:  
          img(src='@/assets/curso/tema1/img31.svg')
      .row.mb-5(titulo="Función de resumen del mensaje: MD5")
        .col-lg-12-mb-5
          p.mb-5 Revise ahora la función de resumen del mensaje, algoritmo MD5. 
          img(src='@/assets/curso/tema1/img32.svg')
      .row.mb-5(titulo="Algoritmo de Hashing Seguro (SHA)")
        .col-12.col-lg-12-mb-5
          p.mb-0 Los algoritmos <em>Secure Hash</em>, también conocidos como SHA, son una familia de funciones criptográficas diseñadas para mantener los datos seguros, funcionan transformando los datos mediante una función <em>hash</em>: un algoritmo que consiste en operaciones de <em>bits</em>, adiciones modulares y funciones de compresión. 
        
        .row.justify-content-center.align-items-center.p-3
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.img200(src='@/assets/curso/tema1/img33.png' alt='AvatarTop')
              .tarjeta.BG14
                p.mb-0.p-3 La función de <em>hash</em> produce una cadena de tamaño fijo que no se parece en nada al original. Estos algoritmos están diseñados para ser funciones unidireccionales, lo que significa que, una vez que se transforman en sus respectivos valores de <em>hash</em>, es virtualmente imposible transformarlos de nuevo en los datos originales.
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img34.png' alt='AvatarTop')
              .tarjeta.BG14
                p.mb-0.p-3 Algunos algoritmos de interés son SHA-1, SHA-2 y SHA-3, cada uno de los cuales fue diseñado sucesivamente con una encriptación cada vez más fuerte en respuesta a los ataques de los hackers. SHA-0, por ejemplo, es ahora obsoleto, debido a las vulnerabilidades ampliamente expuestas.
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img35.png' alt='AvatarTop')
              .tarjeta.BG14
                p.mb-0.p-3 Una aplicación común de SHA es la encriptación de contraseñas, ya que el lado del servidor solo necesita llevar un registro del valor de <em>hash</em> de un usuario específico, en lugar de la contraseña real. 
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img36.png' alt='AvatarTop')
              .tarjeta.BG14
                p.mb-0.p-3 Esto es útil en caso de que un atacante hackee la base de datos, ya que solo encontrará las funciones de <em>hash</em> y no las contraseñas reales, de modo que, si introdujera el valor de <em>hash</em> como contraseña, la función de <em>hash</em> la convertiría en otra cadena y posteriormente denegaría el acceso. 
          .col-12
            p Además, las SHA exhiben el efecto de avalancha, en el que la modificación de muy pocas letras que se cifran provoca un gran cambio en la salida; o, por el contrario, cadenas drásticamente diferentes producen valores de <em>hash</em> similares. Este efecto hace que los valores <em>hash</em> no den ninguna información sobre la cadena de entrada, como su longitud original. Además, los valores de <em>hash</em> también se utilizan para detectar la manipulación de los datos por parte de los atacantes, en la que, si un archivo de texto se modifica ligeramente y apenas se nota, el valor de <em>hash</em> del archivo modificado será diferente del valor de <em>hash</em> del archivo original, y la manipulación será bastante notable.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 1.3 Herramientas criptográficas 
      
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img37.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Hoy en día, las organizaciones manejan información sensible y confidencial que es perentorio proteger y salvaguardar, ya que esta puede caer en manos de terceros. Es por ello que, para mitigar estos riesgos y amenazas, resulta imprescindible el conocer las diferentes herramientas de cifrado; en este módulo, se van a mirar algunas de ellas, que ayudan a cifrar y proteger la información; entre las que se pueden encontrar en la red y se pueden usar en las organizaciones están:

    .BGIMG03.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.mb-5.p-5
          .col-lg-12-md-6
            h4 Herramienta de criptografía: <em>Advanced Encryption Package</em>
          .col-lg-8.mb-3
            img(src='@/assets/curso/tema1/img38.svg')
          .col-lg-4.align-items-end
            a.anexo.mb-4.mb-lg-0(href="http://www.aeppro.com" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
              p <b>Enlace web.</b> Herramienta de criptografía: Advanced Encryption Package
        .row.mb-5.p-5
          .col-lg-5
            h4 Herramienta de cifrado: Enigmail
          .col-lg-8.mb-3
            img(src='@/assets/curso/tema1/img39.svg')
          .col-lg-4.align-items-end
            a.anexo.mb-4.mb-lg-0(href="https://www.enigmail.net/index.php/en/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
              p <b>Enlace web.</b> Herramienta de cifrado: Enigmail
    .container.BG13.px-4.pt-4.pt-md-4.px-md-5
      .row.justify-content-center
        .col-lg-10
          p Igualmente, existen un sinnúmero de herramientas y aplicaciones que pueden servirle para poder cifrar o encriptar su información que puede consultar en la red según las necesidades de la organización para poder proteger la información, hay desde protección de discos duros hasta protección de correos electrónicos.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 1.4	Firmas digitales 
  .container.BGIMG05.px-4.pt-5.pt-md-5.px-md-5
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p.mb-4 La firma digital utiliza un cifrado asimétrico para simular las propiedades de seguridad de la firma en digital por la forma que se escribió. Los esquemas de firma digital involucran dos algoritmos, una llave privada para firmar el mensaje y una llave pública para verificar las firmas.
          div.p-4.mb-4(style="background-color: white") 
            p.mb-0 Las firmas digitales funcionan utilizando un algoritmo matemático, los proveedores de soluciones de firma digital como Zoho Sign, generarán dos claves: una clave pública y una clave privada. Cuando un firmante firma digitalmente un documento, se genera un <em>hash</em> criptográfico para el documento.
          p.mb-0.mb-3 Ese <em>hash</em> criptográfico se cifra entonces utilizando la clave privada del remitente, que se almacena en una caja HSM segura. A continuación, se adjunta al documento y se envía a los destinatarios junto con la clave pública del remitente.
        .col-lg-4.mb-3
          figure.m-0
            img(src="@/assets/curso/tema1/img40.png")
        .col-lg-9.mb-3
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              p.mb-0 <strong>Figura 5</strong> Clave pública
            figure.mb-5(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img41.svg')
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p El destinatario puede descifrar el <em>hash</em> codificado con el certificado de clave pública del remitente. Un hash criptográfico se genera de nuevo en el extremo del destinatario.

          p Ambos hashes criptográficos se comparan para comprobar su autenticidad. Si coinciden, el documento no ha sido manipulado y se considera válido.

  .container.BGIMG01.px-4.pt-4.pt-md-4.px-md-5
    .row.align-items-center
      .col-lg-2.col-md-6.col-6(data-aos="fade-right").mb-3
        img(src='@/assets/curso/tema1/img44.png')
    .row.justify-content-center
      p SSL es el acrónimo de Secure Sockets Layer (capa de sockets seguros), la tecnología estándar para mantener segura una conexión a Internet, así como para proteger cualquier información confidencial que se envía entre dos sistemas e impedir que los delincuentes lean y modifiquen cualquier dato que se transfiera, incluida información que pudiera considerarse personal. Los dos sistemas pueden ser un servidor y un cliente (por ejemplo, un sitio web de compras y un navegador) o de servidor a servidor (por ejemplo, una aplicación con información que puede identificarse como personal o con datos de nóminas). 
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
         p.mb-0 <strong>Figura 6</strong> Certificado SSL
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img43.svg')
      .col-12.col-lg-10
        p Esto lo lleva a cabo asegurándose de que todos los datos que se transfieren entre usuarios y sitios web o entre dos sistemas sean imposibles de leer. Utiliza algoritmos de cifrado para codificar los datos que se transmiten e impedir que los hackers los lean al enviarlos a través de la conexión. Esta información podría ser cualquier dato confidencial o personal, por ejemplo, números de tarjeta de crédito y otros datos bancarios, nombres y direcciones.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 1.5	Herramientas de cifrado y criptoanálisis
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
      .col-lg-12
       p La encriptación de discos es una tecnología que protege la información convirtiéndola en un código ilegible que no puede ser descifrado fácilmente por personas no autorizadas. La encriptación de discos utiliza software o hardware de encriptación de discos para encriptar cada bit de datos que va en un disco o volumen de disco. Se utiliza para impedir el acceso no autorizado al almacenamiento de datos. Revise la siguiente figura:

      .row(data-aos="fade-right") 
        .col-md-4(data-aos="fade-left")
          .BG04.p-4.mb-4.br01.mtO01
            figure.mb-4.mtN01
              img.w-50.mx-auto(src='@/assets/curso/tema1/img45.png', alt='')(data-aos="fade-right")
          h4.text-center.mb-3 Confidencialidad       
          p El cifrado de disco es utilizado para proteger la confidencialidad de los datos almacenados en un disco de computador: volúmenes ocultos, privacidad, contraseña, esteganografía.
        .col-md-4
          .BG04.p-4.mb-4.br01.mtO01
            figure.mb-5.mtN01
              img.w-50.mx-auto(src='@/assets/curso/tema1/img46.png', alt='')(data-aos="fade-right")
          h4.text-center.mb-3 Cifrado     
          p El cifrado de disco trabaja en forma similar al cifrado de un mensaje de texto y protege los datos incluso cuando el sistema operativo no está activo.
        .col-md-4
          .BG04.p-4.mb-4.br01.mtO01
            figure.mb-4.mtN01
              img.w-50.mx-auto(src='@/assets/curso/tema1/img47.svg', alt='')(data-aos="fade-right")
          h4.text-center.mb-3 Protección       
          p Con el uso de un programa de cifrado para el disco, se puede salvaguardar cualquier información para quemas sobre el disco y conservarla de caer en manos equivocadas: dvd, copias de seguridad, <em>bluray</em>.
      .row 
        .col-lg-12
          p La expresión cifrado de disco completo (FDE) significa que todo lo que hay en el disco está cifrado, pero el registro de arranque maestro (MBR), o un área similar de un disco de arranque, con el código que inicia la secuencia de carga del sistema operativo, no está cifrado. Algunos sistemas de encriptación de disco completo basados en hardware pueden realmente encriptar un disco de arranque completo, incluyendo el MBR.
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5  
      .BGIMG03.mb-5   
        SlyderA(tipo="b")(data-aos="fade-right")
          .row.p-5
            .col-lg-5
              h4 	Herramienta de cifrado de datos: VeraCrypt
              p VeraCrypt es una utilidad gratuita disponible en la fuente, que se utiliza para el cifrado sobre la marcha (OTFE). Puede crear un disco cifrado virtual dentro de un archivo o cifrar una partición o (en Windows) todo el dispositivo de almacenamiento con autenticación previa al arranque.
            .col-lg-7
              img(src='@/assets/curso/tema1/img49.svg')
          .row.p-5
            .col-lg-5
              h4 Herramienta de cifrado de datos: BitLocker
              p BitLocker es una característica de cifrado integrada en equipos que ejecutan Windows 10 Pro; si ejecuta Windows 10 Home no podrá usar BitLocker. Crea un entorno seguro para sus datos sin necesidad de realizar ningún esfuerzo adicional por su parte. De hecho, una vez que se configura.
            .col-lg-7
              img(src='@/assets/curso/tema1/img48.svg')
      .row.justify-content-center.align-items-center.mb-5  
        .col-lg-12-mb-5
          h4  Aquí están otros enlaces con algunas herramientas de criptoanálisis 
      .row.align-items-center.mb-5
        .col-12.col-lg-2.mb-4
          figure.justify-center
            img.img200(src='@/assets/curso/tema1/img50.svg')
        .col-lg-3
          a.anexo.mb-4(href="https://sourceforge.net/projects/cryptanalysisto/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> Cryptanalysis Tools 
          a.anexo.mb-4(href="http://ganzua.sourceforge.net/es/index.html" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> Ganzua
        .col-lg-3
          a.anexo.mb-4(href="http://crank.sourceforge.net/downloads.html" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> Crank
          a.anexo.mb-4(href="http://alphapeeler.sourceforge.net/me/?page_id=16" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> AlphaPeeler
        .col-lg-3
          a.anexo.mb-4(href="https://sourceforge.net/projects/evercrack/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> EverCrack
          a.anexo.mb-4(href="http://www.addario.org/cryptobench/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
            p <b>Enlace web.</b> CryptoBench

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
