<template lang="pug">
EntryPost(:entry="poem" imagePath="poems")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    poem: await app.$content('/poems').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
