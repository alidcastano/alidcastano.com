<template lang="pug">
div.share-container
  p.share-message Share with your friends:
  div.share-widgets
    a.share-link(
      href="#" rel="nofollow" title="Share on Twitter"
      :onclick="`window.open('https://twitter.com/intent/tweet?text=${article.title}&url=${siteUrl}${article.path}&via=${handle}', 'newwindow', 'width=300, height=250'); return false;`"
    ) Twitter
    a.share-link(
      href="#" rel="nofollow" title="Share on Facebook"
      :onclick="`window.open('https://facebook.com/sharer.php?u=${siteUrl}${article.path}', 'newwindow', 'width=300, height=250'); return false;`"
    ) Facebook
</template>

<script>
const siteUrl = 'https://alidcastano.com'
const handle = 'alidcastano'

const site = {
  title: 'Alid Castano'
}

const fb = {
  admin: 'https://www.facebook.com/alidcastano',
  id: '996066143804182'
}

export default {
  props: ['article'],

  data: () => ({ siteUrl, handle }),

  meta () {
    const fbMeta = [
      { name: 'fb:admins', content: fb.admin },
      { name: 'fb:app_id', content: fb.id },
      { name: 'og:site_name', content: site.title },
      { name: 'og:type', content: 'article' },
      { name: 'og:url', content: siteUrl + this.article.path },
      { name: 'og:title', content: this.article.title },
      { name: 'article:published_time', content: this.article.date }
    ]

    const twitterMeta = [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: handle },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:url', content: siteUrl + this.article.path }
    ]

    if (this.article.image) {
      const imagePath = siteUrl + '/img/essays/' + this.article.image
      fbMeta.push({ name: 'og:image', content: imagePath })
      twitterMeta.push({ name: 'twitter:image:src', content: imagePath })
    }

    return [
      ...fbMeta,
      ...twitterMeta
    ]
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.share-container
  margin-top: 1.5rem
  margin-bottom: 1rem

.share-message,
.share-widgets
  display: inline-block

.share-message
  color: $primary-dark
  margin-right: .5rem
.share-link
  background-color: $primary-light
  border-radius: 5px
  padding: 0.4rem 0.5rem
  margin-right: .5rem

</style>
