<template>
  <h1>Vue plugins</h1>
  <fonts-example />
  <alerts-example />
</template>

<script>
import FontsExample from "@/components/FontsExample";
import AlertsExample from "@/components/AlertsExample";

export default {
  name: "BaseScreen",
  components: {
    FontsExample,
    AlertsExample,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
ul {
  padding: 0;

  li {
    list-style-type: none;
  }
}
</style>
