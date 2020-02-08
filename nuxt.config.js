const axios = require('axios')
// const feedUrl = process.env.NODE_ENV === 'production'
//       ? 'https://alidlo.com'
//       : 'http://localhost:4444'

async function create (feed) {
  feed.options = {
    title: 'My blog',
    link: 'https://lichter.io/feed.xml',
    description: 'This is my personal feed!'
  }

  const posts = await (axios.get('https://blog-api.lichter.io/posts')).data
  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content
    })
  })

  // feed.addCategory('Nuxt.js')

  feed.addContributor({
    name: 'Alexander Lichter',
    email: 'example@lichter.io',
    link: 'https://lichter.io/'
  })
}

module.exports = {
  head: {
    title: 'Alid Castano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxtent',
    // ['@nuxtjs/feed'],
    ['@nuxtjs/google-analytics', { ua: 'UA-80644113-1' }]
  ],
  // feed: [
  //   {
  //     path: '/feed.xml',
  //     create,
  //     cacheTime: 1000 * 60 * 15,
  //     type: 'rss2',
  //     data: []
  //   }
  // ],
  css: [
    { src: '~assets/sass/global.sass', lang: 'sass' }
  ],
  loading: false
}
