<template>
    <header id='header'>
        <router-link to='/'>
            <img alt='' src='' />
        </router-link>
        <div>
            <img alt='' src='' />
        </div>
    </header>
</template>

<style lang='scss'>
    #header{
        height: 64px;
        width: 100vw;
        border-bottom: 4px solid $accent-color;
        padding-left: 64px;
        padding-right: 64px;
        position: fixed;
        top:0;
    }
</style>