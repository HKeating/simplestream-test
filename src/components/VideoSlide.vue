<template>
  <div class="video-slide">
    <router-link :to="{ name: 'Video', params: { videoData: video } }">
      <img
        :src="video.poster"
        alt="Video thumbnail"
        class="video-slide__thumbnail"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VideoSlide',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.video-slide {
  height: 600px;
  margin: 40px;

  &:focus {
    border: 2px solid #FFD700;
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
