<template>
  <div class="content">
    <settings></settings>
    <resumes></resumes>
  </div>
</template>

<script>
import settings from '@/components/settings/index.vue'
import resumes from '@/components/resumes/index.vue'

export default {
  name: 'detail',
  components: { settings,resumes },
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
  .content{
    flex:auto;
    padding:10px;
    text-align: left;

    display: flex;
    flex-direction: column;
  }

  .module{
    background:#fafafa;
    margin:0 0 10px;
    flex:auto;
  }
  .module:last-child{
    margin:0;
  }
</style>
