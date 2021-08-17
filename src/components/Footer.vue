<template>
<div id="footer" class="container">
<!--  <div class="row">-->
<!--    <div class="flex">-->

<!--    </div>-->
<!--  </div>-->
  <div class="row">
    <div class="twelve columns">
      <div class="bottomright">
        <div class="item">

        </div>
      <span>
        <a href="https://paralelnipolis.cz" target="_blank">
          Paralelni Polis
        </a>
      </span>
        <span>
        //
      </span>
      <span>
        <a href="mailto:hackatoshi@flyingcircuit.com">
          Email
        </a>
      </span>
      <span>
        //
      </span>
      <span>
        <a href="https://twitter.com/hackatoshi" target="_blank">
        <img src="../assets/twitter.svg" id="a">
        <img src="../assets/twitter.svg" id="b">
        <img src="../assets/twitter.svg" id="c">
        </a>
      </span>

    </div>
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
  position: absolute;
  bottom: 0;
  /*right: 0;*/
  width: 100%;
  margin: 0 auto;
  /*text-align: right;*/
}

.row {
  width: 90%;
  margin: 0 auto;
  text-align: right;
}

span {
  opacity: 0.7;
  color: #fd0001;
  font-style: normal;
  text-underline: none;
}

a {
  color: #fd0001;
  text-decoration: none;
}

.bottomright {
  padding-right: 31px;
  margin-bottom: 1vh;
  opacity: 0.75;
}

.bottomright img {
  margin: 0;
  margin-left: 10px;
  line-height: 0;
  height: 21px;
  width: 21px;
  position: absolute;
}

@media (max-width: 400px) {
  .hide {
    display: none;
  }
  .row {
    width: 85%;
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
  filter: invert(13%) sepia(76%) saturate(4913%) hue-rotate(352deg) brightness(120%) contrast(122%);
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