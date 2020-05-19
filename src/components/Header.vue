<template>
    <header id='header'>
        <router-link to='/' class="elem">
            <img alt='World Chase Tag Logo' src='../assets/images/logo-header.png' />
        </router-link>
        <div class="elem">
            <img v-on:click="showMenu" alt='Menu Burger Icon' src='../assets/images/menu-header.png' />
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        showMenu: function () {
          document.querySelector(".menu").style.display = "block";
          document.querySelector(".menu").style.pointerEvents = "all";
        }
    }
}
</script>

<style lang='scss'>
    #header{
        height: 64px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        border-bottom: 4px solid $accent-color;
        background-color: $background-color;
        position: fixed;
        z-index: 100;
        top:0;
        .elem{
            margin-left:64px;
            margin-right: 64px;
        }
    }
</style>