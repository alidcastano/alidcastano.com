<template lang="pug">
ContentContainer.project-archives
  div(slot="content")
    h3 Projects:
    ul.project-list.unlist
      li(v-for="[created, projects] in projectsByCreated")
        h3.group-label {{ created }}
        ul.project-list.list
          li.project-preview(v-for="project in projects")
            a(:href="project.link" target="_blank") {{ project.name }}
            p {{ project.pitch}}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    projects: (await app.$content('/projects').getOnly(0)).body
  }),

  computed: {
    projectsByCreated () {
      const projects = new Map()
      this.projects
      .forEach(project => {
        const [created] = project.created.split('-')
        console.log(created)
        if (!projects.has(created)) projects.set(created, [project])
        else projects.get(created).push(project)
      })
      return [...projects]
    }
  },

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.project-group
  list-style-type: none
</style>
