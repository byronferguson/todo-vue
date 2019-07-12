<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "TodoFilterButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 4px;
}
</style>
