<template>
  <div class="video">
    <h1>Video</h1>
    <h2>{{ videoData.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    videoData: {
      type: Object,
      required: true,
    },
  },
};
</script>
