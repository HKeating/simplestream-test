<template>
  <div class="video">
    <h1>Video</h1>
    <h2>{{ videoData.title }}</h2>
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
