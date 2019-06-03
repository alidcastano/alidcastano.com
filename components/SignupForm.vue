<template lang="pug">
div.signup-container(:class="formAnimationClass")
  button.close-form(@click="closeForm") x
  h2 Join My Mailing List
  p Sign up to receive occasional updates.
  div.signup-form
    p.error(v-if="errors.length > 0") {{ errors[0] }}
    input.signup-field(
      type="text" placeholder="Your Name" name="name" v-model="firstName" :disabled="!!result"
    )
    input.signup-field(
      type="email" placeholder="Your Email" name="email" v-model="email" :disabled="!!result"
    )
    div 
      p.success(v-if="result && result === 'sucess'") Email received - thanks for subscribing!
      p.error(v-else-if="result && result === 'failure'") Error occurred. Please try again later.
      button.send-button(v-else v-on:click="submitForm") Sign up
</template>

<script>
export default {
  props: {
    display: { type: String, srequired: true },
    toggle: { type: Function, required: true }
  },
  data () {
    return {
      email: '',
      firstName: '',
      errors: [],
      result: null
    }
  },
  watch: {
    email: function (oldValue, newValue) {
      this.errors = []
    },
    firstName: function (oldValue, newValue) {
      this.errors = []
    }
  },
  computed: {
    formAnimationClass () {
      if (this.display === 'show') return 'slide-up'
      else if (this.display === 'hide') return 'slide-down'
    }
  },
  methods: {
    submitForm (e) {
      e.preventDefault()
      const formData = new FormData()
      const { email, firstName } = this
      if (!firstName) {
        this.errors.push('First name required.')
      } else if (!email || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
        this.errors.push('Email required.')
      } else {
        formData.append('firstName', firstName)
        formData.append('emailAddress', email)
        return fetch('https://emailoctopus.com/lists/07076b28-85ae-11e9-9307-06b4694bee2a/members/external-add', {
          method: 'post',
          body: formData
        })
            .then(res => {
              if (res.status === 200) this.result = 'sucess'
            })
            .catch(() => {
              this.result = 'failure'
            })
      }
    },
    closeForm () {
      this.toggle('hide')
    }
  }
}
</script>


<style lang="sass">
@import "../assets/sass/util"

$show-bottom-pos: 48%
$hide-bottom-pos: -100%

.success 
  color: #5bbe91

.error
  color: #9F6000

.signup-container
  display: none
  @media (min-width: $bp-tablet)
    display: block
    border: 2px solid darken($primary-light, 10%)
    background: #fff
    box-shadow: 0 4px 5px 5px $gray-4
    width: $w-preview + 2rem
    max-width: 100%
    position: fixed
    bottom: $hide-bottom-pos
    text-align: center
    border-radius: 3px
    padding: 2rem 2rem
    z-index: 2
    h2
      margin-top: 0
      font-size: 2.125rem
.signup-form
  position: relative
  .signup-field
    display: block
    width: 60%
    margin: 0 auto 12px auto
    background: linear-gradient(to top, $primary-light, #fff 30%)
    border: 1px solid $primary-light
    font-size: 1rem
    padding: .5rem .5rem
    max-width: 100%
    border-radius: 3px
    outline: none
    cursor: text
    &:focus
      border: 1px solid $primary-dark
  .send-button
    display: inline-block
    background: $primary-light
    color: $primary-dark
    border: 1px solid $primary-dark
    border-radius: 3px
    width: 18%
    font-size: 1rem
    padding: .3rem .6rem
    cursor: pointer
    outline: none

.close-form
  background: $primary-light
  color: $primary-dark
  float: right
  position: absolute
  top: 3%
  right: 1.5%
  padding: .2rem .4rem
  line-height: 1rem
  cursor: pointer
  border: none
  border-radius: 3px
  outline: none

.slide-up
  bottom: $show-bottom-pos
  @keyframes slide-up
    0%
      bottom: $hide-bottom-pos

    100%
      bottom: $show-bottom-pos
  animation: slide-up 1s ease

.slide-down
  bottom: $hide-bottom-pos
  @keyframes slide-down
    0%
      bottom: $show-bottom-pos
    100%
      bottom: $hide-bottom-pos
  animation: slide-down 1s ease
</style>
