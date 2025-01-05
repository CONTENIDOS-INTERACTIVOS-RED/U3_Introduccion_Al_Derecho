export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '1',
        titulo: 'Clasificación del derecho ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '2',
        titulo: 'Derecho sustantivo y derecho adjetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Derecho sustantivo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Derecho adjetivo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '3',
        titulo: 'Derecho objetivo y derecho subjetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Origen y evolución de la clasificación entre derecho objetivo y derecho subjetivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Derecho objetivo y derecho subjetivo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de los derechos subjetivos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Derechos absolutos y relativos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '4',
        titulo: 'Derecho escrito y derecho no escrito',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Derecho no escrito',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Derecho escrito',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Sintesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta A. (2009) Constitución política de Colombia. Editorial: Ecoe Ediciones',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69002?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col',
    },
    {
      referencia:
        'Müller, F (2016) La positividad de los derechos fundamentales: cuestiones para una dogmática práctica de los derechos fundamentales Editorial: Dykinson',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/968557?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col',
    },
    {
      referencia:
        'Fix-Zamudio, H. (2010) Protección internacional de los derechos humanos. Editorial: Librería Editora Platense S.R.L.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/66602?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col',
    },
  ],
  glosario: [
    {
      termino: 'Clasificación',
      significado:
        'la acción de ordenar o agrupar elementos según sus características comunes. En el derecho, la clasificación organiza normas y principios en categorías, facilitando su comprensión, enseñanza y aplicación en casos específicos. Por ejemplo, el derecho se clasifica en Derecho Público, Privado y Social.',
    },
    {
      termino: 'Derecho Administrativo',
      significado:
        'rama del derecho público que regula la administración y funcionamiento de las entidades públicas, así como su relación con los ciudadanos. Su objetivo es garantizar que las decisiones administrativas se tomen de acuerdo con procedimientos justos y transparentes, protegiendo a los ciudadanos de posibles abusos de poder.',
    },
    {
      termino: 'Derecho Adjetivo',
      significado:
        'también conocido como Derecho Procesal, regula los procedimientos y mecanismos legales para hacer efectivos los derechos y obligaciones. Es fundamental para el funcionamiento del sistema judicial, ya que establece cómo se presentan y tramitan las demandas, las pruebas y las apelaciones.',
    },
    {
      termino: 'Derecho Civil',
      significado:
        'rama del derecho privado que regula las relaciones entre particulares, abarcando temas como contratos, propiedad y relaciones familiares. Es la base del derecho privado, ya que establece normas para la convivencia en sociedad y las relaciones individuales y patrimoniales.',
    },
    {
      termino: 'Derecho Constitucional',
      significado:
        'rama del derecho público que define la estructura y principios fundamentales del Estado, y protege los derechos y deberes de los ciudadanos. El Derecho Constitucional establece la organización del Estado, la separación de poderes y los mecanismos de control y protección de los derechos fundamentales.',
    },
    {
      termino: 'Derecho Internacional',
      significado:
        'Derecho Internacional	conjunto de normas que regulan las relaciones entre Estados y organizaciones internacionales. Su finalidad es promover la cooperación y la paz entre naciones, abordando temas como derechos humanos, comercio internacional y resolución de conflictos.',
    },
    {
      termino: 'Derecho No Escrito',
      significado:
        'normas y principios jurídicos no registradas en textos formales, sino que se transmiten por tradición o costumbre. Ejemplos incluyen la Ley del Talión y ciertas prácticas comerciales. Aunque el Derecho Escrito predomina en los sistemas modernos, el Derecho No Escrito todavía tiene relevancia en contextos específicos.',
    },
    {
      termino: 'Derecho Objetivo',
      significado:
        'conjunto de normas que rigen la conducta de todos los individuos en una sociedad, estableciendo lo permitido, prohibido y obligatorio. Es “objetivo” porque se aplica sin distinción a todos los ciudadanos y constituye el marco general del sistema jurídico.',
    },
    {
      termino: 'Derecho Penal',
      significado:
        'rama del derecho público que define los delitos y establece las sanciones correspondientes. Su objetivo es proteger el orden social, garantizando que las conductas delictivas sean castigadas y que se respeten los derechos de las víctimas y los acusados.',
    },
    {
      termino: 'Derecho Privado',
      significado:
        'parte del derecho que regula relaciones entre individuos o entidades privadas sin la intervención del Estado como autoridad, promoviendo la igualdad entre las partes. Incluye subramas como el Derecho Civil y el Derecho Comercial, y regula áreas como contratos, propiedad y relaciones familiares.',
    },
    {
      termino: 'Derecho Público',
      significado:
        'Conjunto de normas que regulan  las relaciones entre el Estado y los ciudadanos, enfocándose en el bienestar colectivo y el control del ejercicio del poder estatal. Incluye el Derecho Constitucional, el Derecho Penal y el Derecho Administrativo, buscando el orden y el bien común.',
    },
    {
      termino: 'Derecho Social',
      significado:
        'rama del derecho orientada a proteger los derechos de los grupos más vulnerables y a asegurar la justicia social. Incluye el Derecho Laboral y el Derecho de la Seguridad Social, y regula temas como el trabajo, la protección social y la igualdad en el acceso a derechos básicos.',
    },
    {
      termino: 'Derecho Subjetivo',
      significado:
        'facultad o poder que el sistema jurídico otorga a una persona para realizar o exigir algo, basado en las normas del Derecho Objetivo. Es “subjetivo” porque está relacionado con los derechos específicos de cada individuo, como el derecho a la propiedad o a la libertad.',
    },
    {
      termino: 'Derecho Sustantivo',
      significado:
        'conjunto de normas que define los derechos y obligaciones de las personas en sus relaciones con el Estado y otras personas. Es el “qué” del sistema jurídico, ya que establece las conductas permitidas y prohibidas, protegiendo derechos como la vida, la propiedad y la libertad.',
    },
    {
      termino: 'División',
      significado:
        'distribución de un conjunto en partes componentes para facilitar su estudio y comprensión. En el derecho, la división es esencial para analizar cada área de manera específica, como en la separación entre Derecho Público y Derecho Privado.',
    },
    {
      termino: 'Estado',
      significado:
        'Estado	entidad política con una estructura organizada y que regula la vida en sociedad dentro de un territorio definido. El Estado tiene el poder de promulgar leyes, administrar justicia y velar por el cumplimiento del derecho, funcionando como la principal autoridad de una nación.',
    },
    {
      termino: 'Ley',
      significado:
        'norma jurídica escrita que establece derechos y obligaciones para todos los ciudadanos, y que es promulgada por la autoridad competente. La ley busca ordenar la convivencia social, proteger derechos y sancionar conductas que afecten el bien común.',
    },
    {
      termino: 'Norma',
      significado:
        'regla que impone un comportamiento específico y que puede ser exigida mediante el poder del Estado. Las normas jurídicas definen lo que es permitido, obligatorio o prohibido, y son la base del Derecho Objetivo.',
    },
  ],
}
