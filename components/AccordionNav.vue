<template lang="pug">
ul.accordion-nav(:style="accordionStyle")
  li.nav-item(v-for="path in menu")
    nuxt-link.nav-link(:to="path" exact) {{ (path === '/' ? index : path) | toTitle }}
  slot
</template>

<script>
export default {
  props: {
    menu: { type: Array, required: true },
    index: { type: String, required: true }
  },
  computed: {
    accordionStyle () {
      if (this.menu.indexOf(this.$route.path) === -1) {
        return {
          'border-top': '2px dashed #eff3f5',
          'border-bottom': '2px dashed #eff3f5'
        }
      } else {
        return {
          'border-bottom': '2px dashed #eff3f5'
        }
      }
    }
  },

  filters: {
    toTitle (path) {
      return path.charAt(1).toUpperCase() + path.replace(/\/[a-z]/, '')
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.accordion-nav li::before 
  display: none 

.accordion-nav
  width: 95%
  max-width: 520px
  margin-bottom: 1.25rem
  padding-bottom: .5rem
  padding-left: .25rem
  list-style-type: none
  margin-top: 4px
  text-align: left
  @media (max-width: 520px)
    width: 95%
    margin: 0 auto 
  @media (min-width: $bp-tablet)
    padding-left: 1rem
    width: 70%
    margin-top: 12px

.nav-item
  padding-left: 0
  display: inline-block
  text-align: center
  .nav-link
    position: relative 
    bottom: -1px
    padding: .7rem .5rem
    text-decoration: none
    font-size: .9rem
    @media (min-width: $bp-tablet)
      position: static
      font-size: 1.025rem
      padding: .7rem
  .nuxt-link-active
    border-top: 2px dashed $primary-light
    border-right: 2px dashed $primary-light
    border-left: 2px dashed $primary-light
    border-bottom: 2px solid #fff
</style>
