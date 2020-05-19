<template>
  <div class="home">
    <router-link to='/news'>News</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
 .home{
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
 }
</style>