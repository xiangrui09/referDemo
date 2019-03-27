<template>
  <div class="wrap">
    <positions></positions>
    <router-view/>
  </div>
</template>

<script>
import positions from '@/components/position/index.vue'

export default {
  name: 'list',
  components: { positions },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .wrap{
    display: flex;
    flex:auto;
  }



</style>
