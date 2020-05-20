<template>
  <div id="app" class="no-menu">
    <Header />
    <router-view/>
    <Footer />
    <Menu />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Header,
    Footer, 
    Menu
  },
  watch: {
      '$route' (to) {
        document.title = to.meta.title || 'WORLD CHASE TAG'
      }
    },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  background-color: $background-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
