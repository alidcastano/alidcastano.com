<template lang="pug">
EntryPost(:entry="song")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    song: await app.$content('/songs').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
