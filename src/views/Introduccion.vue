<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color: #fcfaeb ")
          p En el vasto mundo del derecho, la clasificación de sus distintas ramas y conceptos es una de las primeras herramientas que el estudiante debe dominar para adquirir una comprensión sólida de su estructura y su función en la sociedad.
          p Esta unidad, denominada Clasificación del derecho, se centra en los principios fundamentales que dividen y organizan el derecho, permitiendo que cada uno de sus componentes cumpla un papel específico en la construcción de justicia y orden, en la vida en comunidad. 
          p Lejos de ser una simple agrupación de términos y categorías, esta clasificación busca darle al estudiante una brújula para orientarse en el extenso y, a veces, complicado territorio del sistema jurídico.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.png', alt='')
    p.mb-4 A lo largo de esta unidad, el estudiante explorará las principales clasificaciones que rigen el derecho y que determinan cómo se aplican sus principios en diferentes contextos. Desde las distinciones esenciales entre el derecho sustantivo y el derecho adjetivo, hasta las diferencias entre el derecho objetivo y el derecho subjetivo, y el derecho escrito y no escrito, cada uno de estos temas permite comprender cómo el derecho organiza sus normas para que puedan aplicarse de manera justa y coherente.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
          .p-4(data-aos="fade-left" style="background-color: #eef0f3").mb-4
            .row
              .col-lg-auto
                img(src="@/assets/curso/temas/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Adentrarse en la clasificación del derecho es, para el estudiante, una oportunidad de adquirir una visión global y estructurada que le permitirá entender cómo el sistema jurídico se organiza para responder a la realidad social. Este proceso, más que una mera acumulación de conocimientos teóricos, representa el inicio de la construcción de un criterio jurídico firme, necesario para interpretar, aplicar y, eventualmente, transformar las normas con un sentido de justicia y responsabilidad. 
          p(data-aos="fade-left") A medida que el estudiante avance con esta unidad, entenderá que cada una de estas clasificaciones es una herramienta de análisis que se convierte en la base para resolver conflictos legales, asesorar con precisión y aplicar las normas con pleno conocimiento de su origen y propósito. La capacidad de distinguir entre el derecho sustantivo y adjetivo, entre el derecho objetivo y subjetivo, o entre el derecho escrito y no escrito, será esencial no solo para interpretar correctamente las leyes, sino para entender el impacto de esas leyes en la vida de las personas y de la sociedad en su conjunto.
    .p-4(data-aos="fade-left" style="background-color: #e5f0f6")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/4.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Con esta unidad, el estudiante da sus primeros pasos en la construcción de su propia perspectiva crítica y fundamentada sobre el derecho, una habilidad indispensable para cualquier profesional que aspire a ejercer con ética, eficiencia y claridad, en el complejo y desafiante campo de la justicia.
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
