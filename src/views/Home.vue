<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import * as videoService from '@/services/video';

export default {
  name: 'Home',
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
