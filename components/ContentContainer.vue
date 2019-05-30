<template lang="pug">
div.content-container
  slot(name="lead")
  div.content
    slot(name="content")
  slot(name="closer")
  div.content-footer
    nuxt-link.back-home(to="/") Back Home
</template>

<style lang="sass">
@import "../assets/sass/util"

.content-container
  max-width: $w-content
  .content 
    padding: 1em
  @media (min-width: $bp-tablet)
    max-width: $w-content + 15rem
    .content
      max-width: $w-content
      min-height:  10rem
      margin: 0

.content-footer
  margin-bottom: 2rem
  margin-left: -1rem
.back-home
  &:before
    content: "← "
</style>
