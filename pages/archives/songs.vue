<template lang="pug">
ArchivePage(
  heading="Songs"
  :entries="songs"
)
</template>

<script>
import ArchivePage from '~/components/ArchivePage'

export default {
  asyncData: async ({ app, route }) => ({
    songs: (
      await app.$content('/songs').getAll()
    ).filter(article => !article.draft)
  }),

  components: {
    ArchivePage
  }
}
</script>
