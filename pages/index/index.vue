<template lang="pug">
PreviewLatestTab(
  :entries="essays"
  heading="What I've been thinking about"
  archivePath="/archives/essays"
  archiveLabel="See all essays"
)
</template>

<script>
import PreviewLatestTab from '~/components/PreviewLatestTab'

export default {
  asyncData: async ({ app }) => ({
    essays: (
      await app.$content('/essays')
      .query({ exclude: 'body' })
      .getAll()
    ).filter(entry => !entry.draft).slice(0, 4)
  }),
  components: {
    PreviewLatestTab
  }
}
</script>
