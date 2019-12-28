<template lang="pug">
EntryPost(:entry="article")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    article: await app.$content('/articles').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
