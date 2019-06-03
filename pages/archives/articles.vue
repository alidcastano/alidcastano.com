<template lang="pug">
ContentContainer
  ul.unlist.article-archive(slot="content")
    li.article-group(v-for="[date, articles] in articlesByDate")
      h3.group-label {{ date }}
      ul.article-list.list
        li.article-preview(v-for="article in articles")
          nuxt-link(:to="article.path") {{ article.title }}
          p.article-description(v-if="article.description") {{ article.description }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    articles: (
      await app.$content('/articles').getAll()
    ).filter(article => !article.draft)
  }),

  computed: {
    articlesByDate () {
      const articles = new Map()
      this.articles
      .forEach(article => {
        const [year] = article.date.split('-')
        if (!articles.has(year)) articles.set(year, [article])
        else articles.get(year).push(article)
      })
      return [...articles].sort(([date1], [date2]) => date2 - date1)
    }
  },

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.article-archive
  margin-bottom: 48px

.article-group
  list-style-type: none

.article-preview
  margin-bottom: 12px
</style>
