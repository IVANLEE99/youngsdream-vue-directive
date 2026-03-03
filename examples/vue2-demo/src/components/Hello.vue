<template>
  <div class="hello">{{ msg }}</div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hello {
  margin-top: 16px;
  color: #42b983;
}
</style>