<template>
  <div class="home">
    <section class="h-header">
      <div class="h-header-bg">
        <video autoplay muted loop>
          <source src='../assets/videos/WCT-header.mp4' type='video/mp4'>
        </video>
      </div>
      <div class="h-header-content">
        <div class='h-title'>
          <p>This is the</p>
          <h1>World Chase Tag</h1>
        </div>
      </div>
    </section>
    <section class="h-intro">
      <p>Le « chase tag » ressemble au jeu de notre enfance : un poursuiveur doit attraper un poursuivi et le toucher pour le capturer. Une capture rapporte un point, une évasion en rapporte trois. Les matchs peuvent se faire en one-on-one ou en équipes.</p> 
      <img alt="Enfants jouant au chase tag" src="../assets/images/intro.png" />
    </section>
    <section class="h-theme">
      <img alt="" src="../assets/images/arbitrage.png">
      <router-link to='/rules'>
        <Button>Découvrir les règles</Button>      </router-link>
      <router-link to='/athletes'>
        <Button>Les derniers athlètes</Button>
      </router-link>
      <img alt="" src='../assets/images/athletes.png'>
    </section>
    <section class='h-actu'>
      <h3>LES DERNIERES ACTUALITÉS</h3>
      <div class='h-actu-grid'>
        <template v-for="post in posts">
          <router-link :to='"/news/" + post.id' :key='post.id' :style="{ backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 61.46%, #000000 100%), url(' + require('@/assets/images/actu.png') + ')'}" class='card'>
            <div class='actu-card-background'></div>
            <div class='actu-card-info'>
              <p class='date'>24 janvier 2020</p>
              <h4>{{ post.title }}</h4>
              <p class='resume'>Toutes nos félicitations à @blacklistparkour pour sa victoire aux championnats d'Europe PRO 2GO 2019 ...</p>
            </div>
          </router-link>
        </template>
      </div>
      <Button>
        <router-link to='/news'>Voir toutes les actualités</router-link>
      </Button>
    </section>
  </div>
</template>

<script>
import Button from '../components/atom/button'
export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      posts: null
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      response.json().then(data => {
        console.log(data);
        this.posts = data.slice(0,4);
      });
    });
  }, 
};
</script>

<style lang="scss">
.home {
  a{
    text-decoration: none;
  }
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  .h-header{
    position: relative;
    .h-header-bg{
    overflow: hidden;
    width:100vw;
    height: 80vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    &::before{
      content: ""; // ::before and ::after both require content
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 47.4%, #1F1F1F 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23));
      opacity: .7;
    }
    video{
      min-height: 120vh;
      min-width: 300vw;
    }
    }
    .h-header-content{
      position: absolute;
      width: $width-content;
      margin-left: $margin-content;
      margin-right: $margin-content;
      padding-top: 128px;
      top:0;
      .h-title{
        width: 40%;
        text-align: left;
        p{
          font-size: 22.5px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        h1{
          font-size: $title-big-size;
          font-weight:bold;
          text-transform: uppercase;
        }
      }
    }
  }
  .h-intro{
    margin-top: -25px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
    p{
      text-align: left;
      font-weight: bold;
      line-height: 1.5em;
      position: relative;
      z-index: 1;
    }
    img{
      width:100%;
      position: relative;
      z-index: 1;
    }
  }
  .h-theme{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 60px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    width: auto;
    grid-column-gap: 16px;
    img{
      width: 100%
    }
    a{
      display: flex;
      justify-content: center;
      align-items:center;
    }
  }
  .h-actu{
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: $margin-content;
    margin-right: $margin-content;
    h3{
      font-size: $title-section_size;
      line-height: 35px;
      font-weight: bold;
      margin-bottom: 32px;
    }
    .h-actu-grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 304px 304px;
      grid-column-gap: 16px;
      grid-row-gap: 24px;
      margin-bottom: 32px;
      .card{
        position: relative;
        color:white;
        text-decoration: none;
        .actu-card-info{
          position: absolute;
          margin: 16px;
          margin-bottom: 0;
          bottom: 16px;
          text-align:left;
          .date{
            font-size: 8px;
            margin-bottom: 6px;
          }
          h4{
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          .resume{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>