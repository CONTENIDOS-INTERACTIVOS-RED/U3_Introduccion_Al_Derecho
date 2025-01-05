<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'2. Derecho sustantivo y derecho adjetivo'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .mb-5(data-aos="fade-up" style="background-color: #efeadd ")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Desde el punto de vista de las relaciones que regula, el derecho puede dividirse en dos grandes clases: el derecho sustantivo y el derecho adjetivo. Esta clasificación permite entender mejor cómo funcionan las normas en la vida cotidiana y en el sistema legal, ayudando a cada persona a comprender tanto el contenido de las leyes, como los procedimientos necesarios para aplicarlas.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/10.png', alt='')
    #t_2_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.1] Derecho sustantivo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/11.png', alt='', style="width: 100%;")
      .col-lg
        .ps-4.pe-5
          p(data-aos="fade-up") El derecho sustantivo constituye el pilar fundamental del sistema jurídico, definiendo los derechos y obligaciones que rigen la convivencia en sociedad. A continuación, el PDF Derecho sustantivo ofrece una visión integral de su alcance, desde las relaciones con el Estado y la sociedad hasta las interacciones entre particulares. A través de sus distintas ramas, el derecho sustantivo garantiza un marco normativo que promueve la justicia, protege los derechos individuales y asegura un orden social estable, permitiendo así una comprensión profunda de su relevancia en la vida cotidiana.
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Derecho sustantivo.
    p.mb-4 El #[b derecho sustantivo], al abarcar los principios que regulan la vida en sociedad, se divide en tres ramas esenciales: el derecho público, el derecho social y el derecho privado. Cada una de estas ramas cumple una función específica y aborda distintos tipos de relaciones entre las personas, el Estado y la sociedad. Estas divisiones permiten organizar el sistema jurídico de manera efectiva, asegurando que se puedan abordar tanto los intereses colectivos como individuales.
    .p-5.mn.mb-5(style="background-color: #e5f0f6")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-lg-0.mb-3
          h4 A) Derecho público
          p.mb-0 El derecho público regula las relaciones entre el Estado y los individuos, así como la estructura y funcionamiento del propio Estado. Su propósito principal es asegurar el orden y el bienestar común, pues se enfoca en el bien colectivo y en el control del ejercicio del poder por parte de las instituciones gubernamentales. 
        .col-lg-4.col-7: img(src='@/assets/curso/temas/12.png', alt='')
    p.mb-4 Dentro de esta rama encontramos subramas importantes que cumplen funciones específicas en la regulación de los asuntos públicos:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Derecho constitucional")
            p.mb-0 Este es el núcleo del derecho público, dado que establece los principios y normas fundamentales que definen la organización y estructura del Estado. El derecho constitucional regula aspectos esenciales como la división de poderes, los derechos y deberes de los ciudadanos, y las garantías individuales. Además, es la fuente de los derechos fundamentales y determina cómo deben protegerse frente al poder estatal, buscando siempre el respeto de la dignidad humana y la libertad individual.
          div(titulo="Derecho administrativo")
            p.mb-0 Esta subrama se ocupa de la organización y funcionamiento de las entidades públicas y de su relación con los ciudadanos. El derecho administrativo regula la actividad administrativa del Estado y abarca temas como la prestación de servicios públicos, el funcionamiento de las instituciones y el manejo de los recursos públicos. Asimismo, establece mecanismos de control sobre los actos de la administración pública, permitiendo que los ciudadanos puedan recurrir a procedimientos específicos cuando se ven afectados por decisiones injustas de las entidades gubernamentales.
          div(titulo="Derecho penal")
            p.mb-0 Regula las conductas que son consideradas delitos y establece las sanciones correspondientes. A través del derecho penal, el Estado protege el orden social y la seguridad, estableciendo un marco legal que tipifica las conductas delictivas y fija las penas para quienes las cometen. Este tipo de derecho se basa en el principio de legalidad, que garantiza que ninguna persona puede ser castigada por una conducta que no esté previamente definida como delito en la ley.
          div(titulo="Derecho internacional público")
            p.mb-0 Esta subrama abarca las normas y principios que regulan las relaciones entre los Estados y otras entidades de derecho internacional, como las organizaciones internacionales. El derecho internacional público busca promover la cooperación y la paz entre naciones, regulando temas como los tratados internacionales, los derechos humanos y las normas de guerra.
    .p-5.mn.mb-5(style="background-color: #e5f0f6")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-lg-0.mb-3
          h4 B) Derecho social
          p.mb-0 El derecho social responde a la necesidad de equilibrar las desigualdades en la sociedad y proteger los derechos de los sectores más vulnerables. Su propósito es asegurar la justicia social, al establecer normas que protejan los derechos de los trabajadores, los campesinos y otros grupos que, históricamente, han estado en desventaja. Las subramas más importantes del derecho social son:
        .col-lg-4.col-7: img(src='@/assets/curso/temas/14.png', alt='')
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3.bg-white(titulo="Derecho laboral" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Derecho laboral
            p Regula las relaciones entre empleadores y trabajadores, y establece las condiciones de trabajo para proteger los derechos de estos últimos. A través del derecho laboral, se garantizan derechos como el salario mínimo, la jornada laboral, el descanso, las vacaciones y la seguridad en el trabajo. Su objetivo es evitar el abuso en las relaciones laborales y asegurar condiciones dignas para los trabajadores.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/16.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3.bg-white(titulo="Derecho de la seguridad social" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Derecho de la seguridad social
            p Este derecho protege a las personas en situaciones de necesidad, como enfermedad, invalidez, desempleo y vejez, asegurando que tengan acceso a recursos y servicios de apoyo. La seguridad social es un derecho fundamental y tiene como objetivo ofrecer protección económica y de salud a quienes no pueden sostenerse por sí mismos debido a situaciones específicas.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/17.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3.bg-white(titulo="Derecho agrario" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Derecho agrario
            p Regula las relaciones en el ámbito rural, especialmente entre los dueños de tierras y los campesinos. Este derecho busca asegurar el acceso a la tierra, la equidad en el uso de los recursos naturales y la protección de los derechos de las comunidades rurales. A través del derecho agrario, se promueve la seguridad alimentaria, la sostenibilidad del medio ambiente y el desarrollo de las zonas rurales.
        
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/18.png', alt='')
    .p-5.mn.mb-5(style="background-color: #e5f0f6")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-lg-0.mb-3
          h4 C) Derecho privado
          p.mb-0 El derecho privado regula las relaciones entre personas que actúan en su carácter individual, sin la intervención del Estado como autoridad. A diferencia del derecho público, el derecho privado opera sobre la base de la igualdad entre las partes, garantizando que los derechos individuales se respeten en sus relaciones personales y comerciales. Las subramas más destacadas del derecho privado incluyen:
        .col-lg-4.col-7: img(src='@/assets/curso/temas/19.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/20.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Derecho civil")
            p.mb-0 Es la base del derecho privado y regula aspectos fundamentales de la vida de las personas, como las relaciones familiares, los derechos sobre los bienes y las obligaciones contractuales. El derecho civil abarca temas como el matrimonio, el divorcio, la herencia, la propiedad y los contratos. Su propósito es garantizar la seguridad jurídica en las relaciones privadas y permitir que las personas organicen su vida personal y patrimonial con base en normas claras.
          div(titulo="Derecho comercial")
            p.mb-0 Regula las relaciones comerciales y empresariales, estableciendo las reglas que rigen el comercio y los negocios. En el derecho comercial, se abordan temas como los contratos mercantiles, las sociedades, las quiebras y las transacciones internacionales. Esta subrama permite que las actividades comerciales se desarrollen en un marco legal que fomente la transparencia, la competencia justa y la seguridad en los negocios.
          div(titulo="Derecho internacional privado")
            p.mb-0 Esta subrama regula las relaciones jurídicas que involucran elementos internacionales, como los conflictos de leyes entre distintos países y la nacionalidad de las personas. El derecho internacional privado busca resolver problemas que surgen cuando las relaciones privadas trascienden las fronteras, como los matrimonios entre personas de distintas nacionalidades o los contratos comerciales internacionales. Su propósito es establecer reglas que permitan armonizar los sistemas legales de diferentes países en el ámbito de las relaciones privadas.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 El derecho sustantivo y sus ramas, representan la columna vertebral del sistema jurídico, asegurando que todas las facetas de la vida en sociedad estén cubiertas por un marco legal adecuado. Al dividirse en derecho público, derecho social y derecho privado, permite que cada aspecto de la vida humana –ya sea en relación con el Estado, en contextos laborales o en las relaciones personales y comerciales– esté regulado por normas claras que promuevan el respeto, la justicia y la seguridad. Este ordenamiento es esencial para mantener el equilibrio entre el bien común y los derechos individuales, garantizando así una convivencia social justa y organizada.  
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/21.png', alt='')
    #t_2_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.2] Derecho adjetivo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/22.png', alt='', style="width: 100%;")
      .col-lg
        .ps-4.pe-5
          p(data-aos="fade-up") El derecho adjetivo, conocido también como derecho procesal, constituye el marco que garantiza la aplicación efectiva de los derechos y obligaciones establecidos por el derecho sustantivo. A continuación, el PDF Derecho adjetivo  profundiza en su importancia como herramienta esencial del sistema jurídico, al definir los procedimientos necesarios para resolver conflictos de manera justa y ordenada. A través de sus diferentes ramas, el derecho adjetivo asegura un acceso transparente y equitativo a la justicia, convirtiéndose en un pilar indispensable para la protección de los derechos en la vida cotidiana.
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Derecho adjetivo.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/114292?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col" target="_blank" rel="noopener noreferrer") Pérez A (2013) Los derechos fundamentales. Editorial: Difusora Larousse - Editorial Tecnos 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/hBZGWlxVUt4?si=mYEoqRNEaDlPqXIx" target="_blank" rel="noopener noreferrer") Universidad abierta de recoleta (20 de diciembre de 2019) ¿Qué son los derechos fundamentales?
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
