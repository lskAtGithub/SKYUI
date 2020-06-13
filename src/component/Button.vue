<template>
  <button class="btn" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <v-Icon v-if="icon && !loading" class="icon" :name="icon"></v-Icon>
    <v-icon v-if="loading" class="loading icon" name="loading"></v-icon>
    <div class="solt">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: 'normal'
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

.btn {
  color: #9b9b9b;
  padding: 0 1em;
  background: #fff;
  border: 1px solid #9b9b9b;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  transition: .5s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  .solt{order: 2;}
  .icon{order: 1; margin-right: .15em;}
  &.icon-right{
    >.solt{order: 1;}
    >.icon{order: 2;margin-right: 0; margin-left: 0.15em;}
  }


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
  .loading{
    animation: spin 2s linear infinite;
  }
}
</style>
