<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Reportes
  .container.BGIMG03.px-4.pt-4.pt-md-4.px-md-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          figure.m-0
            img(src="@/assets/curso/tema2/img01.png")
        .col-lg-6
          p.mb-4 En las pruebas de penetración, la redacción de informes es una tarea exhaustiva que incluye la metodología, los procedimientos, la explicación adecuada del contenido y el diseño del informe, un ejemplo detallado del informe de la prueba y la experiencia personal del probador. Una vez preparado el informe, se comparte entre el personal directivo superior y el equipo técnico de las organizaciones objetivo; si en el futuro surgiera algún tipo de necesidad de este tipo, este informe se utiliza como referencia.
          div.p-4.mb-4(style="background-color: white") 
            p.mb-0 Un informe de <em>pentesting o ethical hacking</em> es un resumen del proceso de penetración, las vulnerabilidades identificadas y las recomendaciones para mitigarlas. Una prueba que tenga un proceso confirmado, regulado y observado puede representar un resumen de un informe eficaz e imparcial.
          p.mb-0 En gran medida, los informes están orientados a la técnica y carecen de recomendaciones prácticas, estos tampoco explican los impactos comerciales debido a la existencia de las vulnerabilidades enumeradas. Un tester bien cualificado no sólo encuentra las debilidades, sino que también explica su impacto en el cliente; es importante escribir un informe con un valor añadido real; el informe debe proporcionar al cliente soluciones realistas a los riesgos identificados; la parte final del informe del test debe incluir los detalles del proceso de despliegue.

  separador
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5    
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1	Tipos de reporte
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-0 La planificación del informe comienza con los objetivos, que ayudan a los lectores a entender los puntos principales de las pruebas de penetración, esta parte describe por qué se realizan las pruebas, cuáles son los beneficios de las pruebas, con bolígrafo, etc. En segundo lugar, la planificación del informe también incluye el tiempo empleado en las pruebas, las cuales son consignadas en diferentes tipos de reportes que se deben entregar, los cuales se clasifican en:
      .col-lg-3.p-0(data-aos="fade-left").mb-5
        img(src='@/assets/curso/tema2/img02.png')
      .col-lg-10
        img(src='@/assets/curso/tema2/img03.svg')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2	Elementos de un reporte
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p.mb-0 Los principales elementos de la redacción del informe son:

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10      
          .info1.p-0.mb-4
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img04.svg')              
              .tarjeta.p-4(x="8.94%" y="28.5%" numero="")               
                p.mb-0 Describe el propósito general y los beneficios de las pruebas, con bolígrafo.

              .tarjeta.p-4(x="28.8%" y="75.7%" numero="")               
                p.mb-0 La inclusión del tiempo es muy importante, ya que da el estado exacto del sistema. Supongamos que si algo malo sucede más tarde, este informe salvará al probador, ya que el informe ilustrará los riesgos y vulnerabilidades en el ámbito de la prueba de penetración durante el período de tiempo específico.

              .tarjeta.p-4(x="49.9%" y="28.5%" numero="")               
                p.mb-0 El informe de pruebas de intrusión también debe incluir el público objetivo, como el gerente de seguridad de la información, el gerente de tecnología de la información, el jefe de seguridad de la información y el equipo técnico.
          
              .tarjeta.p-4(x="70.8%" y="75.7%" numero="")               
                p.mb-0 Dado que es altamente confidencial, ya que lleva las direcciones IP de los servidores, la información de las aplicaciones, la vulnerabilidad, las amenazas, debe ser clasificado adecuadamente. Sin embargo, esta clasificación debe hacerse sobre la base de la organización objetivo, que tiene una política de clasificación de la información.

              .tarjeta.p-4(x="91.2%" y="26.5%" numero="")               
                p.mb-0 El número de copias y la distribución de informes deben mencionarse en el ámbito de trabajo. También es necesario mencionar que las copias impresas pueden controlarse imprimiendo un número limitado de copias adjuntas con su número y el nombre del receptor.

    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img05.svg')
      .col-lg-12
        p Para poder entregar a las organizaciones los hallazgos encontrados en las pruebas de penetración realizadas a sus sistemas, se debe de tener en cuenta la siguiente estructura:

    .row.align-items-center.mb-4
      
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.mb-5.text-small(numero="1" titulo="Resumen ejecutivo del proyecto:") El informe habla de la información del proyecto, sobre el propósito, objetivo y meta del proceso del test; resume el tema, los métodos de análisis, los resultados, las conclusiones, las recomendaciones y las limitaciones del informe. Aunque hay mucho que explicar sobre todo el proceso, el <em>pentester o hacker</em> ético debe mantenerlo conciso y preciso."SENA12345".
          p.text-small(numero="2" titulo="Detalles del proyecto:") En esta sección, el <em>pentester</em>, o hacker ético, describe el enfoque del proyecto, el proceso que utilizó y el alcance definido al inicio de la propuesta; detalla para qué ha sido contratado el <em>pentester</em> y establece las "reglas de combate", por ejemplo, qué es lo que probará, qué hará cuando lo haga, qué precauciones tomará, cómo se juzgará el éxito, a quién informará, etc.
          
          p.mb-5.text-small(numero="3" titulo="Información de la empresa:") El informe también explica detalles de la organización, el tipo de negocio, los clientes a los que se dirige, el alcance del negocio y otra información legítima; incluye detalles de los miembros del equipo involucrados, sus calificaciones, funciones de trabajo, responsabilidades, etc. Gran parte de esto será opcional, ya que caerá en la información de acceso público. Sin embargo, algunos pueden ser incluidos, especialmente si esa información tiene que ver con el descubrimiento de vulnerabilidades posteriores que son explotadas posteriormente.
          
          p.mb-5.text-small(numero="4" titulo="Enumeración de los riesgos en función de la gravedad:") Para hacer un informe estructurado, enumere los hallazgos con base en su gravedad, se debe dar prioridad a las vulnerabilidades de alto riesgo y enumerarlas arriba, seguidas de los hallazgos de bajo riesgo.
          
          p.mb-5.text-small(numero="5" titulo="Descargo de responsabilidad: ") Una liberación de responsabilidades es una parte muy importante de un informe. Al ser un tester, es posible que enumere las vulnerabilidades, explique sus consecuencias y recomiende su mitigación, en el ámbito dado, las herramientas y los factores externos definidos; estas consecuencias pueden resultar en caso de que cambie alguno de los factores influyentes; una cláusula de exención de responsabilidad al final del informe resume la responsabilidad y define los límites de la prueba de penetración.
      .col-lg-5.col-md-6.col-6(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img06.svg')      

      
</template>

<script>
export default {
  name: 'Tema2',
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
