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
    ['adages', {
      page: '/_adages',
      permalink: ':slug'
    }],
    ['code', {
      // page: '/_code', // unused.
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://alidlo.com'
      : 'http://localhost:4444'
  }
}
