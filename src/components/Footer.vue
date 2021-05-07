<template>
<div id="footer" class="container">
  <div class="row">
    <div class="credits twelve columns">
      <span>Artwork by</span>
      <span><a href="https://foundation.app/happygoat" target="_blank"> HappyGoat <span class="hide">Studio</span> </a></span>
    </div>
    <div class="bottomright">
        <a href="https://twitter.com/pwnfinance" target="_blank">
          <img src="../assets/twitter.svg" id="a">
          <img src="../assets/twitter.svg" id="b">
          <img src="../assets/twitter.svg" id="c">
        </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  /*left: 0;*/
  /*width: 100%;*/
  /*text-align: center;*/
}

span {
  opacity: 0.3;
  color: #05cfb9;
  font-style: normal;
  text-underline: none;
}

.hide {
  opacity: 1.3;
}

a {
  color: #05cfb9;
  text-decoration: none;
}

.credits {
  margin-left: 6px;
}

.bottomright {
  padding: 2em;
  position: fixed;
  bottom: 0;
  right: 0;

  margin-right: 1em;
  margin-bottom: 1em;
  opacity: 0.5;
}
.bottomright div {
  display: inline;
  margin-left: 10px;
}
.bottomright img {
  margin: 0;
  line-height: 0;
  height: 2em;
  width: 2em;
  position: absolute;
}

@media (max-width: 400px) {
  .hide {
    display: none;
  }
  .credits {
    margin-left: 2px;
  }
}

/*Animation*/
#a {
  filter: invert(90%) sepia(43%) saturate(495%) hue-rotate(358deg) brightness(104%) contrast(103%);
}

#b {
  filter: invert(47%) sepia(19%) saturate(6962%) hue-rotate(333deg) brightness(93%) contrast(86%);
}

#c {
  filter: invert(69%) sepia(35%) saturate(3266%) hue-rotate(125deg) brightness(94%) contrast(96%);
}

#a:hover {
  animation: glitch1 2.5s infinite;
}

#b:hover {
  animation: glitch2 2.5s infinite;
}

#c:hover {
  animation: glitch3 2.5s infinite;
}

/*Keyframes*/

@keyframes glitch1 {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes glitch2 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

@keyframes glitch3 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}
</style>