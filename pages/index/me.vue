<template lang="pug">
PreviewContainer
  div.me-pitch 
    h2 Me in 10 seconds
    p I'm fascinated by startups, fitness, usable psychology, and conscious growth. Oh, and <a href="http://studbits.com" target="_blank">note-taking</a>!
    p I care deely about how we 
      | <a href="/thoughtful-design" target="_blank">collect and share information online</a>.
    p The best advice I've received is <a href="/stay-upwind" target="_blank">"Stay Upwind"</a>.
    p My <a href="/uniquely-valuable" target="_blank">three skills</a> are coding, public speaking, and writing.
    p I'm not a big fan of <a href="/current-events" target="_blank">current events</a>.
    p I've learned that <a href="">you can't rush change</a>.
    p I was born in Colombia, raised in Miami, educated in Philly, went monk mode in Minnapolis.
      |  Now I'm working remotely and traveling around Latin America.
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  components: {
    PreviewContainer
  }
}
</script>

<style lang="sass" scope>
.me-pitch 
  a
    text-decoration: underline
</style>
