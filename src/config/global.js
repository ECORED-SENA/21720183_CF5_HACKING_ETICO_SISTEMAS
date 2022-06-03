export default {
  global: {
    componenteFormativo:
      'Controles, documentación y reportes en <em>hacking</em> ético',
    descripcionCurso:
      'Este material se centra en aspectos de seguridad de la información teniendo en cuenta los conceptos y generalidades de la criptografía, así como las herramientas para el cifrado y el criptoanálisis. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Criptografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos y cifrados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas criptográficas ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Firmas digitales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Herramientas de cifrado y criptoanálisis',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de reporte',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos de un reporte',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto:
        'Profe Sang. (2021). Encriptación (Cifrado) Simétrica y Asimétrica - Explicado Fácilmente ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wDpqrasDmxM/',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Componente o funcionalidad de un sistema, el cual puede ser atacado por parte de un ciberdelincuente, ya sea a nivel de <em>software o de hardware</em>.',
    },
    {
      termino: 'Análisis de tráfico',
      significado:
        'Observación del comportamiento de los datos en una red por un canal de transmisión de información.',
    },
    {
      termino: 'Antispam',
      significado:
        'Herramienta por la cual se infiere en las contramedidas en la contención de correos electrónicos.',
    },
    {
      termino: 'Basura',
      significado:
        'Obtención de datos a base de la basura de las personas o empresas, los cuales pueden brindar información relevante para un posible ataque.',
    },
    {
      termino: 'Ciberespionaje',
      significado:
        'Actividad que tienen los hackers en el mundo digital para poder obtener información y datos sensibles, los cuales pueden obtenerse de manera pasiva o activa.',
    },
    {
      termino: 'Falso negativo',
      significado:
        'Son <em>bugs</em> o errores que se producen cuando un sistema puede diagnosticar como actividad normal un ataque de un ciberdelincuente',
    },
    {
      termino: 'Reporte',
      significado:
        'Documento estructurado donde se organiza información relevante para dar a conocer los hallazgos durante un <em>pentesting</em>. ',
    },
  ],
  referencias: [
    {
      referencia: 'Borges, E. (2019). Servidor FTP. Infranetworking.',
      link: 'https://blog.infranetworking.com/servidor-ftp/.',
    },
    {
      referencia: 'Borges, S. (2021). Servidor <em>web</em>. Infranetworking.',
      link: 'https://blog.infranetworking.com/servidor-web/.',
    },
    {
      referencia:
        'Castillo, J. (2018). Active Directory Qué es y para qué sirve. Profesional Review.',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/.',
    },
    {
      referencia:
        'Echeverry, J. (2009). Metodología para el diagnóstico continuo de la seguridad informática de la red de datos de la Universidad Militar Nueva Granada. Semantic Scholar.',
      link:
        'https://pdfs.semanticscholar.org/60c7/dbe2abab31a25422c92ead74085fd7093715.pdf.',
    },
    {
      referencia:
        'Gaviria, R., Cárdenas, J. y Supelano, J. (2015). Guía práctica para pruebas de pentest basada en la metodología OSSTMM V2.1 y la guía OWASP V3.0. Universidad Libre Seccional Pereira.',
      link: 'https://repository.unilibre.edu.co/handle/10901/17296',
    },
    {
      referencia:
        'INCIBE. (2017). Amenaza vs vulnerabilidad, ¿sabes en qué se diferencian?',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/amenaza-vs-vulnerabilidad-sabes-se-diferencian',
    },
    {
      referencia:
        'Jimenez, J. (2021). Tipos de ataques de ingeniería social y cómo evitarlos. Redes Zone.',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/tipos-ataques-ingenieria-social-consejos/',
    },
    {
      referencia:
        'LISA Institute. (2020). Guía práctica contra la ingeniería social.',
      link:
        'https://www.lisainstitute.com/blogs/blog/guia-practica-ingenieria-social',
    },
    {
      referencia:
        'Martínez, E. (2018). Las diferentes amenazas de seguridad informática. Las amenazas la informática.',
      link: 'https://sites.google.com/site/lasamenazaslainformatica/.',
    },
    {
      referencia:
        'ReYDeS. (2015). Introducción a OSSTMM (Open Source Security Testing Methodology Manual). Alonso Caballero / ReyDeS.',
      link:
        'http://www.reydes.com/d/?q=Introduccion_a_OSSTMM_Open_Source_Security_Testing_Methodology_Manual',
    },
    {
      referencia:
        'Zuluaga, A. (2017). Hacking ético basado en la metodología abierta de testeo de seguridad - OSSTMM, aplicado a la rama judicial, seccional Armenia. Universidad Nacional Abierta y a Distancia.',
      link:
        'https://stadium.unad.edu.co/preview/UNAD.php?url=/bitstream/10596/17410/1/94288061.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
