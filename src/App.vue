<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,400,400i,700');
@import url('../static/mixins/colors.scss');

* {
	box-sizing: border-box;
	transition: all 0.3s ease;
}

html, body {
	padding: 0;
	margin: 0;
}

#app {
  font-family: 'Lato', sans-serif;
}
</style>
