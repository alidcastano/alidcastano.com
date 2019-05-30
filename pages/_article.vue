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
    p(v-if="article.quote").article-quote {{ article.quote }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    article: await app.$content('/articles').get(route.path)
  }),

  computed: {
    overrideMargin () {
      if (this.article.title.length < 30) return { 'margin-left': '-1rem' }
    }
  },

  head () {
    return {
      title: 'Alid Castano | ' + this.article.title
    }
  },

  components: {
    ContentContainer
    // ShareWidgets: () => import('~/components/ShareWidgets')
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.article-lead
  margin-top: -12px
  margin-bottom: 1.75rem
  .article-title
    font-size: 1.6rem
    color: #45606e
    margin-bottom: 0
    @media (min-width: $bp-tablet)
      font-size: 2.125rem
  .article-description
    font-size: 1.125rem
    margin-top: 4px
    color: #9fa5ad
    font-weight: normal
    font-style: italic
    @media (min-width: $bp-tablet)
      font-size: 1rem
.article-body
  margin-top: -.6rem
  font-family: Spectral,serif;
.article-closer
  margin-top: 1rem
  margin-bottom: 3rem
.article-image
  margin: .5rem auto 1rem auto
.article-quote
  max-width: 85%
  margin: 0 auto
  color: #838b95
  font-style: italic
</style>
