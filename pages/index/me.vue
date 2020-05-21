<template lang="pug">
PreviewContainer
  div.me-pitch 
    h2 Me in 20 seconds
    p I'm fascinated by startups, fitness, usable psychology, and conscious growth. Oh, and <a href="http://studbits.com" target="_blank">note-taking</a>!
    p I care deely about how we 
      | <a href="/thoughtful-design" target="_blank">collect and share information online</a>.
    p The best advice I've received is <a href="/stay-upwind" target="_blank">"stay upwind"</a>. 
    p The best career advice I've received is <a href="/uniquely-valuable" target="_blank">be useful first, passionate second.</a> 
      | In that regard, my three skills are coding, writing, and (though somewhat rusty) public speaking.
    p Regarding programming, I'm now a bin fan of <a href="lisp" target="_blank">paranthesis</a>,
      |  <a href="/computer-slang" target="_blank">terse code</a>,
      | simple <a href="/abstraction" target="_blank">abstractions</a>,
      | and <a href="/code-docs" target="_blank">plenty documentation</a>.
    p I'm not a big fan of <a href="/current-events" target="_blank">current events</a>.
    p I've learned that <a href="">you can't rush change</a>. 
      | Nor can you always control what you work on, so <a href="just-dont" target="_blank">Just don't!</a>.
    p I was born in Colombia, raised in Miami, educated in Philly, went monk mode in Minnapolis.
      |  Now I'm <del>working remotely and traveling around Latin America</del> stuck at home because of Coronavirus.
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
