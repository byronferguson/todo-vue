<template>
  <section>
    <TodoFilterButton :onClick="showAll">Show All</TodoFilterButton>
    <TodoFilterButton :onClick="showCompleted">Show Completed</TodoFilterButton>
    <TodoFilterButton :onClick="showActive">Show Active</TodoFilterButton>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import TodoFilterButton from "@/components/TodoFilterButton.vue";

export default {
  name: "TodoListFilter",
  components: {
    TodoFilterButton
  },
  methods: {
    ...mapActions(["showAll", "showCompleted", "showActive"])
  }
};
</script>

<style lang="scss" scoped>
</style>
