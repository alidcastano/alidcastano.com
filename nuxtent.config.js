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
    ['projects', {
      page: '/projects/_project',
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://alidlo.com'
      : 'http://localhost:4444'
  }
}
