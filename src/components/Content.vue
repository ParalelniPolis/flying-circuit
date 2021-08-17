<template>
  <div id="content" class="container">
    <div class="top row">
      <div class="twelve columns">
        <div class="logo">
          <img src="../assets/hfc-text-color-transparent.png">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-by-three six columns">
        <div id="info">
          <h1> Paralelni Polis, Prague, CZ </h1>
          <h1> September 24<sup>th</sup> - 26<sup>th</sup> 2021  </h1>
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

#content {
  /*flex: 1 0 auto;*/
}

#info {
  background-color: black;
  border: 1px dotted white;
  padding-top: 2rem;
  transform: rotate(-4deg);
  /*width: 450px;*/
  opacity: 0.8;
}

.columns {
  text-align: center;
  text-align: -webkit-center;
}

/*.container {*/
/*  margin-top: 34vh;*/
/*}*/
.top {
  margin-top: 20vh;
}

.logo {
  margin-bottom: 60px;
}

img {
  width: 80%;
  /*height: 5vh;*/
}

/*h1, h2 {*/
/*  text-align: center;*/
/*  margin-bottom: 0;*/
/*}*/

h1 {
  color: #fd0001;
  font-size: 2.2em;
}

@media (max-width:400px) {

}

</style>
