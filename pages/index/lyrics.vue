<template lang="pug">
PreviewLatestTab(
  :entries="lyrics"
  heading="What I've been thinking about, poetically"
  contentPath="/lyrics"
  archivePath="/archives/lyrics"
  archiveLabel="See all lyrics"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    lyrics: (
      await app.$content('/lyrics')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 7)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
