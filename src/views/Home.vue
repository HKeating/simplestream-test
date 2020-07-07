<template>
  <div class="home">
    <h1 class="page-title">Video Player Test</h1>
    <carousel v-if="videos.length" :videoItems="videos" />
  </div>
</template>

<script>
import * as videoService from '@/services/video';
import Carousel from '@/components/Carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
  },
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    videoService.getVideos().then(videoData => {
      this.videos = videoData.data;
    });
  },
};
</script>
