<template lang="pug">
PreviewLatestTab(
  :entries="adages"
  heading="What I've found to be true, succinctly"
  contentPath="/adages"
  archivePath="/archives/adages"
  archiveLabel="See all adages"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    adages: (
      await app.$content('/adages')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 7)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
