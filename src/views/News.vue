<template>
  <div>
      <h1>Les Nouveautés</h1>
      <div>
        <div class='card' v-for="post in posts" :key='post.id'>
            <router-link :to='"/news/" + post.id'>
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