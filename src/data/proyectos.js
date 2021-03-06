const proyectos = [
    {
        img: 'https://i.imgur.com/cJneS36.png',
        id: 'hadas',
        titulo: 'HADAS',
        link: '/portfolio/hadas',
        linkGithub: '',
        linkSitio: 'https://www.hadas.pe/',
        skills: [
            'Nuxt',
            'Vue',
            'CSS',
            'HTML5',
            'JavaScript',
        ],
        details: `Startup dedicated to cleaning services in houses, apartament and offices.`,
        herramientas: ['Nuxt', 'VueJS', 'html5', 'CSS', 'javascript']
    },
    {
        img: 'https://i.imgur.com/jHeCJVv.png',
        id: 'fixbrand',
        titulo: 'FIXBRAND',
        link: '/portfolio/fixbrand',
        linkGithub: 'http://fixbrand.com/',
        linkSitio: 'http://fixbrand.com/',
        skills: [
            'JQuery',
            'CSS',
            'HTML5',
            'JavaScript',
            'Ajax'
        ],
        details: `A manageable website with animations between pages. My job was to layout and perform 3 different types of CRUD (portfolio, clients, contacts) in the front-end.`,
        herramientas: ['html', 'jquery', 'css flexbox', 'javascript', 'bootstrap']
    },
    {
        img: 'https://i.imgur.com/ajen1ED.png',
        id: 'glorieta',
        titulo: 'La Glorieta',
        link: '/portfolio/glorieta',
        linkGithub: 'http://cmsreservas.noveltie.la/',
        linkSitio: 'http://cmsreservas.noveltie.la/',
        skills: [
            'Css Flexbox',
            'JQuery',
            'DOM Manipulation',
            'Shopping cart',
            'Development of item catalog, pagination and custom search',
            'Implement complex DOM calculations and updates',
            'OOP'

        ],
        details: `A website that allows its customers to make online reservations, in addition to displaying information about it, their news and contact information.`,
        herramientas: ['html', 'css flexbox', 'jquery']
    },
    {
        img: 'https://i.imgur.com/beqN3ue.png',
        id: 'social',
        titulo: 'social application',
        link: '/portfolio/social-app',
        linkGithub: 'https://github.com/malbonm07/social-app',
        linkSitio: 'https://github.com/malbonm07/social-app',
        skills: [
            'VueJS',
            'Vuetify',
            'UI Components',
            'Vue router',
            'Rest API with AXIOS',
            'Vuex'

        ],
        details: `Una SPA con caracteristicas de una red social, creado con Vue, Vuex, Firebase, Express. Este proyecto cubre cosas como integración/consumo de una REST Api server construido con Node js y express, registro, login y autenticación, upload de imagenes, notificaciones y más.`,
        herramientas: ['html', 'sass', 'vue', 'vuex', 'vuetify', 'Axios', 'vue router']
    },
    // {
    //     img: "https://media.giphy.com/media/W2QJOFzWyh1Mg2BtFS/giphy.gif",
    //     id: 'musicapp',
    //     titulo: 'vue music SPA - quasar',
    //     link: '/portfolio/quasar-music-app',
    //     linkGithub: 'https://github.com/malbonm07/quasar-music-app',
    //     linkSitio: 'https://malbonm07.github.io/vue-quasar-spa/#/',
    //     skills: [
    //         'VueJS',
    //         'Vue-router',
    //         'Bootstrap',
    //         'Javascript linting: Eslint',
    //         'Rest API with AXIOS',
    //         'Event-bus (plugin)',
    //         'Vue i18n',
    //         'localStorage',
    //     ],
    //     details: `Para retar mis habilidades decidí poner en práctica todo lo aprendido, es por eso que creé una Single Page Aplication (SPA) de música que consume los servicios de spotify a traves de una API que utilicé en el curso de VueJS de Platzi. Agregué una funcionalidad que permite seleccionar y guardar las canciones en un ruta diferente llamada "favoritos" y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. 
    //     Una vez en favoritos las canciones se pueden escuchar o eliminar si se desea. Para diseñar la app utilicé Quasar Framework ya que creo que era un buen momento para practicar con algún framework con componentes UI.`,
    //     herramientas: ['html', 'css', 'sass', 'BEM Arquitecture', 'javascript', 'quasar framework', 'vue', 'vue router' ]

    // },
    // {
    //     img: "https://media.giphy.com/media/LkrWAlScM5owLtU2NX/giphy.gif",
    //     id:'vuetyLanding',
    //     titulo: 'landing page - vuetify',
    //     link: '/portfolio/vuetify-landing',
    //     linkGithub: 'https://github.com/malbonm07/nuxt-landing-template',
    //     linkSitio: 'https://malbonm07.github.io/nuxt-landing-template/',
    //     skills: [
    //         'Vuetify Material Design',
    //         'VueJS',
    //         'Vue router',
    //         'Sass',
    //         'Css Grid',
    //         'Css Flexbox',
    //         'Maquetación y diseño Web',
    //     ],
    //     details: `Para poner en práctica el concepto de Material Design decidí crear una pagina utilizando Vuetify. Aprendí a utilizar algunos de sus componentes y a maquetar en sistema 'grid', el sistema es parecido al que usa Bootstrap. De esta manera pude ordenar el layout de los componentes y para darle animación utilicé Animation on Scroll (AOS). Para los íconos instale Font Awesome vía npm. La pagina está subida en gh-pages de Github.`,
    //     herramientas: ['html', 'sass', 'vue', 'vuetify', 'flexbox', 'nuxt', 'javascript']

    // },
    // {
    //     img: "https://media.giphy.com/media/MdvP37QPFGWemUnIcV/giphy.gif",
    //     id: 'escuelaNuxt',
    //     titulo: 'escuela digital - Nuxt',
    //     link: '/portfolio/nuxt-school-page',
    //     linkGithub: 'https://github.com/malbonm07/landing-school',
    //     linkSitio: 'https://malbonm07.github.io/landing-school/',
    //     skills: [
    //         'Nuxt',
    //         'Sass',
    //         'Css Flexbox',
    //         'Css Grid',
    //         'Vue Components',
    //     ],
    //     details: `Para mejorar mi dominio en Css me propuse como reto reproducir una pagina web enfocada en la enseñanza artistica. Decidí hacerla totalmente responsive e imitar los componentes utilizando Vue. Para el swiper instalé vue-awesome-swiper . Los otros componentes como los Expansion panels y Tabs los desarrollé con Vue y Sass.`,
    //     herramientas: ['Html', 'Sass', 'Nuxt', 'Vue', 'Javascript', 'BEM']
    // },
    // {
    //     img: 'https://i.imgur.com/v5i4Qi7.png',
    //     id: 'calculadoraVue',
    //     titulo: 'calculadora vueJS',
    //     link: '/portfolio/vue-calculator',
    //     linkGithub: 'https://github.com/malbonm07/vue-calculator',
    //     linkSitio: 'https://malbonm07.github.io/v-calculator/',
    //     skills: [
    //         'VueJS',
    //         'Props and directives',
    //         'V-model',
    //         'V-bind',
    //     ],
    //     details: `Este es uno de los proyectos que realicé para obtener mi certificado Front End en Freecodecamp. Para maquetar el diseño utilicé Css Grid Flexbox, la estructura lo hice con HTML.
    //     Para desarrollar la app utilicé Vue. Con todo listo puse en práctica mi lógica en programación.`,
    //     herramientas: ['html', 'sass', 'flexbox', 'grid', 'javascript']
    // },
    {
        img: "https://media.giphy.com/media/fZ2bJg4HC4pB6risMw/giphy.gif",
        id: 'miguelportfolio',
        titulo: 'Portfolio',
        link: '/portfolio/personal-portfolio',
        linkGithub: 'https://github.com/malbonm07/miguelmarroquin',
        linkSitio: 'https://malbonm07.github.io',
        skills: [
            'VueJS',
            'Vue-router',
            'Javascript linting: Eslint',
            'Code splitting',
            'Lazy loading Routes',
            'Vue Lazy load images',
            'Vue i18n',
        ],
        details: `Después de practicar con Vue haciendo algunas plantillas, creando paginas web y SPA, decidí que era momento de crear un nuevo portafolio para demostrar todos mis trabajos, para ello me puse manos a la obra, empecé creando un nuevo proyecto con vue-cli, para los estilos use Sass junto a la metodología BEM, cada componente y view de cada pagina tiene su archivo .scss y todo está importado en el main.scss, me pareció una manera más ordeanada de trabajar. Empecé con mobile first design, luego tablet y desktop. Las animaciones están hechas con puro css y otras con pequeñas librerías. Las rutas y las imagenes están contruidas bajo el concepto de Lazy Loading que mejora el performance de la página.`,
        herramientas: ['html', 'css', 'sass', 'BEM Arquitecture', 'javascript', 'vue router', 'vue', 'i18n']

    },
]

export default proyectos;