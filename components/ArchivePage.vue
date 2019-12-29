<template lang="pug">
ContentContainer
  div.entry-archive(slot="content")
    h3 {{ heading }}:
    ul.unlist
      li.entry-group(v-for="[date, ents] in entriesByDate")
        h3.group-label {{ date }}
        ul.entry-list.list
          li.entry-preview(v-for="entry in ents")
            nuxt-link(:to="entry.path") {{ entry.title }}
            p.entry-description(v-if="entry.description") {{ entry.description }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  props: {
    heading: { type: String },
    entries: { type: Array }
  },

  computed: {
    entriesByDate () {
      const entries = new Map()
      this.entries
      .forEach(entry => {
        const [year] = entry.date.split('-')
        if (!entries.has(year)) entries.set(year, [entry])
        else entries.get(year).push(entry)
      })
      return [...entries].sort(([date1], [date2]) => date2 - date1)
    }
  },

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.entry-archive
  margin-bottom: 48px

.entry-group
  list-style-type: none

.entry-preview
  margin-bottom: 12px
</style>
