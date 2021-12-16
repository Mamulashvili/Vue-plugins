<template>
  <br />
  <h3>Alerts (Bootstrap type)</h3>
  <ul>
    <li>
      <base-alert>
        <p v-font-weight:bold>
          This is primary alert sample with font-weight directive
        </p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="secondary">
        <p>This is secondary alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="success">
        <p>This is success alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="danger">
        <p>This is danger alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="warning">
        <p>This is warning alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="info">
        <p>This is info alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="light">
        <p>This is light alert</p>
      </base-alert>
    </li>
    <li>
      <base-alert alert-type="dark">
        <p>This is dark alert</p>
      </base-alert>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AlertsExample",
};
</script>
<style lang="scss" scoped>
li {
  margin: 15px auto;
  max-width: 80%;

  p {
    margin: 0;
  }
}
</style>
