<template lang="pug">
ArchivePage(
  heading="Truths"
  :entries="truths"
)
</template>

<script>
import ArchivePage from '~/components/ArchivePage'

export default {
  asyncData: async ({ app, route }) => ({
    truths: (
      await app.$content('/truths').getAll()
    ).filter(article => !article.draft)
  }),

  components: {
    ArchivePage
  }
}
</script>
