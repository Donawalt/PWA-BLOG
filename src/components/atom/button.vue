<template>
  <button>
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 1rem;
  font-weight: bold;
  width: 176px;
  height: 36px;
  border: 1px solid $accent-color;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  padding: 8px;
  transition: 300ms;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    background-color: $accent-color;
    transition: 300ms;
  }
}
</style>