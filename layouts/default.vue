<template lang="pug">
div.site-container(:class="layoutStyle")
  SiteHeader
  div.site-content
    AccordionNav(v-if="isLanding" :menu="menu" index="/articles")
    div.main
      nuxt
  HomeFooter.home-footer(v-if="isLanding")
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import AccordionNav from '~/components/AccordionNav'

export default {
  data: () => ({
    menu: ['/', '/projects', '/now', '/about']
  }),
  computed: {
    isLanding () {
      return this.menu.indexOf(this.$route.path) > -1
    },
    layoutStyle () {
      return this.isLanding ? 'landing-container' : 'content-container'
    }
  },

  components: {
    SiteHeader,
    AccordionNav,
    HomeFooter: () => import('~/components/HomeFooter')
  }
}
</script>

<style lang="sass" scope>
@import "../assets/sass/util.sass"

.page-enter-active, .page-leave-active
  transition: all .25s ease-out
.page-enter, .page-leave-active
  opacity: 0
  transform-origin: 50% 50%

.site-container
  display: flex
  flex-direction: column
  padding: 0
  margin: 0
  @media (min-width: $bp-tablet)
    margin-left: 24px 
    margin-right: 24px
  @media (min-width: $bp-desktop)
    margin-left: 120px
    margin-right: 120px

.landing-container,
.landing-container .site-content 
  margin-top: 16px

.site-content 
  margin-bottom: 16px

.landing-container
  height: 90vh

.extra-menu-item
  display: none
  @media (min-width: $bp-desktop)
    display: initial
    position: relative
    top: .75rem
    left: 2.8rem

.main
  padding-left: 1rem
  padding-right: 1rem
</style>
