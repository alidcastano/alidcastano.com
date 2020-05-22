<template lang="pug">
EntryPost(:entry="truth" imagePath="truths")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    truth: await app.$content('/truths').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
