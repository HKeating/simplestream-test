<template>
  <div class="video">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <h1 class="page-title">{{ videoData.title }}</h1>
    <video-player :videoData="videoData" />
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer';

export default {
  name: 'Video',
  components: {
    VideoPlayer,
  },
  props: {
    videoData: {
      type: Object,
      required: true,
    },
  },
};
</script>
