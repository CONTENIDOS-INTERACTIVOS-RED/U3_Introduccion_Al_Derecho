<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'4. Derecho escrito y derecho no escrito'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5
    .mb-5(data-aos="fade-up" style="background-color: #efeadd ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") La clasificación del derecho en "derecho escrito" y "derecho no escrito", permite entender cómo las normas jurídicas pueden presentarse de formas diversas. Esta distinción responde a la manera en que las reglas de conducta se transmiten y aplican dentro de una sociedad, y también ayuda a comprender los orígenes y la evolución del derecho en la historia.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/40.png', alt='')
    #t_4_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 4.1] Derecho no escrito     
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right").order-2: img(src='@/assets/curso/temas/41.png', alt='')
      .col-lg-8(data-aos="fade-left")
          .p-4(data-aos="fade-left" style="background-color: #eef0f3").mb-4
            .row
              .col-lg-auto
                img(src="@/assets/curso/temas/42.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0  El derecho no escrito, como su nombre indica, es el conjunto de normas y principios que se desarrollan y mantienen vigentes sin estar registrados formalmente en un documento escrito. Este tipo de derecho surge de la tradición, los usos y costumbres de una comunidad, y es especialmente relevante en aquellos momentos históricos o culturas donde la escritura no estaba ampliamente difundida. A pesar de no estar consignado en textos, el derecho no escrito cumple una función jurídica muy importante, porque regula conductas y ayuda a resolver conflictos dentro de la sociedad. 
    p.mb-4 Algunos ejemplos importantes de derecho no escrito incluyen:
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Costumbres y usos sociales" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Costumbres y usos sociales
            p Muchas comunidades, especialmente en épocas antiguas o en sociedades tradicionales, se rigen por normas basadas en las costumbres, que todos conocen y respetan por tradición. En ciertos casos, como en el derecho internacional o comercial, algunas costumbres tienen gran relevancia y son consideradas fuente de derecho.
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/43.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principios generales del derecho" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Principios generales del derecho
            p Estos principios son valores universales, como la buena fe y el enriquecimiento sin causa, que aunque no siempre están escritos, son reconocidos y aplicados por los tribunales para llenar vacíos en la legislación o interpretar normas existentes. Por ejemplo, en Colombia, los principios como la buena fe, son fundamentales en los contratos y relaciones entre personas.
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/44.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ejemplo de la Ley del Talión" :icon="require('@/assets/curso/temas/15.svg')" )
        .row
          .col-md-6.col-lg-7.mb-4.mb-md-0.order-2
            h4 Ejemplo de la Ley del Talión
            p La antigua Ley del Talión es un claro ejemplo de derecho no escrito, una norma que establecía una relación de “justicia directa” al castigar a una persona con un daño similar al que había causado: “ojo por ojo, diente por diente.” Esta ley, aunque en la mayoría de los casos no se escribía, se transmitía de generación en generación y representaba un valor de justicia para las comunidades.
          .col-md-6.col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/45.png', alt='')
    .p-4(data-aos="fade-left" style="background-color: #fbf8e2").mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/46.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En la actualidad, aunque el derecho no escrito ha perdido peso en los sistemas jurídicos formales, aún se aplica en el derecho internacional, en el derecho consuetudinario y en algunos casos específicos dentro del derecho colombiano, particularmente en el ámbito del derecho comercial y en comunidades que conservan tradiciones propias. 
    #t_4_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 4.2] Derecho escrito
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/47.png', alt='', style="width: 100%;")
      .col-lg
        .ps-4.pe-5
          p(data-aos="fade-up") El derecho escrito constituye una de las bases fundamentales del sistema jurídico moderno, al estar compuesto por normas oficiales promulgadas por autoridades competentes y plasmadas en documentos formales. A continuación, el PDF Derecho escrito, analiza su importancia histórica y práctica, desde los primeros códigos legales, como el Código de Hammurabi y la Ley de las Doce Tablas, hasta su evolución en Colombia con el Código Civil y la Constitución de 1991. A través de esta perspectiva, se destaca cómo el derecho escrito garantiza claridad, accesibilidad y seguridad jurídica en la regulación de la vida en sociedad.
          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Derecho escrito.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        h3 Convivencia entre derecho escrito y derecho no escrito
        p.mb-0 Aunque el derecho escrito es predominante en la mayoría de los sistemas jurídicos actuales, el derecho no escrito aún mantiene su relevancia en algunos campos, complementando al derecho escrito en situaciones donde no existe una regulación específica. Por ejemplo, en casos complejos donde la ley escrita no es suficiente, los jueces pueden recurrir a principios generales del derecho o a la costumbre para tomar decisiones justas. Esto permite una mayor flexibilidad y adaptación del sistema jurídico a situaciones cambiantes y a la diversidad cultural de los ciudadanos.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/48.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El Derecho Internacional Público regula las relaciones entre los Estados y organizaciones internacionales',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'El Derecho Social busca la justicia social y protege a grupos en desventaja, como los trabajadores.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El Derecho Laboral es una subrama del Derecho Social que regula las relaciones laborales.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El Derecho Civil regula exclusivamente relaciones comerciales e internacionales.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'El Derecho Comercial es una subrama del Derecho Privado que abarca contratos mercantiles y sociedades.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
