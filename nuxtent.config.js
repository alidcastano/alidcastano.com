module.exports = {
  content: [
    'now',
    ['articles', {
      page: '/_entry',
      permalink: ':slug'
    }],
    ['songs', {
      page: '_song',
      permalink: 's/:slug'
    }],
    ['projects', {
      page: '/projects/_project',
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://alidcastano.com'
      : 'http://localhost:4444'
  }
}
