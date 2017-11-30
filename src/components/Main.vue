<template lang="pug">
.wrapper
 navigation
 .map
  img(src="/static/img/cow2.png")
  parts

</template>

<script>
import navigation from '../components/Navigation.vue'
import parts from '../components/Parts.vue'

export default {
  components: {navigation, parts},
  name: 'Main',
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
