module.exports = {
  content: [
    'now',
    ['articles', {
      page: '/_article',
      permalink: ':slug'
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
