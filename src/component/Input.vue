<template>
  <div class="wrapper">
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String
      },
      value: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>