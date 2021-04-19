<template>
  <div id="signup">
<!--    <div class="row">-->
<!--      <div class="offset-by-seven five columns">-->
<!--        <input type="email" class="inEmail" value="your@email.pwn">-->
<!--      </div>-->
<!--    </div>-->

    <div class="row">
      <div class="offset-by-seven five columns center">
        <a href="https://discord.gg/yUBsacmQKN" target="_blank">
          <input type="button" class="inButton" value="JOIN DISCORD">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup"
}
</script>

<style scoped>

#signup {
  margin-top: 5vh
}

.center {
  text-align: center;
}

 .inEmail {
   background: transparent;
   border: #05cfb9 solid 2px;
   color: #05cfb9;
   border-radius: 0;
   width: 100%;
   height: 2em;
   font-size: 1.75em;

 }

 .inEmail:focus {
    border: #f8fafb solid 2px;
    color: #f8fafb;
  }
 .inButton {
   background-color: #05cfb9;
   border: #05cfb9 solid 2px;
   border-radius: 0;
   height: 2em;
   font-size: 1.75em;
   color: #111111;
 }
 .inButton:hover,  .inButton:active {
   background-color: #111111;
   border: #05cfb9 solid 2px;
   border-radius: 0;
   height: 2em;
   font-size: 1.75em;
   color: #05cfb9;
 }
</style>