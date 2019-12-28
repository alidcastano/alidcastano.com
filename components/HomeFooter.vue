<template lang="pug">
div.home-footer
  div.footer-message
    SignupForm
    p 
      | You can sign up for occasional email updates above.
      | I'm also on <a href="https://mobile.twitter.com/alidcastano">twitter</a> and <a href="https://instagram.com/alidcastano/">instagram</a>,
      | or you can reach me directly at alidcastano@gmail.com.
</template>

<script>
export default {
  components: {
    SignupForm: () => import('~/components/SignupForm')
  }
}
</script>
<style lang="sass">
@import "../assets/sass/util"

.footer-message
  border-top: 2px dashed #eff3f5
  padding-top: 1rem
  max-width: 95%
  margin: auto
  font-size: .8rem
  padding-bottom: 1.5rem
  p 
    color: $gray-3
    margin-top: 8px
    margin-left: 4px
  @media (min-width: $bp-tablet)
    margin: 0
    font-size: .9rem
    max-width: 34rem
  a
    text-decoration: underline
</style>
