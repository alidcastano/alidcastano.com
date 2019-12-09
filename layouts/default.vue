<template lang="pug">
div.site-container(:class="layoutStyle")
  SiteHeader
  div.site-content
    AccordionNav(v-if="isLanding" :menu="menu" index="/articles")
      li.extra-menu-item
        button.signup-button(@click="toggleSignup()") Subscribe
    div.main
      nuxt
  HomeFooter.home-footer(v-if="isLanding")
  SignupForm(v-if="isLanding" :display="signupDisplay" :toggle="toggleSignup")
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import AccordionNav from '~/components/AccordionNav'

export default {
  data: () => ({
    menu: ['/', '/projects', '/now', '/about', '/contact'],
    signupDisplay: 'none'
  }),
  computed: {
    isLanding () {
      return this.menu.indexOf(this.$route.path) > -1
    },
    layoutStyle () {
      return this.isLanding ? 'landing-container' : 'content-container'
    }
  },

  methods: {
    toggleSignup (display) {
      if (display) this.signupDisplay = display
      else if (['hide', 'none'].indexOf(this.signupDisplay) > -1) this.signupDisplay = 'show'
      else if (this.signupDisplay === 'show') this.signupDisplay = 'hide'
      else this.signupDisplay = 'none'
    }
  },

  components: {
    SiteHeader,
    AccordionNav,
    SignupForm: () => import('~/components/SignupForm'),
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
  min-height: 100vh
  @media (min-width: $bp-tablet)
    margin-left: 24px 
    margin-right: 24px
  @media (min-width: $bp-desktop)
    margin-left: 120px
    margin-right: 120px

.site-content 
  flex: 1
  margin-top: 0px

.landing-container
  height: 90vh

.extra-menu-item
  display: none
  @media (min-width: $bp-desktop)
    display: initial
    position: relative
    top: .75rem
    left: 2.8rem

.signup-button
  background-color: transparent
  color: $primary-dark
  border: none
  position: absolute
  top: -1rem
  font-size: 1.025rem
  font-family: $heading-font-family
  outline: none
  cursor: pointer

.main
  padding-left: 1rem
  padding-right: 1rem
</style>
