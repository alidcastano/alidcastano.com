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
  width: 98%
  margin-top: -.25rem
  margin-bottom: 1.25rem
  padding-left: 0
  padding-top: .5rem
  padding-bottom: .5rem
  list-style-type: none
  text-align: center
  @media (min-width: $bp-desktop)
    width: 42%
    padding-left: .25rem
    margin-top: .75rem
    text-align: left

.nav-item
  display: inline-block
  text-align: center
  .nav-link
    padding: .7rem .35rem
    text-decoration: none
    font-size: .9rem
    @media (min-width: $bp-tablet)
      font-size: 1.025rem
      padding: .7rem
  .nuxt-link-active
    border-top: 2px dashed $primary-light
    border-right: 2px dashed $primary-light
    border-left: 2px dashed $primary-light
    border-bottom: 2px solid #fff
</style>
