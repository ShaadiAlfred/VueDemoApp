<template>
  <div>
    <div v-if="loadingStatus">
      <hour-glass-spin></hour-glass-spin>
    </div>
    <div v-else>
      <h1 class="text-center mb-5">Albums</h1>
      <v-row>
        <v-col
          v-for="album in allAlbums.slice(0, limit)"
          :key="album.id"
          cols="12"
          md="3"
        >
          <v-card
            :color="getColor()"
            :to="'/albums/' + album.id"
          >
            <v-card-title>{{ album.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-btn
        class="d-block mx-auto mt-5 white--text"
        color="indigo"
        @click="loadMore()"
      >Load More</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HourGlassSpin from 'vue-loading-spinner/src/components/HourGlass';

export default {
  name: 'Albums',
  components: {
    HourGlassSpin,
  },
  data: () => ({
    limit: 8,
  }),
  computed: {
    ...mapGetters(['allAlbums', 'loadingStatus']),
  },
  methods: {
    ...mapActions(['fetchAlbums']),
    loadMore: function() {
      this.limit += 8;
    },
    getColor: () => {
            const colors = [
        'red',
        'purple',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'deep-orange',
        'brown',
      ];

      return colors[Math.floor(Math.random() * colors.length)];
    }
  },
  created() {
    this.fetchAlbums();
  }
};
</script>
