<template>
    <button>
        <slot>Button</slot>
    </button>
</template>

<style lang="scss" scoped>
    button{
        border: 1px solid #FF1313;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: transparent;
        color:white;
        padding: 8px;
        a{
            color:white;
            text-decoration: none;
        }
    }
</style>