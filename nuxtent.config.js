module.exports = {
  content: [
    'now',
    ['essays', {
      page: '/_essay',
      permalink: ':slug'
    }],
    ['lyrics', {
      page: '/_lyric',
      permalink: 'l/:slug'
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
