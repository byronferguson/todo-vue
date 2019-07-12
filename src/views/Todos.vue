<template>
  <main>
    <TodoNewItem />
    <TodoList :todos="filteredTodos" :onTodoClick="toggleTodo" />
    <TodoListFilter />
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoNewItem from "@/components/TodoNewItem.vue";
import TodoListFilter from "@/components/TodoListFilter.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  components: {
    TodoList,
    TodoNewItem,
    TodoListFilter
  },
  computed: {
    ...mapGetters(["filter", "todos", "filteredTodos"])
  },
  methods: {
    ...mapActions(["toggleTodo"])
  }
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 16px;
}
</style>
