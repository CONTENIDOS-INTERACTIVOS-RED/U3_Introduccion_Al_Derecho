<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color: #fcfaeb ")
          p.mb-0 En el vasto mundo del derecho, la clasificación de sus distintas ramas y conceptos es una de las primeras herramientas que el estudiante debe dominar para adquirir una comprensión sólida de su estructura y su función en la sociedad.
            br
            br
            |Esta unidad, denominada Clasificación del derecho, se centra en los principios fundamentales que dividen y organizan el derecho, permitiendo que cada uno de sus componentes cumpla un papel específico en la construcción de justicia y orden, en la vida en comunidad. 
            br
            br
            |Lejos de ser una simple agrupación de términos y categorías, esta clasificación busca darle al estudiante una brújula para orientarse en el extenso y, a veces, complicado territorio del sistema jurídico.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.png', alt='')

  
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
