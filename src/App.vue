<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </v-app-bar-nav-icon>

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
        text
      >
        <span class="mr-2">API</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </v-container>

      <v-bottom-navigation
        app
        :background-color="color"
        dark
        shift
      >
        <v-btn
          to="/todos"
        >
          <span>Todos</span>

          <v-icon>mdi-format-list-checks</v-icon>
        </v-btn>

        <v-btn
          to="/albums"
        >
          <span>Albums</span>

          <v-icon>mdi-image-album</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data: () => ({
  }),

  computed: {
    color () {
      console.log()
      switch (this.$route.name) {
        case 'Todos': return 'teal';
        case 'Albums': return 'indigo';
        default: return 'primary';
      }
    },
  }

};
</script>
