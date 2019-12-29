<template lang="pug">
ArchivePage(
  heading="Poems"
  :entries="poems"
)
</template>

<script>
import ArchivePage from '~/components/ArchivePage'

export default {
  asyncData: async ({ app, route }) => ({
    poems: (
      await app.$content('/poems').getAll()
    ).filter(article => !article.draft)
  }),

  components: {
    ArchivePage
  }
}
</script>
