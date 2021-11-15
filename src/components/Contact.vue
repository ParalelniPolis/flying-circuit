<template>
  <div class="wrpp">
    <div class="row">
      Get in touch over:
      <span>
        <a href="mailto:hackatoshi@flyingcircuit.com">
          Email
        </a>
      </span>
    </div>

    <div class="row">
        Follow Hackatoshi on
      <span>
      <a href="https://twitter.com/hackatoshi" target="_blank">
<!--        <img src="../assets/twitter.svg" id="a">-->
      </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.row {
  text-align: center;
}
a {
  text-decoration: underline;
  color: white;
}
img {
  margin: 0;
  margin-left: 10px;
  height: 21px;
  width: 21px;
}

.wrpp {
  margin-bottom: 20px;
}


</style>