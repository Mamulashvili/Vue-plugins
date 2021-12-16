<template>
  <div class="alert" :class="alertType">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    alertType: {
      type: String,
      required: false,
      default: "primary",
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  text-align: left;
  max-width: 100%;
  padding: 1.2rem;
  border: 1px solid;
  border-radius: 5px;
}

.primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
</style>
