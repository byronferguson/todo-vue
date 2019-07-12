<template>
  <form @submit.prevent="onSubmit">
    <label>
      New Todo:
      <input v-model="text" />
    </label>
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoNewItem",
  data: () => ({
    text: ""
  }),
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit: async function() {
      await this.addTodo(this.text);
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 4px;
}
</style>
