# Miguel Alonso Marroquin
### @malbonm07

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Description:

After a while of learning Vue creating some pages, I decided to create my personal portfolio to demostrate my skills with Vue framework and practice with new tools. During the development of the page I had some problems such as the performnace, how to use and implement small libreries, and improve the interface design. And reading I resolve many of the problems, to improve the perfomance I reduced javascript payload with [Code Splitting](https://www.youtube.com/watch?v=QH94CXVv3UE), fortunately for me Vue has a combined [Vue's async component](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) feature and webpack's code splitting feature, for image loading there is some similar [lazy loading images](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/), I implement it using a simple plugin: [v-lazy-image](https://github.com/alexjoverm/v-lazy-image). For the use of images I had to make a change, my images were uploaded directly in the repository and it is a bad practice, and looking for information I found that the best way is using a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/). Now the images are upload in [giphy](https://giphy.com/) and [imgur](https://imgur.com/), I don't have to import them in my script any more xD. There are others thing that are important to improve the perfomance and I will continue learning.

I'm still working on things like refactoring the code a bit more, creating more reusable components and testing my app with Jest but for now I am focused on finding a job where I can boost my skills through real projects.


## Important things to highlight:

- [Code Splitting](https://www.youtube.com/watch?v=QH94CXVv3UE)
- Use of single file components.
- [Lazy loading routes](https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk)
- Use and installation of plugins
- Internationalization with [Vue i18n](https://kazupon.github.io/vue-i18n/)
- [Lazy loading images](https://markus.oberlehner.net/blog/lazy-loading-responsive-images-with-vue/)
- [Custom Directives in Vue](https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html)
- [SEO for SPA](https://www.youtube.com/watch?v=Op8Q8bUAKNc) with [v-meta](https://github.com/nuxt/vue-meta)
- Responsive Design
- Css Unit px|em|rem for a responsive design
- Pure Css Layout
- Layout Design
- Mobile First
- [CDN](https://www.keycdn.com/blog/why-use-a-cdn)

## Stack

* Vue-cli

## Programings Languages, Tools and Technologies:

* Html5
* CSS - Sass
* Javascript
* [v-lazy-images](https://github.com/alexjoverm/v-lazy-image)
* [v-meta](https://github.com/nuxt/vue-meta)
* [AoS](https://michalsnik.github.io/aos/)
* [Scroll-to](https://github.com/rigor789/vue-scrollto)
* [Vue i18n](https://kazupon.github.io/vue-i18n/)
* [Font Awesome](https://fontawesome.com/icons?d=gallery)

## To Learn:

* [Lazy loading components](https://alexjover.com/blog/lazy-load-in-vue-using-webpack-s-code-splitting/)
* [Functional components](https://markus.oberlehner.net/blog/working-with-functional-vue-components/)
* [Offline first with PWA](https://medium.com/designisdead/offline-first-with-progressive-web-apps-part-1-3-102e61992567)
* [Service Working](https://docs.vuestorefront.io/guide/core-themes/service-workers.html)

---
For detailed explanation on how things work, checkout [Vue.js docs](https://vuejs.org).
@malbonm07
