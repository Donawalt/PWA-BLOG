<template>
  <div class="home">
    <section class="h-header">
      <div class="h-header-bg">
        <video autoplay muted loop>
          <source src="../assets/videos/WCT-header.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="h-header-content">
        <div class="h-title">
          <p>This is the</p>
          <h1>World Chase Tag</h1>
        </div>
      </div>
    </section>
    <section class="h-intro">
      <p class="h-intro-title">
        World Chase Tag ™ est la première et seule ligue mondiale pour les
        balises compétitives professionnelles.
      </p>
      <p class="h-intro-chapo">
        L'organisation était chargée de créer une arène de jeu compétitive
        normalisée et un ensemble de formats de règles qui ont permis aux
        athlètes Chase Tag ™ du monde entier de s'entraîner et de participer à
        des tournois internationaux. Le plus récent d'entre eux était le WCT4,
        qui s'est tenu en août 2019 à Londres, avec des équipes du Japon,
        d'Espagne, de France, des États-Unis et du Royaume-Uni.
      </p>
      <img alt="Enfants jouant au chase tag" src="../assets/images/home-run.jpg" />
      <p class="h-intro-text">
        Les événements ont suscité un énorme intérêt dans le monde entier via
        les plateformes de médias sociaux et WORLD CHASE TAG ™ a soutenu
        l'évolution et les expérimentations développées via les gymnases et
        clubs de parkour dans chaque région pour développer le jeu.
        <br />
        <br />Depuis 2017, WCT travaille avec des partenaires internationaux pour autoriser l'organisation d'événements WCT officiels dans des pays et régions du monde entier. L'objectif au cours des 12 prochains mois est que ces événements régionaux agissent comme des qualificatifs qui permettent aux équipes gagnantes de participer automatiquement aux événements WCT International.
      </p>
      <router-link class="h-intro-link" to="/history">
        <Button class="h-intro-button">Notre histoire</Button>
      </router-link>
    </section>
    <section class="h-theme">
      <router-link to="/rules">
        <Button>Les règles</Button>
      </router-link>
      <img alt src="../assets/images/arbitrage.png" />
      <img alt src="../assets/images/athletes.png" />
      <router-link to="/athletes">
        <Button>Nos Athlètes</Button>
      </router-link>
    </section>
    <section class="h-actu">
      <h3>LES DERNIERES ACTUALITÉS</h3>
      <div class="h-actu-grid">
        <template v-for="post in posts">
          <router-link
            :to="'/news/' + post.id"
            :key="post.id"
            :style="{
              backgroundImage:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 61.46%, #000000 100%), url(' +
                require('@/assets/images/actu.png') +
                ')',
            }"
            class="card"
          >
            <div class="actu-card-background"></div>
            <div class="actu-card-info">
              <p class="date">24 janvier 2020</p>
              <h4>{{ post.title }}</h4>
              <p class="resume">
                Toutes nos félicitations à @blacklistparkour pour sa victoire
                aux championnats d'Europe PRO 2GO 2019 ...
              </p>
            </div>
          </router-link>
        </template>
      </div>
      <Button>
        <router-link to="/news">Nos actualités</router-link>
      </Button>
    </section>
    <section class="h-videos">
      <h3>WCT VIDÉOS</h3>
      <div class="h-videos-carousel">
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/miiVpTdcsrU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/fFgT9vt2sJM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/6CDNKNaxJSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/mgwNlAHYMt8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Button>
        <router-link to="/videos">Nos vidéos</router-link>
      </Button>
    </section>
    <section class="h-events">
      <h3>ÉVÉNEMENTS</h3>
      <template v-for="event in events">
        <router-link
          :to="'/events/' + event.id"
          :key="event.id"
          :style="{
            backgroundImage:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 61.46%, #000000 100%), url(' +
              require('@/assets/images/events.png') +
              ')',
          }"
          class="card"
        >
          <div class="actu-card-background"></div>
          <div class="actu-card-info">
            <h4>CHASE TAG UK</h4>
            <p class="resume">LONDON</p>
            <p class="date">24 janvier 2020</p>
          </div>
        </router-link>
      </template>
    </section>
    <section class="h-socials">
      <h3>NOS RESEAUX SOCIAUX</h3>
      <a href="https://www.facebook.com/worldchasetag/" target="_blank" title="Notre Facebook">
        <img alt src="../assets/images/fb.png" />
      </a>
      <a href="https://www.instagram.com/worldchasetag/" target="_blank" title="Notre Instagram">
        <img alt src="../assets/images/inst.png" />
      </a>
      <a href="https://www.youtube.com/channel/UCvo8BitSExXgP-eYjXwJvgw" target="_blank" title="Notre Youtube">
        <img alt src="../assets/images/youtube.png" />
      </a>
      <a href="https://twitter.com/worldchasetag" target="_blank" title="Notre Twitter">
        <img alt src="../assets/images/twitter.png" />
      </a>
    </section>
  </div>
