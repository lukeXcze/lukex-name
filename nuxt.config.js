import bvSett from './bootstrap-cfg/bootstrap-vue_sett'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Chuchma Lukáš',
        htmlAttrs: {
            lang: 'cs'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'robots', content: 'noindex, nofollow' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Jura' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/nuxt-transition.css',
        '~/bootstrap-cfg/bootstrapStyle.scss'
    ],
    pageTransition: 'page',

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'bootstrap-vue/nuxt' // https://go.nuxtjs.dev/bootstrap
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    loadingIndicator: {
        name: 'pulse',
        color: '#fff',
        background: '#1c1183'
    },

    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        config: bvSett,
        icons: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            // sass: require('sass'),
            // scss: require('sass')
        }
    }
}
