<template>
  <div>
    <div v-if="loadingStatus">
      <wave-spin></wave-spin>
    </div>
    <div v-else>
      <h1 class="text-center mb-5">{{ album.title }}</h1>
      <v-row
        class="align-end"
      >
        <v-col
          v-for="image in images.slice(0, limit)"
          :key="image.id"
          cols="12"
          md="3"
        >
          <v-card>
            <v-card-title>{{ image.title }}</v-card-title>
            <v-img :src="image.url" :lazy-src="image.thumbnailUrl" />
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
import WaveSpin from 'vue-loading-spinner/src/components/Wave';

export default {
  name: 'Albums',
  components: {
    WaveSpin,
  },
  data: () => ({
    limit: 8,
  }),
  computed: {
    ...mapGetters(['images', 'album', 'loadingStatus']),
  },
  methods: {
    ...mapActions(['fetchAlbum', 'fetchImages']),
    loadMore: function() {
      this.limit += 8;
    },
  },
  async created() {
    await this.fetchAlbum(this.$route.params.id);
    await this.fetchImages();
  }
};
</script>
