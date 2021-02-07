<template>
  <div>
    <v-form @submit.prevent="submitTodoForm">
      <v-text-field
        v-model="title"
        solo
        dense
        class="mt-5"
      >
        <v-btn
          icon
          slot="append"
          @click="submitTodoForm"
        >
          <v-icon
            color="teal"
          >
            mdi-send-outline
          </v-icon>
        </v-btn>
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoForm',
  methods: {
    ...mapActions(['addTodo']),
    submitTodoForm: function() {
      if (this.title) {
        this.addTodo(this.title);
        this.title = '';
      }
    }
  },
  data: () => ({
    title: ''
  }),
};
</script>
