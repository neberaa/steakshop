<template lang="pug">
.wrapper
 .map
  img(src="/static/cow2.png") 
  svg(viewBox="0 0 1060 685.3")
   path(class="part" d="m 401.44089,78.551818 c 20.37105,73.197402 41.95097,146.697012 41.06812,214.580932 60.71165,3.28617 120.28633,7.70931 175.56622,16.42725 22.17227,-61.28913 13.50835,-134.91274 -5.13352,-212.527527 z" fill="crimson")
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
 width: 100%;
 height: 100%;
 min-width: 100vw;
 min-height: 100vh;
 background: url(/static/bg-texture.jpg) repeat 0 0;
}

.map {
 position: relative;
 text-align: center;
}

img {
 opacity: .5;
 width: 50%;
}

svg {
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
}

.part {
 opacity: 0;
 cursor: pointer;
 transition: all 0.2s ease-in-out;

 &:hover {
  opacity: .4;

 }
}

</style>