</template>

<script>
import Button from "../components/atom/button";
export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      posts: null,
      events: null
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      response.json().then(data => {
        console.log(data);
        this.posts = data.slice(0, 4);
        this.events = data.slice(0, 3);
      });
    });
  }
};
</script>

<style lang="scss">
.home {
  a {
    text-decoration: none;
  }
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  .h-header {
    position: relative;
    .h-header-bg {
      overflow: hidden;
      width: 100vw;
      height: 80vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      position: relative;
      &::before {
        content: ""; // ::before and ::after both require content
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 47.4%,
            #1f1f1f 100%
          ),
          linear-gradient(0deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23));
        opacity: 0.7;
      }
      video {
        min-height: 120vh;
        min-width: 300vw;
      }
    }
    .h-header-content {
      position: absolute;
      width: $width-content;
      margin-left: $margin-content;
      margin-right: $margin-content;
      padding-top: 128px;
      top: 0;
      .h-title {
        width: 40%;
        text-align: left;
        p {
          font-size: 22.5px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        h1 {
          font-size: $title-big-size;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
  .h-intro {
    margin-top: -25px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title {
      max-width: 752px;
      font-size: 22px;
      text-align: center;
      font-weight: bold;
      line-height: 1.5em;
      position: relative;
      z-index: 1;
      margin-bottom: 25px;
    }
    &-chapo {
      max-width: 752px;
      margin-bottom: 25px;
      font-size: 18px;
    }
    img {
      width: 65%;
      position: relative;
      z-index: 1;
      margin-bottom: 25px;
    }
    &-text {
      font-size: 18px;
      max-width: 752px;
      text-align: left;
    }
    &-link {
      width: 752px;
      max-width: 752px;
      display: flex;
      flex-direction: row;
      justify-content: right;
    }
    &-button {
      font-size: 1rem;
      font-weight: bold;
      width: 176px;
      height: 36px;
      margin-top: 25px;
    }
  }
  .h-theme {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 60px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    width: auto;
    grid-column-gap: 16px;
    img {
      width: 100%;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .h-actu {
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    h3 {
      font-size: $title-section_size;
      line-height: 35px;
      font-weight: bold;
      margin-bottom: 32px;
    }
    .h-actu-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 304px 304px;
      grid-column-gap: 16px;
      grid-row-gap: 24px;
      margin-bottom: 32px;
      .card {
        position: relative;
        color: white;
        text-decoration: none;
        .actu-card-info {
          position: absolute;
          margin: 16px;
          margin-bottom: 0;
          bottom: 16px;
          text-align: left;
          .date {
            font-size: 8px;
            margin-bottom: 6px;
          }
          h4 {
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          .resume {
            font-size: 12px;
          }
        }
      }
    }
  }
  .h-videos {
    margin-bottom: 32px;
    h3 {
      font-size: $title-section_size;
      line-height: 35px;
      font-weight: bold;
      margin-bottom: 32px;
    }
    &-carousel {
      margin-left: auto;
      margin-right: auto;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 32px;

      iframe:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
  .h-events {
    margin-bottom: 32px;
    h3 {
      font-size: $title-section_size;
      line-height: 35px;
      font-weight: bold;
      margin-bottom: 32px;
    }
  }
  .h-socials {
    margin-bottom: 32px;
    h3 {
      font-size: $title-section_size;
      line-height: 35px;
      font-weight: bold;
      margin-bottom: 32px;
    }
    a:not(:last-child) {
      margin-right: 25px;
    }
  }
}
</style>
