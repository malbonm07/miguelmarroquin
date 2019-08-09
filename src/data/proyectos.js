const proyectos = [
    {
        img: "https://media.giphy.com/media/W2QJOFzWyh1Mg2BtFS/giphy.gif",
        titulo: 'vue music SPA con quasar',
        link: '/portfolio/quasar-music-app',
        linkGithub: 'https://github.com/malbonm07/quasar-music-app',
        linkSitio: 'https://malbonm07.github.io/vue-quasar-spa/#/',
        skills: [
            'VueJS',
            'Vue-router',
            'Bootstrap',
            'Javascript linting: Eslint',
            'Rest API with AXIOS',
            'Event-bus (plugin)',
            'Vue i18n',
            'localStorage',
        ],
        details: `Para retar mis habilidades decidí poner en práctica todo lo aprendido, es por eso que creé una Single Page Aplication (SPA) de música que consume los servicios de spotify a traves de una API que utilicé en el curso de VueJS de Platzi. Agregué una funcionalidad que permite seleccionar y guardar las canciones en un ruta diferente llamada "favoritos" y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. 
        Una vez en favoritos las canciones se pueden escuchar o eliminar si se desea. Para diseñar la app utilicé Quasar Framework ya que creo que era un buen momento para practicar con algún framework con componentes UI.`,
        herramientas: ['html', 'css', 'sass', 'BEM Arquitecture', 'javascript', 'quasar framework', 'vue', 'vue router' ]

    },
    {
        img: "https://media.giphy.com/media/LkrWAlScM5owLtU2NX/giphy.gif",
        titulo: 'landing page con vuetify',
        link: '/portfolio/vuetify-landing',
        linkGithub: 'https://github.com/malbonm07/nuxt-landing-template',
        linkSitio: 'https://malbonm07.github.io/nuxt-landing-template/',
        skills: [
            'Vuetify Material Design',
            'VueJS',
            'Vue router',
            'Sass',
            'Css Grid',
            'Css Flexbox',
            'Maquetación y diseño Web',
        ],
        details: `Para poner en práctica el concepto de Material Design decidí crear una pagina utilizando Vuetify. Aprendí a utilizar algunos de sus componentes y a maquetar en sistema 'grid', el sistema es parecido al que usa Bootstrap. De esta manera pude ordenar el layout de los componentes y para darle animación utilicé Animation on Scroll (AOS). Para los íconos instale Font Awesome vía npm. La pagina está subida en gh-pages de Github.`,
        herramientas: ['html', 'sass', 'vue', 'vuetify', 'flexbox', 'nuxt', 'javascript']

    },
    {
        img: "https://media.giphy.com/media/MdvP37QPFGWemUnIcV/giphy.gif",
        titulo: 'escuela digital con nuxt',
        link: '/portfolio/nuxt-school-page',
        linkGithub: 'https://github.com/malbonm07/landing-school',
        linkSitio: 'https://malbonm07.github.io/landing-school/',
        skills: [
            'Nuxt',
            'Sass',
            'Css Flexbox',
            'Css Grid',
            'Vue Components',
        ],
        details: `Para mejorar mi dominio en Css me propuse como reto reproducir una pagina web enfocada en la enseñanza artistica. Decidí hacerla totalmente responsive e imitar los componentes utilizando Vue. Para el swiper instalé vue-awesome-swiper . Los otros componentes como los Expansion panels y Tabs los desarrollé con Vue y Sass.`,
        herramientas: ['Html', 'Sass', 'Nuxt', 'Vue', 'Javascript', 'BEM']
    },
    {
        img: 'https://i.imgur.com/0fRIGOl.png',
        titulo: 'blog con vuetify',
        link: '/portfolio/vuetify-blog',
        linkGithub: 'https://github.com/malbonm07/nuxt-blog-template',
        linkSitio: 'https://malbonm07.github.io/nuxt-blog-template/',
        skills: [
            'Vuetify',
            'Sass',
            'Css Grid',
        ],
        details: `Este es un blog desarrollado con Vuetify Framework que se basa en los principios de Material Design, es completamente responsive. Está subida en gh-pages.`,
        herramientas: ['html', 'sass', 'vuetify', 'nuxt', 'vue', 'vue router']
    },
    {
        img: 'https://i.imgur.com/v5i4Qi7.png',
        titulo: 'calculadora vueJS',
        link: '/portfolio/vue-calculator',
        linkGithub: 'https://github.com/malbonm07/vue-calculator',
        linkSitio: 'https://malbonm07.github.io/v-calculator/',
        skills: [
            'VueJS',
            'Props and directives',
            'V-model',
            'V-bind',
        ],
        details: `Este es uno de los proyectos que realicé para obtener mi certificado Front End en Freecodecamp. Para maquetar el diseño utilicé Css Grid Flexbox, la estructura lo hice con HTML.
        Para desarrollar la app utilicé Vue. Con todo listo puse en práctica mi lógica en programación.`,
        herramientas: ['html', 'sass', 'flexbox', 'grid', 'javascript']
    },
    {
        img: 'https://i.imgur.com/OQjIpeW.png',
        titulo: 'shop cart VueJS',
        link: '/portfolio/vue-shop-cart',
        linkGithub: 'https://github.com/malbonm07/vue-shopping-cart',
        linkSitio: 'https://malbonm07.github.io/v-shoppingcart/',
        skills: [
            'VueJS',
            'Vue Components',
            'Props, directives, methods',
            'Css grid, Sass',
            'localStorage'
        ],
        details: `Uno de mis primeros proyectos, en este caso tuve como reto la lógica para programar una SPA carrito de compra basico, para crear las funcionalidades como seleccionar, comprar y limpiar la lista de items utilicé Vue. Uno de los problemas que tuve que resolver era la perdida de datos al momento de refrescar la página, y buscando información decidí optar por la propiedad LocalStorage de HTML. Con ello pude guardar todos los datos y evitar la perdida de los mismos.`,
        herramientas: ['html', 'sass', 'vue', 'javascript']
    },
    {
        img: 'https://i.imgur.com/J0Rywzi.png',
        titulo: 'pokedex con vuetify',
        link: '/portfolio/pokedex',
        linkGithub: 'https://github.com/malbonm07/pokemon',
        linkSitio: 'https://malbonm07.github.io/v-pokemon/',
        skills: [
            'VueJS',
            'Vuetify',
            'UI Components',
            'Vue router',
            'Rest API with AXIOS'

        ],
        details: `En esta pequeña app puse a prueba mi conocimiento en el consumo de Rest API haciendo uso de la librería AXIOS. Para el diseño utilicé por primera vez Vuetify que viene con UI Componentes y para los datos utilicé PokéAPI.`,
        herramientas: ['html', 'sass', 'vue', 'vuetify', 'Axios', 'vue router']
    },
    {
        img: 'https://i.imgur.com/nC1JW8W.png',
        titulo: 'todo list con vueJS',
        link: '/portfolio/todo-list',
        linkGithub: 'https://github.com/malbonm07/v-todolist',
        linkSitio: 'https://malbonm07.github.io/v-todolist/',
        skills: [
            'VueJS',
            'Props, directives, methods',
            'Computed properties',
            'Watch property',
            'Event handling, Conditional',
        ],
        details: `Mi primera app desarrollada con VueJS aquí puse en práctica algunos conocimientos del Framework para tratar de entender mejor el core, la comunicación entre componentes a traves de props y custom events, el manejo básico del state, condicionales, mapeo de arrays a Elementos con v-for. La app tiene funcionalidades para agregar, editar y eliminar datos, también se puede filtrar las tareas activas o completas.`,
        herramientas: ['html', 'css', 'vue', 'javascript']
    },
]

export default proyectos;