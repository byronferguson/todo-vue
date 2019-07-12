<template>
  <li :class="{completed: todo.completed}" @click="onClick">{{ todo.text }}</li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}
</style>
