<template lang="pug">
PreviewLatestTab(
  :entries="truths"
  heading="What I've found to be true, succinctly"
  contentPath="/truths"
  archivePath="/archives/truths"
  archiveLabel="See all truths"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    truths: (
      await app.$content('/truths')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 7)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
