<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="slider" class="keen-slider">
        <div
          v-for="(video, index) in videoItems"
          :key="`video-slide-${index}`"
          :class="`keen-slider__slide number-slide${index + 1}`"
        >
          {{ video.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

export default {
  name: 'Carousel',
  props: {
    videoItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
      slider: null,
    };
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: this.currentSlide,
      slidesPerView: 2,
      slideChanged: s => {
        this.currentSlide = s.details().relativeSlide;
      },
      breakpoints: {
        '(min-width: 600px) and (max-width: 860px)': {
          slidesPerView: 3,
        },
        '(min-width: 861px) and (max-width: 1024px)': {
          slidesPerView: 4,
        },
        '(min-width: 1025px)': {
          slidesPerView: 5,
        },
      },
    });
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>
