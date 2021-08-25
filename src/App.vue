<template>
  <div id="app" >
    <video-background src="/hfc.mp4" style="max-height: 100vh; height: 100vh">
    <Content />
    </video-background>
  </div>

</template>

<script>
import Content from "@/components/Content";

export default {
  name: 'App',
  components: {
    Content
  },
  data () {
    return {
      blur: 10
    }
  },
  methods: {
  },
  computes: {
    // scrollable () {
    //   return {
    //     '--blur': "blur("+this.blur+"px)"
    //   }
    // }
  }
}
</script>

<style>
@import "./styles/normalize.css";
@import "./styles/skeleton.css";

/*@font-face {*/
/*  font-family: "AutoscapeWeb-Regular";*/
/*  src: url("./assets/AutoscapeWeb-Regular.woff") format("woff"),*/
/*       url("./assets/AutoscapeWeb-Regular.woff2") format("woff2"),*/
/*       url("./assets/AutoscapeWeb-Regular.ttf") format("ttf");*/
/*}*/

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #111111;
  overflow-x: hidden;

}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: "Helvetica", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #111111;
}

.videobg-content {
  overflow: scroll;
}

.columns, .column {
  text-align: justify;
}

/*.video-wrapper {*/
/*  !*filter: blur(42px); */
/*}*/

/* Styling */
h1, h2, h3, h4 {
  text-align: center;
}

p {
  text-align: justify;
  font-size: 18px;
}

</style>
