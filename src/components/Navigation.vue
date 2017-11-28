 <template lang="pug">
.navigation
 router-link.logo(:to ="{path: '/'}")
  img(src="/static/img/logo.svg")
 ul.navigation-list
  li.navigation-item(v-for="item in items")
   router-link.navigation-link(:to="{path: item.path}") {{item.name}}

</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      items: [
     {name: 'Main', path: '/'},
     {name: 'Products', path: '/products'},
     {name: 'About', path: '/about'},
     {name: 'Contacts', path: '/contacts'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import './static/mixins/colors.scss';
@import './static/mixins/basic.scss';

.navigation {
 min-width: 100vw;
 height: 80px;
 background: $grey;
 box-shadow: 0 10px 64px rgba(0, 0, 0, 0.7);
 display: flex;
 flex-direction: column;
 justify-content: space-around;

 &:after {
  content: '';
  display: block;
  border-bottom: 1px solid $brown;
  position: absolute;
  top: 75px;
  width: 100vw;
 }


 &-list {
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 400px;
  margin: 0 auto 10px auto;
  align-items: flex-end;
  padding: 0;
 }

 &-item {
  list-style: none;
 }

 &-link {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  transition: all 0.3s ease;

  &:hover {
   color: crimson;   
  }
 }
}

.logo {
 display: block;
 margin: 0 auto;

}



</style>
