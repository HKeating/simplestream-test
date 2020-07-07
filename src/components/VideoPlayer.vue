<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    videoData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      player: null,
      options: {
        poster: this.videoData.poster,
        sources: [{ src: this.videoData.video }],
        fluid: true,
        controls: true,
      },
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
