<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'3. Derecho objetivo y derecho subjetivo'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden.bg-3
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/23.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Distinción entre derecho objetivo y derecho subjetivo: 
            p.mb-0.text-center Es fundamental en el estudio del derecho y tiene sus raíces en la filosofía y la evolución del pensamiento jurídico. 
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/24.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Clasificación desde dos enfoques complementarios: 
            p.mb-0.text-center El de las normas que se aplican a todos (objetivo) y el de los derechos individuales que esas normas otorgan (subjetivo). 
    p.mb-4 Ahora, conozcamos la definición de cada uno de ellos:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/25.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Derecho objetivo")
            p Se refiere al conjunto de normas y reglas de conducta, establecidas para todos los miembros de una sociedad, que definen lo que está permitido, prohibido u obligatorio. Estas normas son generales, permanentes e impersonales, lo que significa que no están hechas para casos específicos, ni para personas individuales, sino para todos los ciudadanos. Son la "ley" en sentido amplio, es decir, el marco normativo que establece lo que las personas deben o no deben hacer, para lograr una convivencia pacífica y ordenada.
            p Es "objetivo" porque se aplica independientemente de los deseos individuales de cada persona. Es un sistema de normas externas, diseñado para regular la conducta de todos en la sociedad, y cuya observancia puede ser exigida mediante la coerción del Estado. 
            p La clave de esta clasificación es que el derecho objetivo constituye el “qué” del sistema legal: qué está permitido, qué está prohibido, qué obligaciones existen y cuáles son las consecuencias de su incumplimiento.

          div(titulo="Derecho subjetivo")
            p.mb-0 Se refiere a los derechos específicos que el sistema jurídico otorga a cada individuo dentro del marco del derecho objetivo. Es el "poder" o la "facultad" que una persona tiene de actuar de una determinada manera o de exigir algo de otro, basándose en las normas del derecho objetivo. 
            p Es decir, mientras que el derecho objetivo establece las normas generales, el derecho subjetivo otorga a cada persona la capacidad de ejercer derechos específicos o reclamar algo.
            p El derecho subjetivo se entiende como el derecho "personal", en el sentido que es específico para cada individuo o entidad, y depende de la situación particular de cada persona. 
            p Entonces, se habla de derechos individuales (como el derecho a la propiedad o el derecho a la libertad), que son facultades que las personas pueden ejercer en sus relaciones con los demás.
    #t_3_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 3.1] Origen y evolución de la clasificación entre derecho objetivo y derecho subjetivo
    p.mb-4 Esta clasificación se originó en la filosofía jurídica de la antigua Roma y se desarrolló en profundidad, durante el período medieval y la modernidad, especialmente a través de la filosofía escolástica y la teoría jurídica alemana. Conozcamos su evolución:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-5(x="35%" y="16%" numero="+")
        .h5.mb-2 Filosofía Medieval
        p La escolástica medieval, influenciada por el pensamiento aristotélico, contribuyó a desarrollar la idea del derecho subjetivo como una facultad individual que la ley reconoce. Filósofos como Tomás de Aquino y Francisco Suárez, concibieron el derecho subjetivo como un poder inherente a la persona para actuar o exigir el cumplimiento de la justicia. De esta forma, el derecho se entendía como algo que pertenecía a la persona y no solo como un conjunto de normas externas.
      .tarjeta.bg-white.p-5(x="64%" y="16%" numero="+")
        .h5.mb-2 Modernidad y teoría alemana
        p En el siglo XIX, juristas alemanes como Friedrich Carl von Savigny y Rodolfo von Ihering, desarrollaron ampliamente la distinción entre derecho objetivo y derecho subjetivo. Savigny consideraba el derecho subjetivo como una “facultad moral” de la persona para actuar, según su voluntad, dentro del marco que establece el derecho objetivo. Ihering, por otro lado, veía el derecho subjetivo no solo como una expresión de la voluntad, sino como una protección de intereses individuales reconocidos por el sistema jurídico.
      .tarjeta.bg-white.p-5(x="35%" y="68%" numero="+")
        .h5.mb-2 Derecho Romano
        p En Roma, los juristas ya diferenciaban entre las normas de carácter general y los derechos que esas normas conferían a las personas. En el latín jurídico, el término "ius" se usaba tanto para referirse a la "ley" (normas generales) como al "derecho" (facultades de las personas). Esta ambigüedad permitió que, a lo largo de los siglos, los juristas profundizaran en ambas dimensiones del derecho.
      .tarjeta.bg-white.p-5(x="64%" y="68%" numero="+")
        .h5.mb-2 Influencia de la filosofía moderna
        p La clasificación también se enriqueció con ideas de la filosofía moderna, especialmente del contractualismo de Hobbes, Locke y Rousseau, y más adelante, de Kant. Estos filósofos introdujeron la idea de que las personas tienen derechos naturales o inherentes, y que el Estado tiene el deber de proteger esos derechos. Esta visión consolidó la idea de que el derecho objetivo establece las normas generales de convivencia, mientras que el derecho subjetivo reconoce los derechos de cada individuo en el contexto de esas normas.
    p.mb-4 La distinción entre derecho objetivo y derecho subjetivo es importante porque permite entender el derecho desde una perspectiva completa y equilibrada:
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Normas y responsabilidades" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Normas y responsabilidades
            p El derecho objetivo establece normas y crea obligaciones para todos los individuos. Sin él, no habría reglas claras que definan qué es correcto o incorrecto en la sociedad. Esta función es esencial para que la convivencia sea pacífica y ordenada.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/27.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derechos y libertades" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Derechos y libertades
            p El derecho subjetivo, por su parte, garantiza que cada persona tenga derechos específicos que puede hacer valer ante los demás y ante el Estado. Sin esta dimensión, las normas del derecho objetivo quedarían incompletas, pues no se concretarían en derechos específicos para cada individuo.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/28.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Equilibrio entre lo colectivo y lo individual" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Equilibrio entre lo colectivo y lo individual
            p El derecho objetivo busca el bien común, al establecer normas generales que aplican a todos. El derecho subjetivo permite que cada individuo disfrute de esos beneficios, dándole la posibilidad de reclamar sus derechos de manera concreta.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/29.png', alt='')
    .p-4(data-aos="fade-left" style="background-color: #fbf8e2").mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/30.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En resumen, el derecho objetivo y el derecho subjetivo son dos caras de la misma moneda en el sistema jurídico. Uno establece el marco general, mientras que el otro permite que cada persona lo haga suyo en forma de derechos específicos. Esta distinción no solo enriquece el estudio del derecho, sino que también garantiza que las personas puedan vivir en una sociedad en la que sus derechos individuales están protegidos dentro de un marco normativo común. 
    #t_3_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 3.2] Derecho objetivo y derecho subjetivo
    .mn.p-5.mb-5(style="background-color: #e5f0f6 ")
      .row.justify-content-center.align-items-center
        .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/31.svg', alt='')
        .col-lg-6(data-aos="fade-left")
          p.mb-4 Para conocer sobre el derecho objetivo y el derecho subjetivo lo invitamos a escuchar el siguiente #[em podcast].
          div(style="width: 100%")
            TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="Derecho objetivo y derecho subjetivo"
              :audio="require('../../assets/podcast/podcast_u3.mp3')"
              tiempo
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    #t_3_3.titulo-segundo(data-aos='fade-right')
      h2 #[span 3.3] Teorías sobre el derecho subjetivo
    p.mb-4 El derecho subjetivo ha sido analizado desde varias perspectivas por diferentes estudiosos del derecho. A continuación, se presentan las tres principales teorías:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/32.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Teoría de la voluntad")
            p.mb-0 Según esta teoría, el derecho subjetivo es una expresión de la libre voluntad de cada persona. Es decir, cada individuo tiene el poder de decidir y actuar según sus propios intereses. Uno de los defensores de esta teoría fue el jurista alemán Friedrich Karl von Savigny, quien veía el derecho como una “facultad moral” que le permite al ser humano actuar según su propia voluntad y dentro de los límites que establece el derecho.
              br
              br
              |Llevado a un caso práctico, una persona que es propietaria de un vehículo tiene el derecho de venderlo, prestarlo o regalarlo según su voluntad. Este derecho de propiedad le permite decidir sobre el uso y disposición de su vehículo, y la ley lo protege para que nadie interfiera en su decisión.

          div(titulo="Teoría del interés")
            p.mb-0 Esta teoría, defendida por Rodolfo von Ihering, sostiene que el derecho subjetivo es un interés jurídicamente protegido, más que una simple expresión de voluntad. Según esta teoría, el derecho protege los intereses de las personas para garantizar la paz y el orden en la sociedad. Ihering veía el derecho subjetivo como una herramienta que permite a las personas satisfacer sus necesidades y proteger sus intereses sin causar conflictos con los demás.
              br
              br
              |Por ejemplo, en un contrato de trabajo, el empleado tiene derecho a recibir un salario y a que se respeten sus condiciones laborales. Este derecho no es solo una expresión de su voluntad, sino un interés reconocido por la ley, que protege al trabajador y le garantiza condiciones dignas.
          div(titulo="Teoría mixta")
            p.mb-0 La teoría mixta intenta combinar las dos teorías anteriores, afirmando que el derecho subjetivo incluye tanto un poder de voluntad como la protección de un interés. Según esta perspectiva, el derecho le otorga a una persona la capacidad de tomar decisiones y, al mismo tiempo, protege sus intereses en la sociedad.
              br
              br
              |Así, un propietario que alquila su vivienda tiene el derecho de cobrar una renta (que es su interés económico) y al mismo tiempo tiene la libertad de decidir si desea alquilarla o no (voluntad). Esta teoría busca equilibrar el aspecto individual del derecho (la voluntad de cada persona) con el bien social (el interés).
    #t_3_3.titulo-segundo(data-aos='fade-right')
      h2 #[span 3.4] Clasificación de los derechos subjetivos
    p.mb-4 El derecho subjetivo puede clasificarse en varias categorías, dependiendo del tipo de derecho y su naturaleza. A continuación, se presentan las principales clasificaciones:
    .mn.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Derechos individuales
            p Son los derechos personales de cada individuo, como el derecho a la vida, la libertad y la integridad física. Estos derechos son inalienables (no pueden transferirse ni venderse) y son fundamentales para la dignidad y desarrollo de cada persona. Un ejemplo de este tipo de derecho es el derecho a la libertad que es un derecho individual. Significa que una persona no puede ser detenida sin una causa legal y sin la debida autorización judicial. Este derecho garantiza que las personas puedan vivir libremente sin miedo a ser privadas de su libertad injustamente.
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/34.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Derechos familiares
            p Son aquellos que surgen de las relaciones dentro de la familia, como el matrimonio, la patria potestad y la obligación de alimentos. Estos derechos protegen y regulan los vínculos familiares y buscan garantizar el bienestar de los integrantes de la familia. Por ello, un padre tiene el deber de proporcionar alimento y educación a sus hijos. Este es un derecho familiar que garantiza que los menores reciban el apoyo necesario para su desarrollo.
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Derechos patrimoniales
            p Son los que están relacionados con el patrimonio o bienes materiales de una persona. Estos derechos tienen un valor económico y pueden transferirse a otras personas, como el derecho de propiedad o el derecho de crédito.
            .row.justify-content-center.align-items-center( data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Derechos reales. Son aquellos que confieren a su titular el poder directo sobre una cosa. Ejemplo: el derecho de propiedad sobre una casa permite que el dueño use, venda o arriende la propiedad.
            .row.justify-content-center.align-items-center( data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Derechos personales o de crédito. Estos derechos le permiten a una persona exigir de otra una determinada prestación. Ejemplo: si alguien pide un préstamo, el prestamista tiene el derecho de exigir que el prestatario devuelva el dinero.
        .row.p-5
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
          .col-lg-7
            h4 Derechos políticos
            p Son los que permiten a los ciudadanos participar en la vida pública y en la toma de decisiones del Estado. Estos derechos incluyen el derecho al voto, el derecho a ser elegido y el derecho a expresar opiniones sobre asuntos de interés público. Por ejemplo, el derecho al sufragio (votar) es un derecho político que permite a los ciudadanos elegir a sus representantes. Este derecho garantiza la participación en la democracia y permite que cada ciudadano tenga voz en las decisiones que afectan a la sociedad.
    #t_3_4.titulo-segundo(data-aos='fade-right')
      h2 #[span 3.4] Derechos absolutos y relativos
    p.mb-4 Finalmente, el derecho subjetivo se clasifica también en derechos absolutos y relativos, según el tipo de sujeto pasivo:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/37.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Derechos absolutos 
            p.mb-0.text-center Son aquellos que deben ser respetados por todas las personas. Ejemplo: el derecho a la vida es un derecho absoluto que nadie puede violar. 
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/38.png" alt="")
          .custom-image-card__text.p-4
            h4.mb-2.text-center Derechos relativos
            p.mb-0.text-center Solo afectan a una persona o grupo específico. Ejemplo: el derecho de un arrendador a recibir la renta del inquilino es un derecho relativo, ya que solo obliga al arrendatario y no a todas las personas en general.
    .p-4(data-aos="fade-left" style="background-color: #fbf8e2").mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/39.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El derecho objetivo y el derecho subjetivo, son esenciales para comprender cómo funciona el sistema jurídico en la vida cotidiana. Mientras que el derecho objetivo establece normas generales para todos, el derecho subjetivo da a cada persona derechos específicos que puede ejercer y reclamar. Entender estas categorías y su funcionamiento permite comprender el equilibrio entre el orden social y los derechos individuales, proporcionando las bases para la convivencia y la justicia en sociedad. 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/115331?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col" target="_blank" rel="noopener noreferrer") Vidal B. (2015) Protección jurisdiccional de los derechos fundamentales. Editorial: Difusora Larousse - Editorial Tecnos 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/gOWxh6fIYmI?si=2QbGq9l9t5F2C9-k" target="_blank" rel="noopener noreferrer") Recursos educativos virtuales (20 de junio de 2020) Curso Promotores Legales Comunitarios "PLC" / Hábeas corpus y temas afines
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
