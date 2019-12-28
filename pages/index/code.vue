<template lang="pug">
PreviewContainer(
  title="What I've been working on"
  :seeAll="{ path: '/archives/projects', label: 'See all projects'}"
  )
  ul.projects-container
    li.project-item(v-for="project in projects")
      a(:href="project.link" target="_blank") {{ project.name }}
      p {{ project.pitch }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app, route }) => ({
    projects: (await app.$content('/code').getOnly(0)).body.slice(0, 3)
  }),
  components: {
    PreviewContainer
  }
}
</script>
