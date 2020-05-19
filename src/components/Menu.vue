<template>
  <div id="menu">
    <section class="menu">
      <div v-on:click="hide" class='close'>⨉</div>
      <ul>
        <li v-on:click="hide">
          <router-link to="/">Accueil</router-link>
        </li>
        <li v-on:click="hide">
          <router-link to="/rules">Les Règles</router-link>
        </li>
        <li v-on:click="hide">
          <router-link to="/athletes">Nos Athlèthes</router-link>
        </li>
        <li v-on:click="hide">
          <router-link to="/news">Actualités</router-link>
        </li>
        <li v-on:click="hide">
          <router-link to="/videos">Vidéos</router-link>
        </li>
        <li v-on:click="hide">
          <router-link to="/events">Événements</router-link>
        </li>
      </ul>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    if (!this.visible) {
      document.querySelector(".menu").style.display = "none";
    } else {
      document.querySelector(".menu").style.display = "block";
    }
  },
  methods: {
      hide: function () {
        document.querySelector(".menu").style.display = "none";
      }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  background-color: $background-color;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 500;
  pointer-events: none;
  .close{
    font-size: 4em;
    padding-top: 64px;
  }
  a {
    font-size: 72px;
    line-height: 84px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: 200ms;
    text-transform: uppercase;
  }
  ul {
    margin-left: $margin-content;
    margin-right: $margin-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70%;
    li:hover {
      a {
        font-style: italic;
        font-weight: bold;
        font-size: 72px;
        line-height: 84px;
        text-align: center;
        position: relative;
        z-index: 5;
        transition: 200ms;
        text-transform: uppercase;
        &::before {
          content: "";
          top: 50%;
          width: 100%;
          height: 8px;
          background-color: $accent-color;
          position: absolute;
          z-index: -1;
        }
      }
    }
  }
}
</style>