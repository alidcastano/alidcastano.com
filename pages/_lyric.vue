<template lang="pug">
EntryPost(:entry="lyric" imagePath="lyrics")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    lyric: await app.$content('/lyrics').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
