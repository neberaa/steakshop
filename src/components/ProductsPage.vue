<template lang="pug">
.wrapper
 navigation
 .map
  img(src="/static/img/cow2.png")
  parts
  cards
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Parts from '../components/Parts.vue'
import Cards from '../components/Cards.vue'

export default {
  components: {Navigation, Parts, Cards},
  name: 'ProductsPage',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import './static/mixins/colors.scss';
@import './static/mixins/basic.scss';

.wrapper {
 width: 100%;
 height: 100%;
 min-width: 100vw;
 min-height: 100vh;
 background: url(/static/img/bg-texture.jpg) repeat 0 0;
}

.map {
 position: relative;
 text-align: center;
 top: 50px;
}

img {
 opacity: .5;
/*  width: 50%; */
}

</style>
