<template lang="pug">
ContentContainer
  div.article-lead(slot="lead")
    h1.article-title {{ article.title }}

  section.article-body(slot="content" :style="overrideMargin")
    div(v-html="article.body")
    ShareWidgets(:article="article")

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
    ContentContainer,
    ShareWidgets: () => import('~/components/ShareWidgets')
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.article-lead
  margin: 1rem auto 1.75rem auto
.article-title
  font-size: 1.6rem
  margin-top: 0
  color: #45606e
  @media (min-width: $bp-tablet)
    font-size: 2.125rem
.article-body
  margin-top: -.6rem
.article-closer
  margin-bottom: 3rem
.article-image
  margin: .5rem auto 1rem auto
.article-quote
  max-width: 85%
  margin: 0 auto
  color: #737373
  font-style: italic
</style>
