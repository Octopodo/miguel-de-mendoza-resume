<template>
  <div class="video-container">
    <iframe
      src="https://player.vimeo.com/video/749369651?autoplay=1&muted=1&loop=1"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%; /* for 16:9 aspect ratio */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
