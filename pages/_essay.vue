<template lang="pug">
EntryPost(:entry="essay" imagePath="essays")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    essay: await app.$content('/essays').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
