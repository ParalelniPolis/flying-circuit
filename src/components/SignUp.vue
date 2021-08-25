<template>
<div class="row">
    <a href="https://bordel.space" target="_blank">
      <button href="https://bordel.space" target="_blank">
        SIGN UP
      </button>
    </a>
</div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>
.row {
  text-align: center;
}

button {
  border: 2px #ff0000 solid;
  border-radius: 0;
  width: 200px;
  background: #000000;
  color: #ff0000;
  filter: saturate(1);
  opacity: 0.5
}

button:hover {
  opacity: 0.99;
}

</style>