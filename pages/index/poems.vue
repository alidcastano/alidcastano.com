<template lang="pug">
PreviewLatestTab(
  :entries="poems"
  heading="What I've been thinking about, poetically"
  contentPath="/poems"
  archivePath="/archives/poems"
  archiveLabel="See all poems"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    poems: (
      await app.$content('/poems')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 7)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
