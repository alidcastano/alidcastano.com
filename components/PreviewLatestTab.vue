<template lang="pug">
PreviewContainer(
  :title="heading"
  :seeAll="seeAll"
)
  ul.list.entries-container
    li.entry-item(v-for="entry in entries")
      nuxt-link(:to="entry.path") {{ entry.title }}
      p.entry-desc(v-if="entry.description") {{ entry.description }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  props: {
    heading: { type: String },
    entries: { type: Array },
    archivePath: { type: String },
    archiveLabel: { type: String }
  },
  computed: {
    seeAll () {
      return { path: this.archivePath, label: this.archiveLabel }
    }
  },
  components: {
    PreviewContainer
  }
}
</script>

<style lang="sass">
.entries-container
  margin-bottom: 24px;

.latest-item
  margin-bottom: 12px

.latest-desc
  font-size: .9rem
  opacity: .9
  margin-bottom: 0
</style>
