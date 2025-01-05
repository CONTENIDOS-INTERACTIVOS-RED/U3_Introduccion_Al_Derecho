<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'SÍNTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 3 "Clasificación del derecho", introduce a los estudiantes en los fundamentos esenciales para comprender las diversas categorías que estructuran el sistema jurídico. Esta unidad explora las clasificaciones del derecho sustantivo y adjetivo, objetivo y subjetivo, así como el derecho escrito y no escrito, proporcionando un marco integral para analizar y aplicar las normas jurídicas. Este enfoque asegura una sólida comprensión de las bases del derecho, permitiendo a los estudiantes desarrollar habilidades críticas para interpretar, aplicar y transformar las normas en un contexto justo y organizado.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/temas/sintesis.svg', alt='')

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
