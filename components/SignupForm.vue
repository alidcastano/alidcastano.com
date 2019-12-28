<template lang="pug">
div.signup-form-container 
  div.submission(v-if="result")
      p.success(v-if="result && result === 'sucess'") Email received. Thanks for subscribing, {{ firstName }}!
      p.error(v-else-if="result && result === 'failure'") Error occurred. Please try again later.
  div.signup-form(v-else)
    input.signup-field(
      type="text" placeholder="Your Name" name="name" v-model="firstName" :disabled="!!result"
    )
    input.signup-field(
      type="email" placeholder="Your Email" name="email" v-model="email" :disabled="!!result"
    )
    button.send-button(v-on:click="submitForm") Sign up
  p.error.field-msg(v-if="errors.length > 0") {{ errors[0] }}
</template>

<script>
export default {
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

.field-msg 
  margin-top: 8px
  margin-left: 4px

.submission
  display: flex 
  align-items: center
  justify-content: center
  height: 100%
  
.signup-form
  position: relative
  display: flex 
  flex-direction: row 
  align-items: center 
  .signup-field
    display: block
    margin-right: 12px
    background: linear-gradient(to top, $primary-light, #fff 30%)
    border: 1px solid $primary-light
    font-size: .9rem
    color: $gray-3
    padding: .5rem .5rem
    max-width: 100%
    border-radius: 3px
    outline: none
    cursor: text
    flex: 1
    &:focus
      border: 1px solid #d0dbe2
  .send-button
    display: inline-block
    font-size: .9rem
    background: $primary-light
    color: $gray-3
    background: linear-gradient(to top, $primary-light, #fff 30%)
    border: 1px solid #e0e7eb
    border-radius: 3px
    width: 80px
    padding: .3rem .6rem
    cursor: pointer
    outline: none
    &:hover 
      background: linear-gradient(to top, $primary-light, #fff 100%)
      border: 1px solid #d0dbe2
</style>
