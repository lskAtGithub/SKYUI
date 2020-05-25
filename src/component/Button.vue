<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
    <v-Icon name="left"></v-Icon>
  </div>
</template>

<script>
export default {
  props: {
    
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: #9b9b9b;
  padding: 0 1em;
  background: #fff;
  border: 1px solid #9b9b9b;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: 1s;

  &:focus {
    outline: none;
  }
  &:active {
    color: #333;
  }
  &:hover {
    color: #333;
    background: #f9f9f9;
  }
}
</style>
