<template>
    <footer id='footer'>
        <router-link to='/' class="elem">
            <img alt='World Chase Tag Logo' src='../assets/logo-header.png' />
        </router-link>
        <div>
            <p>Mentions légales | Politiques de confidentialites | Gestion des Cookies</p>
        </div>
    </footer>
</template>

<style lang="scss">
    #footer{
        height: 108px;
        width: 100vw;
        border-top: 4px solid $accent-color;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>