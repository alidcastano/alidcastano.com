<template lang="pug">
ArchivePage(
  heading="Lyrics"
  :entries="lyrics"
)
</template>

<script>
import ArchivePage from '~/components/ArchivePage'

export default {
  asyncData: async ({ app, route }) => ({
    lyrics: (
      await app.$content('/lyrics').getAll()
    ).filter(article => !article.draft)
  }),

  components: {
    ArchivePage
  }
}
</script>
