<template lang="pug">
ContentContainer
  div.article-lead(slot="lead")
    h1.article-title {{ article.title }}
    h3(v-if="article.description").article-description {{ article.description }}

  section.article-body(slot="content" :style="overrideMargin")
    div(v-html="article.body")
    // ShareWidgets(:article="article")

  div.article-closer(slot="closer")
    img.article-image(v-if="article.image" :src="`/img/articles/${article.image}`")
    p(v-if="article.quote" v-html="article.quote").article-quote
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    article: await app.$content('/articles').get(route.path)
  }),

  head () {
    return {
      title: 'Alid Castano | ' + this.article.title,
      meta: [
        { name: 'description', hid: 'description', content: this.article.description },
        // Open Graph
        { name: 'og:title', content: this.article.title },
        { name: 'og:description', content: this.article.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: `https://alidcastano.com/${this.article.permalink}` },
        { name: 'og:image', content: `https://alidcastano.com/img/articles/${this.article.image}` },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@alidcastano' },
        { name: 'twitter:title', content: this.article.title },
        { name: 'twitter:description', content: this.article.description },
        { name: 'twitter:image', content: `https://alidcastano.com/img/articles/${this.article.image}` },
        { name: 'twitter:image:alt', content: this.article.title }
      ]
    }
  },

  computed: {
    overrideMargin () {
      if (this.article.title.length > 30) return { 'margin-left': '1rem' }
    }
  },

  components: {
    ContentContainer
    // ShareWidgets: () => import('~/components/ShareWidgets')
  }
}
</script>

<style lang="sass" scope>
@import "../assets/sass/util"

.article-lead
  margin-top: 16px
  margin-bottom: 1.25rem
  width: 100%
  @media (min-width: $bp-tablet)
    margin-bottom: 1.75rem
  .article-title
    font-size: 1.6rem
    color: #45606e
    margin: 0
    @media (min-width: $bp-tablet)
      font-size: 2.125rem
  .article-description
    font-size: 1rem
    margin-top: 4px
    color: #9fa5ad
    font-weight: normal
    font-style: italic
    @media (min-width: $bp-tablet)
      font-size: 1.125rem
.article-body
  font-family: Spectral,serif;
  hr 
    width: 90%
    margin-left: auto
    margin-right: auto
  a 
    text-decoration: underline
br 
  display: block
  content: " "
  margin-top: 4px
  
.article-closer
  margin-top: 3rem
  margin-bottom: 4rem
.article-image
  margin: .5rem auto 1rem auto
.article-quote
  margin: 0 auto
  color: #838b95
  font-style: italic
  font-size: .9rem
  @media (min-width: $bp-tablet)
    max-width: 85%
  a 
    color: #838b95
    text-decoration: underline
  span 
    display: block 
    margin-top: .25rem
    @media (min-width: $bp-tablet)
      text-align: right
      position: relative 
      right: 2rem
</style>
