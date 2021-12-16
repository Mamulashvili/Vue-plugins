<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <base-screen />
</template>

<script>
import BaseScreen from "./components/BaseScreen.vue";

export default {
  name: "App",
  components: {
    BaseScreen,
  },
};
</script>

<style lang="scss">
body {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
