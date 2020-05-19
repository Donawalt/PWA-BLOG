<template>
    <header id='header'>
        <router-link to='/' class="elem">
            <img alt='World Chase Tag Logo' src='../assets/logo-header.png' />
        </router-link>
        <div class="elem">
            <img alt='Menu Burger Icon' src='../assets/menu-header.png' />
        </div>
    </header>
</template>

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