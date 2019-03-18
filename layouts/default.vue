<template lang="pug">
div.site-container(:class="layoutStyle")
  SiteHeader
  div.site-content
    AccordionNav(v-if="isLanding" :menu="menu")
      li.extra-menu-item
        button.signup-button(@click="toggleSignup()") Subscribe
    div.main
      nuxt
  HomeFooter.home-footer(v-if="isLanding")
  //- hidden from page until toggled
  SignupForm(v-if="isLanding" :display="signupDisplay" :toggle="toggleSignup")
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import AccordionNav from '~/components/AccordionNav'

export default {
  data: () => ({
    menu: ['/articles', '/projects', '/about', '/contact'],
    signupDisplay: 'none'
  }),
  computed: {
    isLanding () {
      return ['/', ...this.menu].indexOf(this.$route.path) > -1
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

<style lang="sass">
@import "../assets/sass/util.sass"

.page-enter-active, .page-leave-active
  transition: all .25s ease-out
.page-enter, .page-leave-active
  opacity: 0
  transform-origin: 50% 50%

.site-container
  display: flex
  flex-direction: column
  padding: 0 1rem
  margin: 0 auto
  min-height: 100vh
  @media (min-width: $bp-tablet)
    margin-left: 3rem

.site-content 
  flex: 1

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

.landing-container .main
  padding-left: .5rem
</style>
