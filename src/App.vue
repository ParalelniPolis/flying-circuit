<template>
  <div id="app">
<!--    <video-background :src="require('@/assets/output3.mp4')" style="max-height: 100vh; height: 100vh;">-->
    <video-background src="/nft.mp4" style="max-height: 100vh; height: 100vh;">
    <Content></Content>
      <Footer></Footer>
    </video-background>
  </div>

</template>

<script>
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Content
  }
}
</script>

<style>
@font-face {
  font-family: "AutoscapeWeb-Regular";
  src: url("./assets/AutoscapeWeb-Regular.woff") format("woff"),
       url("./assets/AutoscapeWeb-Regular.woff2") format("woff2"),
       url("./assets/AutoscapeWeb-Regular.ttf") format("ttf");
}

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #111111;
}

body {
  /*display: flex;*/
  /*flex-direction: column;*/
}

#app {
  font-family: "AutoscapeWeb-Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #05cfb9;
  background-color: #111111;
}


</style>
