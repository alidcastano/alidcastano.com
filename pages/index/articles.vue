<template lang="pug">
PreviewContainer(
  title="What I've been thinking about"
  :seeAll="{ path: '/archives/articles', label: 'See all articles' }"
)
  ul.articles-container
    li.article-item(v-for="article in articles")
      nuxt-link(:to="article.path") {{ article.title }}
      p.article-description(v-if="article.description") {{ article.description }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    articles: await app.$content('/articles')
    .query({ exclude: 'body' })
    .getOnly(0, 4)
  }),
  components: {
    PreviewContainer
  }
}
</script>

<style lang="sass">
.articles-container
  margin-bottom: 24px;

.article-item
  margin-bottom: 12px

.article-description
  font-size: .9rem
  opacity: .9
  margin-bottom: 0
</style>
