<template lang="pug">
ArchivePage(
  heading="Essays"
  :entries="essays"
)
</template>

<script>
import ArchivePage from '~/components/ArchivePage'

export default {
  asyncData: async ({ app, route }) => ({
    essays: (
      await app.$content('/essays').getAll()
    ).filter(article => !article.draft)
  }),

  components: {
    ArchivePage
  }
}
</script>
