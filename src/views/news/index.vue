<template>
  <div class="newPost">
    <template v-if="post">
      <h1>{{ post.title }}</h1>
      <div class="content">{{ post.body}}</div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    };
  },
  created() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`
    ).then(response => {
      response.json().then(data => {
        this.post = data;
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.newPost {
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>