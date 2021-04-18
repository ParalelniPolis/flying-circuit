<template>
  <div class="container">
<!--    <div class="row">-->
<!--      <div class="offset-by-seven six columns">-->
<!--        <div class="logo">-->
<!--          <img src="../assets/PWN_logo.png">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


    <div class="row">
      <div class="offset-by-seven five columns">
        <h1> Secured P2P loans backed by arbitrary collateral </h1>
      </div>
<!--      <div class="offset-by-seven five columns">-->
<!--        <h2> Leverage your digital wealth </h2>-->
<!--      </div>-->
      <div class="offset-by-seven five columns">
        <div class="logo">
          <img src="../assets/PWN_logo.png">
        </div>
      </div>
    </div>
    <Signup></Signup>
  </div>
</template>

<script>
import Signup from "@/components/Signup";
export default {
  name: 'Video',
  components: {Signup},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/normalize.css";
@import "../styles/skeleton.css";

.container {
  margin-top: 33vh;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 30px;
}

img {
  width: 200px;
}

/*h1, h2 {*/
/*  text-align: center;*/
/*  margin-bottom: 0;*/
/*}*/

h1 {
  color: #05cfb9;
  font-size: 2.5em;
  text-align: center;
}
</style>
