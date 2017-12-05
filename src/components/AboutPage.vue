<template lang="pug">
.wrapper
 navigation

</template>

<script>
import navigation from '../components/Navigation.vue'

export default {
  components: {navigation},
  name: 'AbouPage',
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

</style>
