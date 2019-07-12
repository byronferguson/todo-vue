<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <template v-for="todo in todos">
        <TodoListItem :key="todo.id" :todo="todo" :onClick="() => onTodoClick(todo.id)" />
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
    onTodoClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
