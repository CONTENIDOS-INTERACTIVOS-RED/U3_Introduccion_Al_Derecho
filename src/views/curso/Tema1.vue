<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Clasificación del derecho'" :subTitulo="'1. Clasificación del derecho '")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(data-aos="fade-left" style="background-color: #efeadd").mb-4 
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La clasificación, cuyo origen etimológico proviene del latín "classis" (clase) y "facere" (hacer), se refiere al acto de organizar una variedad de elementos en grupos homogéneos que, al unirse, crean un todo coherente y ordenado. En el contexto del derecho, la clasificación permite organizar los diversos tipos de normas y principios en categorías específicas, con el fin de facilitar su comprensión y aplicación. Esta organización no solo es útil, sino esencial para el estudio y el ejercicio de la disciplina jurídica, dado que ofrece una estructura ordenada que permite analizar cada parte del derecho de manera separada y precisa.
        p.mb-0 La clasificación es una variante de la división (del latín "divisio ", que significa doble visión), concepto que hace referencia a la distribución de un conjunto en sus partes componentes. La división es una herramienta fundamental en cualquier campo del conocimiento, pues el intelecto humano, en su estado actual de desarrollo, necesita examinar por separado los diferentes elementos que componen la realidad para poder comprenderla en su totalidad. En el ámbito del derecho, la división permite desglosar el sistema jurídico en partes manejables y, de este modo, entender y aplicar cada aspecto del derecho en situaciones específicas.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/6.png', alt='')
    .mb-5(data-aos="fade-up" style="background-color: #e5f0f6 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") Además, la división y la clasificación son métodos que facilitan la memoria, puesto que al clasificar los conocimientos jurídicos, se crea una estructura lógica donde cada elemento recuerda y refuerza a los demás. Esto no solo ayuda a retener información, sino que también permite a los estudiantes y profesionales del derecho desarrollar un conocimiento ordenado y sistemático de la materia, incrementando su capacidad para analizar y aplicar el derecho con precisión.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/7.png', alt='')
    p.mb-4 Para obtener un entendimiento riguroso del derecho, es necesario establecer una clasificación que siga criterios científicos y lógicos sólidos. Estos criterios permiten construir una estructura clara y precisa, facilitando así el estudio del derecho y proporcionando una guía confiable para su práctica. La clasificación del derecho excluye, en este caso, el derecho canónico, un conjunto normativo de naturaleza particular, que no pertenece al ámbito del derecho estatal.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 A partir de esta base, se propone clasificar el derecho en varias categorías que incluyen, entre otras, el derecho sustantivo y adjetivo, el derecho objetivo y subjetivo, y el derecho escrito y no escrito. 
        .p-4(data-aos="fade-left" style="background-color: #E5F0F6").mb-4 
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cada una de estas clasificaciones, permitirá a los estudiantes desentrañar las funciones específicas de las normas jurídicas y su importancia dentro del sistema general de derecho, contribuyendo así a una comprensión más profunda y ordenada del conocimiento jurídico .
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/9.png', alt='')

    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
