<template>
  <div class="module">
    {{$route.params.id}}
    <br />
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      msg: '这里放职位设置信息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
