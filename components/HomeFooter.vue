<template lang="pug">
div.home-footer
  p.footer-message Welcome to my online home! I come here to
    |  <nuxt-link to="/articles">clarify my thoughts</nuxt-link>,
    | <nuxt-link to="/projects">record my work</nuxt-link>, and
    | <nuxt-link to="/now">establish my priorities.</nuxt-link>
    | Fundamentally, this place is mainly for me, but while you're here, I hope you find your stay worthwhile.
</template>

<style lang="sass">
@import "../assets/sass/util"

.footer-message
  border-top: 2px dashed #eff3f5
  padding-top: 1rem
  max-width: 95%
  margin: auto
  font-size: .8rem
  padding-bottom: 1.5rem
  @media (min-width: $bp-tablet)
    margin: 0
    font-size: 1rem
  a
    text-decoration: underline
</style>
