<template>
    <div id="signup" class="row">
      <div class="offset-by-nine three columns">
        <a href="https://discord.gg/yUBsacmQKN" target="_blank">
          <div class="button">
            <img src="../assets/button.svg">
          </div>
        </a>
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
  margin-top: 5vh;
  text-align: right;
}

.button {
  animation: button 1.5s alternate infinite ease-in;
  border: none;
  margin: 0px;
  padding: 0px;
}

@keyframes button {
  0%   {transform: scale(.8);}
  100% {transform: scale(.9);}
}
</style>