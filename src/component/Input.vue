<template>
  <div class="wrapper">
    <img src="../assets/logo.png" alt="loading" class="logo">
    <img src="../assets/logo.png" alt="loading" class="logo">
    <img src="../assets/logo.png" alt="loading" class="logo">
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
.wrapper{
  text-align: center;
  margin-top: 200px;

  .logo{
    filter: contrast(175%) brightness(3%);
    transition: all 2s;
    margin: 0 10px;
  }

  .logo:hover{
    filter: contrast(0%) brightness(0%);
  }
}
</style>