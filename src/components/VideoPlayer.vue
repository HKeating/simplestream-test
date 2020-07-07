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

<style lang="scss">
.video-js .vjs-big-play-button {
  &:focus {
    background: #ffd700;
  }
}
.video-js {
  .vjs-big-play-button .vjs-icon-placeholder:before {
    content: '';
    background-image: url('http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
  }

  .vjs-play-control {
    .vjs-icon-placeholder:before {
      background-repeat: no-repeat;
      background-size: 10px;
      background-position: center;
    }

    &.vjs-playing .vjs-icon-placeholder:before {
      content: '';
      background-image: url('http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png');
    }
    &.vjs-paused .vjs-icon-placeholder:before {
      content: '';
      background-image: url('http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png');
    }
  }
}
</style>
