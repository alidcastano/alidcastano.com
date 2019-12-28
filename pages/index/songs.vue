<template lang="pug">
PreviewLatestTab(
  :entries="songs"
  heading="What I've been thinking about, poetically"
  contentPath="/songs"
  archivePath="/archives/songs"
  archiveLabel="See all songs"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    songs: (
      await app.$content('/songs')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 4)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
