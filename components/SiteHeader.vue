<template lang="pug">
div.site-header
  a.masthead(href="/") Alid Castano
    | <span class="slogan"> Programming, fitness, usable psychology, and conscious growth. </span>
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.site-header
  display: block
  text-align: center
  @media (min-width: $bp-desktop)
    margin-left: .25rem
    text-align: left

.content-container .site-header
  @include dim-effect(.7, 1)
  border-bottom: 2px solid $primary-light
  margin-top: .5rem
  padding-bottom: .25rem
  padding-left: 2rem
  text-align: left
  @media (min-width: $bp-tablet)
    margin-left: -1rem
    margin-right: -1rem

.masthead
  display: inline-block
  color: $primary-dark
  letter-spacing: 1px
  font-weight: 600
  @media (min-width: $bp-desktop)
    margin: 0
  &:hover
    text-decoration: none
  .slogan
    display: none
    @media (min-width: $bp-desktop)
      display: block
      color: #82a1b0
      font-size: 1.025rem
      letter-spacing: initial
      font-weight: 400
      margin-top: -1.5rem
      padding-left: .6rem
      text-align: left

.landing-container .masthead
  font-size: 2.6rem
  @media (min-width: $bp-tablet)
    font-size: 5rem

.content-container .masthead
  font-size: 1.5rem
  .slogan
    display: none
</style>
