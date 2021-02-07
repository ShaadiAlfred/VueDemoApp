<template>
  <div>
    <div v-if="loadingStatus">
      <jumper-spin></jumper-spin>
    </div>
    <div v-else>
      <TodoForm />
      <transition-group name="todo-item" class="todos" tag="div">
        <v-card
          v-for="todo in allTodos.slice(0, limit)"
          :key="todo.id"
          elevation="2"
          class="todo-item mb-5"
          @click="updateTodoFromCard(todo)"
          @drag="console.log('asdf')"
        >
          <v-card-title>
            <v-checkbox
              py-5
              v-model="todo.completed"
              :label="todo.title"
              off-icon="mdi-checkbox-blank-circle-outline"
              on-icon="mdi-checkbox-marked-circle"
              :class="{'completed': todo.completed}"
              @click="updateTodoFromCard(todo)"
            ></v-checkbox>
          </v-card-title>
        </v-card>
      </transition-group>
      <v-btn
        class="d-block mx-auto"
        @click="loadMore"
        color="teal"
      >Load More</v-btn>
    </div>
  </div>
</template>

<script>
import JumperSpin from 'vue-loading-spinner/src/components/Jumper';
import TodoForm from '../components/TodoForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  components: {
    JumperSpin,
    TodoForm,
  },
  data: () => ({
    limit: 5,
  }),
  methods: {
    ...mapActions(['fetchTodos', 'updateTodo']),
    updateTodoFromCard: function(todo) {
      todo.completed = ! todo.completed;
      this.updateTodo(todo);
    },
    loadMore: function() {
      this.limit += 5;
    }
  },
  computed: {
    ...mapGetters(['allTodos', 'loadingStatus']),
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss">
.completed {
  label {
    text-decoration: line-through;
  }
}
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.todo-item {
  transition: all 1s;

  .v-card__title {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.todo-item-enter {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
