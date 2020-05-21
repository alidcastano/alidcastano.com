<template lang="pug">
EntryPost(:entry="adage" imagePath="adages")
</template>

<script>
import EntryPost from '~/components/EntryPost'

export default {
  asyncData: async ({ app, route }) => ({
    adage: await app.$content('/adages').get(route.path)
  }),

  components: {
    EntryPost
  }
}
</script>
