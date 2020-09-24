module.exports = {
  content: [
    'now',
    ['essays', {
      page: '/_essay',
      permalink: ':slug'
    }],
    ['poems', {
      page: '/_poem',
      permalink: 'p/:slug'
    }],
    ['code', {
      // page: '/_code', // unused.
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://alidcastano-blog.herokuapp.com'
      : 'http://localhost:9999'
  }
}
