module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ar-products',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  env: {
    cockpit: {
      apiUrl: 'https://www.iotrain.com/cockpit/api',
      apiToken: 'c1448bf786ee9d534d23bf2d0f1ffc',
      baseUrl: 'https://www.iotrain.com/cockpit'
    }
  }
}
