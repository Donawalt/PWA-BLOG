<template>
  <div class='actu'>
      <h1>Les Événements à venir</h1>
      <div class='grid'>
        <div class='card' v-for="post in posts" :key='post.id'>
            <router-link :to='"/events/" + post.id'>
                {{ post.title }}
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      response.json().then(data => {
        console.log(data);
        this.posts = data;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
  .actu{ 
    padding-top: 72px;
    h1{
      font-size: 35px;
      text-transform: uppercase;
      line-height: 40px;
      margin-top: 64px;
      margin-bottom: 32px;
      font-weight:bold;
    }

  }
  .grid{
      margin-left: $margin-content;
      margin-right: $margin-content;
      margin-bottom: 64px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 300px;
      grid-column-gap: 16px;
      grid-row-gap: 24px;


      .card{
        border: $accent-color solid 2px;
      }

      a{
        color: white;
      }
  }
</style>