<template>
  <div class="newPost">
    <template v-if="post">
      <div class='post'>
       <section class='post-header' :style="{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 47.4%, #1F1F1F 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23)),  url(' + require('@/assets/images/actu.png') + ')'}">
         <h1>{{ post.title }}</h1>
       </section>
       <div class="content">{{ post.body}}</div>
      </div>
    </template>
    <template v-else>
      <p>Loading ...</p>
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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .post{
    min-height: 100vh;
    width: 100%;
    .post-header{
      height: 25vh;
      position: relative;
      h1{
        font-size: $title-article_size;
        position: absolute;
        bottom:0;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
      }
    }
    .content{
      margin-top: 60px;
      margin-left: $margin-content;
      margin-right: $margin-content;
    }
  }
}
</style>