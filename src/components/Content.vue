<template>
  <div id="content" class="container">
    <div class="hero row">
      <div class="twelve columns stick">
        <img id="HFC" src="../assets/HFC21.png">

        <a href="https://cf23uhv4kuq.typeform.com/to/PLHGOPzK" target="_blank">
          <br>
          <button id="sign">
            SIGN UP
          </button>
        </a>
      </div>
    </div>
    <About/>
    <hr>
    <Prize/>
    <hr>
    <Partners/>
    <hr>
<!--    <div class="twelve columns">-->
<!--      <a href="https://cf23uhv4kuq.typeform.com/to/PLHGOPzK" target="_blank">-->
<!--        <br>-->
<!--        <button id="sign2">-->
<!--          SIGN UP-->
<!--        </button>-->
<!--      </a>-->
<!--    </div>-->

    <Covid />
    <hr>

    <Contact />
  </div>

</template>

<script>
import About from "./About";
import Prize from "./Prize";
import Partners from "./Partners";
import Contact from "./Contact";
import Covid from "./Covid";

export default {
  name: 'Content',
  components: {
    Contact,
    About,
    Prize,
    Partners,
    Covid
  },methods: {

  }, mounted() {
    document.getElementsByClassName("videobg-content")[0].addEventListener('scroll', function() {
      // console.log(this.scrollTop);
      let contentScroll = this.scrollTop / window.innerHeight ;
      let blur, sat;
      if (contentScroll >= 1) {
        blur = 42;
        sat = 1
      } else {
        blur = contentScroll * 42;
        sat = contentScroll;
      }
      // console.log(blur)
      document.getElementsByClassName("video-wrapper")[0].setAttribute(
          "style", "filter: blur(" + blur + "px)"
      );
      document.getElementById("HFC").setAttribute(
          "style", "filter: saturate(" + sat + ")"
      );
      document.getElementById("sign").setAttribute(
          "style", "filter: saturate(" + sat + ")"
      );
    });
  }
}



</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  /*overflow: scroll;*/
}

.row {
  text-align: center;
}

#HFC {
  filter: saturate(0);
  margin-bottom: 1vh;
  width: 80%;
}

.stick {
  position: sticky;
  top: 20vh;
  margin-bottom: 50px;
}

.hero {
  height: 120vh;
  /*display: block;*/
  /*margin-top: -20vh;*/
  /*margin-bottom: 120vh;*/
}

.columns, .column {
  text-align: center;
}

/*.video-wrapper{*/
/*  filter: blur(42px);*/
/*}*/

button {
  border: 2px #ff0000 solid;
  border-radius: 0;
  width: 250px;
  font-size: 18px;
  background: #000000;
  color: #ff0000;
  filter: saturate(0);
  /*opacity: 0.5*/
}

button:hover {
  opacity: 1;
  background: #ff0000;
  color: #000000;
  border: #000000;
}

@media (min-width:1920px) {
  #HFC {
    width: 710px;
  }
}

@media (max-width:720px) {
  .hero {

  }
}

</style>
