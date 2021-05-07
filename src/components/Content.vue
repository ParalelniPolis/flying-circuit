<template>
  <div id="content" class="container">
    <div class="row">
      <div class="offset-by-seven five columns">
        <div class="logo">
          <img src="../assets/PWN_logo.svg">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-by-four eight columns">
        <h1> P2P loans backed by </h1>
        <h1> arbitrary collateral </h1>
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

#content {
  /*flex: 1 0 auto;*/
}

.container {
  margin-top: 34vh;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  text-align: right;
  margin-bottom: 60px;
  margin-top: -50px;
}

img {
  width: 150px;
  /*height: 5vh;*/
}

/*h1, h2 {*/
/*  text-align: center;*/
/*  margin-bottom: 0;*/
/*}*/

h1 {
  color: #05cfb9;
  font-size: 2.2em;
  text-align: right;
  margin-top: -10px;
}

@media (max-width:400px) {
  .container {
    margin-top: 16vh;
  }
}

</style>
